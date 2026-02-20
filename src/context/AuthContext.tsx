"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  registerWithEmailAndPassword: (email: string, password: string, displayName?: string) => Promise<void>;
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  userData: any;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  loginWithGoogle: async () => {},
  registerWithEmailAndPassword: async () => {},
  loginWithEmailAndPassword: async () => {},
  logout: async () => {},
  userData: null,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<any>(null); // Store Firestore data (role, etc.)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
          // Fetch additional data from Firestore
          try {
              const { doc, getDoc } = await import("firebase/firestore");
              const { db } = await import("@/lib/firebase");
              const userDoc = await getDoc(doc(db, "users", currentUser.uid));
              if (userDoc.exists()) {
                  setUserData(userDoc.data());
              } else {
                  setUserData(null);
              }
          } catch (error) {
              console.error("Error fetching user data:", error);
              setUserData(null);
          }
      } else {
          setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      // Check if user exists in Firestore, if not create basic doc
      const { doc, getDoc, setDoc, serverTimestamp } = await import("firebase/firestore");
      const { db } = await import("@/lib/firebase");
      
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
          await setDoc(userRef, {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              role: "user",
              createdAt: serverTimestamp(),
              picture: user.photoURL
          });
      }
    } catch (error) {
      console.error("Error logging in with Google", error);
      throw error;
    }
  };

  const registerWithEmailAndPassword = async (email: string, password: string, displayName?: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Create user document in Firestore
      const { doc, setDoc, serverTimestamp } = await import("firebase/firestore");
      const { db } = await import("@/lib/firebase");
      const { updateProfile } = await import("firebase/auth");

      if (displayName) {
          await updateProfile(user, { displayName });
      }

      await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          email: user.email,
          displayName: displayName || "",
          role: "user",
          createdAt: serverTimestamp()
      });
      
    } catch (error) {
      console.error("Error creating user", error);
      throw error;
    }
  };

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error logging in with email and password", error);
      throw error;
    }
  };

  const logout = async () => {
    setUser(null);
    setUserData(null);
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, userData, loading, loginWithGoogle, registerWithEmailAndPassword, loginWithEmailAndPassword, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
