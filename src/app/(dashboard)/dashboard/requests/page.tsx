"use client";

import { useAuth } from "@/context/AuthContext";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function RequestsPage() {
  const { user } = useAuth();
  const recentRequests = [
    { id: 1, title: "Desarrollo de Landing Page", status: "En progreso", date: "15 Feb 2024", priority: "Alta" },
    { id: 2, title: "Optimización SEO", status: "Pendiente", date: "18 Feb 2024", priority: "Media" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Mis Solicitudes
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">
            Gestiona y revisa el estado de tus proyectos.
          </p>
        </div>
        <Link 
            href="/dashboard/requests/new"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-500/20"
        >
            <Plus size={18} />
            Nueva Solicitud
        </Link>
      </div>

      <div className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="text-xs text-zinc-500 dark:text-zinc-400 uppercase bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
                    <tr>
                        <th className="px-6 py-3 font-medium">Proyecto</th>
                        <th className="px-6 py-3 font-medium">Estado</th>
                        <th className="px-6 py-3 font-medium">Fecha</th>
                        <th className="px-6 py-3 font-medium">Prioridad</th>
                        <th className="px-6 py-3 font-medium text-right">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {recentRequests.map((req) => (
                        <tr key={req.id} className="bg-white dark:bg-transparent border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                            <td className="px-6 py-4 font-medium text-zinc-900 dark:text-white">
                                {req.title}
                            </td>
                            <td className="px-6 py-4">
                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    req.status === "En progreso" ? "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400" :
                                    req.status === "Completado" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" :
                                    "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"
                                }`}>
                                    {req.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                                {req.date}
                            </td>
                            <td className="px-6 py-4">
                                <span className={`font-medium ${
                                    req.priority === "Alta" ? "text-red-600 dark:text-red-400" :
                                    req.priority === "Media" ? "text-amber-600 dark:text-amber-400" :
                                    "text-green-600 dark:text-green-400"
                                }`}>
                                    {req.priority}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium">Ver detalles</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
