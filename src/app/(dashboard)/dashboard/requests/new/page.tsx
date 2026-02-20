"use client";

import { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NewRequestPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
        setLoading(false);
        router.push("/dashboard");
        alert("Solicitud enviada correctamente. Pronto te contactaremos.");
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-indigo-600 mb-4 transition-colors">
            <ArrowLeft size={16} />
            Volver al Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Nueva Solicitud</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-1">
          Cuéntame sobre tu proyecto y empecemos a trabajar juntos.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 md:p-8 space-y-6 shadow-sm">
        <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Título del Proyecto <span className="text-red-500">*</span>
            </label>
            <input
                type="text"
                required
                className="block w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Ej: E-commerce de Zapatillas"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Tipo de Servicio
                </label>
                <select className="block w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option>Desarrollo Web Fullstack</option>
                    <option>Landing Page</option>
                    <option>Aplicación Móvil</option>
                    <option>Consultoría / Auditoría</option>
                    <option>Otro</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Presupuesto Estimado
                </label>
                <select className="block w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option>Menos de $500</option>
                    <option>$500 - $1,500</option>
                    <option>$1,500 - $5,000</option>
                    <option>Más de $5,000</option>
                </select>
            </div>
        </div>

        <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Descripción del Proyecto <span className="text-red-500">*</span>
            </label>
            <textarea
                required
                rows={5}
                className="block w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-3 text-zinc-900 dark:text-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Describe los objetivos, funcionalidades clave y referencias..."
            />
        </div>

        <div className="pt-4 flex justify-end">
            <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-95"
            >
                {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                    <Send size={18} />
                )}
                Enviar Solicitud
            </button>
        </div>
      </form>
    </div>
  );
}
