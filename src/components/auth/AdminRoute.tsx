"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user, userData, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/login");
      } else if (userData?.role !== "admin") {
        router.push("/dashboard");
      }
    }
  }, [user, userData, loading, router]);

  if (loading) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
            <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
  }

  if (!user || userData?.role !== "admin") {
    return null;
  }

  return <>{children}</>;
}
