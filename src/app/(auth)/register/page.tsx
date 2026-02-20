"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Mail, ArrowRight, Chrome, AlertCircle } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { registerWithEmailAndPassword, loginWithGoogle } = useAuth();
  const router = useRouter();

  const handleGoogleLogin = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await loginWithGoogle();
      router.push("/dashboard");
    } catch (err: unknown) {
        console.error(err);
        setError("Error al registrarse con Google.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirm-password") as string;

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
        setError("La contraseña debe tener al menos 6 caracteres.");
        setIsLoading(false);
        return;
    }

    const firstName = formData.get("first-name") as string;
    const lastName = formData.get("last-name") as string;
    const displayName = `${firstName} ${lastName}`.trim();

    try {
      await registerWithEmailAndPassword(email, password, displayName);
      // User is created and logged in automatically by Firebase
      router.push("/dashboard");
    } catch (err: unknown) {
        console.error(err);
        const firebaseError = err as { code?: string };
        if (firebaseError.code === 'auth/email-already-in-use') {
             setError("El correo electrónico ya está en uso.");
        } else {
             setError("Error al crear la cuenta. Inténtalo de nuevo.");
        }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="absolute top-6 right-6 flex items-center gap-4">
         <ThemeToggle />
         <Link href="/" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Volver al inicio
         </Link>
      </div>

      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Crear una cuenta
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          ¿Ya tienes cuenta?{" "}
          <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
            Inicia sesión aquí
          </Link>
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                {error}
            </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <button
             type="button"
             onClick={handleGoogleLogin}
             disabled={isLoading}
             className="flex items-center justify-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Chrome className="w-4 h-4" />
            Google
          </button>
          <button 
             type="button"
             className="flex items-center justify-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white transition-all opacity-50 cursor-not-allowed"
             disabled
             title="Próximamente"
          >
            <Github className="w-4 h-4" />
            GitHub
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-200 dark:border-zinc-800" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-black text-zinc-500">
              O regístrate con email
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
                <label htmlFor="first-name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Nombre
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  className="block w-full rounded-lg border border-zinc-300 dark:border-zinc-800 px-4 py-3 bg-white dark:bg-zinc-900/50 text-zinc-900 dark:text-white placeholder-zinc-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-colors"
                  placeholder="Juan"
                />
             </div>
             <div className="space-y-2">
                <label htmlFor="last-name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Apellido
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  className="block w-full rounded-lg border border-zinc-300 dark:border-zinc-800 px-4 py-3 bg-white dark:bg-zinc-900/50 text-zinc-900 dark:text-white placeholder-zinc-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-colors"
                  placeholder="Pérez"
                />
             </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Correo Electrónico
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-lg border border-zinc-300 dark:border-zinc-800 px-4 py-3 bg-white dark:bg-zinc-900/50 text-zinc-900 dark:text-white placeholder-zinc-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-colors"
                placeholder="nombre@ejemplo.com"
              />
              <Mail className="absolute right-3 top-3 h-5 w-5 text-zinc-400 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="block w-full rounded-lg border border-zinc-300 dark:border-zinc-800 px-4 py-3 bg-white dark:bg-zinc-900/50 text-zinc-900 dark:text-white placeholder-zinc-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-colors"
              placeholder="Min. 8 caracteres"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Confirmar Contraseña
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              required
              className="block w-full rounded-lg border border-zinc-300 dark:border-zinc-800 px-4 py-3 bg-white dark:bg-zinc-900/50 text-zinc-900 dark:text-white placeholder-zinc-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-colors"
              placeholder="Repite tu contraseña"
            />
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500 bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-zinc-900 dark:text-zinc-300">
              Acepto los <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">Términos y Condiciones</a>
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isLoading}
            className="group relative flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-indigo-500/20"
          >
            {isLoading ? (
               <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span>
            ) : null}
            {isLoading ? "Creando cuenta..." : "Crear cuenta"}
            {!isLoading && <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
          </motion.button>
        </form>
      </div>
    </>
  );
}
