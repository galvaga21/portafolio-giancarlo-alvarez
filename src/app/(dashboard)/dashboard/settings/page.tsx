"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { Save } from "lucide-react";

export default function SettingsPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        alert("Configuración actualizada correctamente");
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Configuración</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-1">
            Personaliza tus preferencias y notificaciones.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-sm">
        <div className="p-6 md:p-8 space-y-6">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white pb-2 border-b border-zinc-200 dark:border-zinc-800">
                Notificaciones
            </h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-zinc-900 dark:text-white">Notificaciones por Email</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Recibe actualizaciones sobre tu proyecto.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-600 peer-checked:bg-indigo-600"></div>
                    </label>
                </div>
                
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-zinc-900 dark:text-white">Estado del Proyecto</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Notificar cambios de estado.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-600 peer-checked:bg-indigo-600"></div>
                    </label>
                </div>
            </div>

            <h3 className="text-lg font-bold text-zinc-900 dark:text-white pb-2 border-b border-zinc-200 dark:border-zinc-800 pt-6">
                Cuenta
            </h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-red-600 dark:text-red-400">Eliminar Cuenta</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Esta acción no se puede deshacer.</p>
                    </div>
                    <button type="button" className="px-3 py-1.5 text-xs font-medium text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors">
                        Eliminar
                    </button>
                </div>
            </div>

            <div className="pt-4 flex justify-end">
                <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                        <Save size={18} />
                    )}
                    Guardar Preferencias
                </button>
            </div>
        </div>
      </form>
    </div>
  );
}
