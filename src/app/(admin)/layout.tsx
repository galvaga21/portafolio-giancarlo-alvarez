"use client";

import AdminRoute from "@/components/auth/AdminRoute";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useAuth } from "@/context/AuthContext";
import { Users, LogOut, ArrowLeft, LayoutDashboard, Shield } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  const menuItems = [
    { name: "Usuarios", icon: Users, path: "/admin/users" },
    { name: "Volver al Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  ];

  return (
    <AdminRoute>
      <div className="min-h-screen bg-zinc-50 dark:bg-black flex">
        {/* Sidebar */}
        <aside className="w-64 bg-zinc-900 border-r border-zinc-800 hidden md:flex flex-col fixed inset-y-0 text-white">
          <div className="p-6 border-b border-zinc-800 flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">
              <Shield size={18} />
            </div>
            <span className="font-bold text-lg">Admin Panel</span>
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
                      ? "bg-red-600/20 text-red-400"
                      : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  <item.icon size={20} />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-zinc-800">
             <div className="flex items-center gap-3 px-4 py-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-red-900 flex items-center justify-center text-red-400 font-bold border border-red-700">
                    A
                </div>
                <div className="overflow-hidden">
                    <p className="text-sm font-medium text-white truncate">
                        {user?.displayName || "Admin"}
                    </p>
                    <p className="text-xs text-zinc-500 truncate">
                        Administrator
                    </p>
                </div>
             </div>
             <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:bg-red-900/20 rounded-lg transition-colors"
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
                   <h1 className="text-2xl font-bold text-zinc-900 dark:text-white md:hidden">Admin</h1>
                   <div className="ml-auto">
                       <ThemeToggle />
                   </div>
               </div>
               
               {children}
            </div>
        </main>
      </div>
    </AdminRoute>
  );
}
