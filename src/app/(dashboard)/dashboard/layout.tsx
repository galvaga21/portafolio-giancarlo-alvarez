"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import { Home, LogOut, MessageSquare, Settings, User as UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Resumen", icon: Home, path: "/dashboard" },
    { name: "Solicitudes", icon: MessageSquare, path: "/dashboard/requests" },
    { name: "Mi Perfil", icon: UserIcon, path: "/dashboard/profile" },
    { name: "Configuración", icon: Settings, path: "/dashboard/settings" },
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-zinc-50 dark:bg-black flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 hidden md:flex flex-col fixed inset-y-0">
          <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              GA
            </div>
            <span className="font-bold text-lg dark:text-white">Panel Cliente</span>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  <item.icon size={20} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
             <div className="flex items-center gap-3 px-4 py-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold">
                    {user?.email?.charAt(0).toUpperCase()}
                </div>
                <div className="overflow-hidden">
                    <p className="text-sm font-medium text-zinc-900 dark:text-white truncate">
                        {user?.displayName || "Usuario"}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                        {user?.email}
                    </p>
                </div>
             </div>
             <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors"
                title="Cerrar sesión"
             >
                <LogOut size={18} />
                Cerrar Sesión
             </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-6 md:p-10">
            <div className="max-w-5xl mx-auto">
               <div className="flex justify-between items-center mb-8">
                   <h1 className="text-2xl font-bold text-zinc-900 dark:text-white md:hidden">Panel</h1>
                   <div className="ml-auto">
                       <ThemeToggle />
                   </div>
               </div>
               
               {children}
            </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
