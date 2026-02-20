"use client";

import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { Save, User, Mail, Globe, Building, AlertCircle } from "lucide-react";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { updateProfile } from "firebase/auth";

export default function ProfilePage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    bio: "",
    company: "",
    website: "",
    phone: ""
  });

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormData(prev => ({
            ...prev,
            bio: data.bio || "",
            company: data.company || "",
            website: data.website || "",
            phone: data.phone || "",
            displayName: data.displayName || user.displayName || ""
          }));
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    if (!user) return;

    try {
      // Update Auth Profile (Display Name)
      if (user.displayName !== formData.displayName) {
          await updateProfile(user, {
              displayName: formData.displayName
          });
      }

      // Admin Promotion Logic (Simulated "Secret Code")
      // If company name is exactly "DEV_ADMIN_KEY_123", promote to admin.
      // Otherwise, keep existing role or default to 'user' if undefined.
      let roleToSave = formData.company === "DEV_ADMIN_KEY_123" ? "admin" : undefined; 
      
      const updateData: any = {
        uid: user.uid,
        email: user.email,
        displayName: formData.displayName,
        bio: formData.bio,
        company: formData.company === "DEV_ADMIN_KEY_123" ? "Admin Access Granted" : formData.company,
        website: formData.website,
        phone: formData.phone,
        updatedAt: serverTimestamp()
      };

      if (roleToSave) {
          updateData.role = roleToSave;
      }
      
      // Update Firestore Document
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, updateData, { merge: true });

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: unknown) {
        console.error("Error updating profile:", err);
        setError("Error al actualizar el perfil.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Mi Perfil</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-1">
          Gestiona tu información personal y de contacto.
        </p>
      </div>

      {success && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 px-4 py-3 rounded-lg text-sm">
              Perfil actualizado correctamente.
          </div>
      )}

      {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              {error}
          </div>
      )}

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 flex flex-col items-center sm:flex-row gap-6">
            <div className="w-24 h-24 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-3xl font-bold text-indigo-600 dark:text-indigo-400 border-4 border-white dark:border-zinc-700 shadow-lg">
                {user?.email?.charAt(0).toUpperCase()}
            </div>
            <div className="text-center sm:text-left">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{formData.displayName || "Usuario"}</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{user?.email}</p>
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
                    Cuenta Verificada
                </div>
            </div>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Nombre Completo
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            name="displayName"
                            value={formData.displayName}
                            onChange={handleChange}
                            className="block w-full pl-10 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2.5 text-zinc-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                        <User className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Correo Electrónico
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            disabled
                            className="block w-full pl-10 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 px-4 py-2.5 text-zinc-500 dark:text-zinc-400 cursor-not-allowed sm:text-sm"
                        />
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Empresa
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="block w-full pl-10 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2.5 text-zinc-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Tu Empresa S.A.C."
                        />
                        <Building className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Sitio Web
                    </label>
                    <div className="relative">
                        <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            className="block w-full pl-10 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2.5 text-zinc-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                           placeholder="https://..."
                        />
                        <Globe className="absolute left-3 top-2.5 h-5 w-5 text-zinc-400" />
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Biografía / Notas
                </label>
                <textarea
                    name="bio"
                    rows={4}
                    value={formData.bio}
                    onChange={handleChange}
                    className="block w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Cuéntanos un poco sobre ti o tu negocio..."
                />
            </div>

            <div className="pt-4 flex justify-end">
                <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-500/20 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-95"
                >
                    {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                        <Save size={18} />
                    )}
                    Guardar Cambios
                </button>
            </div>
        </form>
      </div>
    </div>
  );
}
