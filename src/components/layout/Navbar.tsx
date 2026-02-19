"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Sobre mí", path: "/about" },
  { name: "Experiencia", path: "/experience" },
  { name: "Habilidades", path: "/skills" },
  { name: "Proyectos", path: "/projects" },
  { name: "Contacto", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 py-4 shadow-sm dark:shadow-none"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tighter text-zinc-900 dark:text-white z-50 transition-colors">
          GA<span className="text-indigo-600 dark:text-indigo-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-colors relative ${
                  isActive 
                    ? "text-indigo-600 dark:text-indigo-400" 
                    : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          
          <div className="ml-4 pl-4 border-l border-zinc-200 dark:border-zinc-800 flex items-center gap-4">
             <ThemeToggle />
             <Link href="/login" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-medium transition-colors">
                Ingresar
             </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
           <ThemeToggle />
           <button
             className="text-zinc-900 dark:text-white p-2 z-50 relative"
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
           >
             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden text-center"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-bold transition-colors ${
                  pathname === item.path 
                    ? "text-indigo-600 dark:text-indigo-400" 
                    : "text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              href="/login" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-lg font-bold transition-colors"
            >
              Ingresar
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
