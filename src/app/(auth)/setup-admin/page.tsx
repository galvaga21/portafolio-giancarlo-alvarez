"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Lock, ShieldAlert, ArrowRight } from "lucide-react";

export default function SetupAdminPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const adminName = formData.get("adminName") as string;
    const secretKey = formData.get("secretKey") as string;

    // Hardcoded secret key for "production" setup purposes as requested.
    // In a real scenario, this should be validated against an env var safely or via cloud function.
    // For this portfolio demo, we'll use a strong string.
    if (secretKey !== "PORTFOLIO_MASTER_KEY_2024") {
        setError("Clave maestra incorrecta. Acceso denegado.");
        setLoading(false);
        return;
    }

    try {
      // Create User
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update Profile
      await updateProfile(user, { displayName: adminName });

      // Create Firestore Doc with ADMIN role
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: adminName,
        role: "admin", // Explicitly setting admin role
        bio: "System Administrator",
        createdAt: serverTimestamp()
      });

      alert("Cuenta de Administrador creada con éxito.");
      router.push("/admin/users");
      
    } catch (err: unknown) {
      console.error(err);
      const error = err as any;
      if (error.code === "auth/email-already-in-use") {
          setError("El correo ya está registrado.");
      } else {
          setError("Error al crear el administrador: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl p-8">
        <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600 dark:text-red-500 mb-4">
                <ShieldAlert size={32} />
            </div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-white text-center">Configuración de Admin</h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center mt-2">
                Acceso restringido para creación de superusuario.
            </p>
        </div>

        {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm flex items-center gap-2 mb-6">
                <Lock className="w-4 h-4" />
                {error}
            </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Clave Maestra</label>
                <input 
                    type="password" 
                    name="secretKey" 
                    required 
                    placeholder="Ingrese la clave de sistema"
                    className="block w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 text-zinc-900 dark:text-white focus:ring-red-500 focus:border-red-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Nombre del Admin</label>
                <input 
                    type="text" 
                    name="adminName" 
                    required 
                    placeholder="Admin Principal"
                    className="block w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 text-zinc-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    required 
                    placeholder="admin@sistema.com"
                    className="block w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 text-zinc-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Contraseña</label>
                <input 
                    type="password" 
                    name="password" 
                    required 
                    placeholder="••••••••"
                    className="block w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 text-zinc-900 dark:text-white focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>

            <button 
                type="submit" 
                disabled={loading}
                className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                {loading ? "Creando..." : "Crear Administrador"}
                {!loading && <ArrowRight className="ml-2 w-4 h-4" />}
            </button>
        </form>
      </div>
    </div>
  );
}
