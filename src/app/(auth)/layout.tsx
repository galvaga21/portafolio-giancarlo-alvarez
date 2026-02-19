export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Visual Side (Left on large screens, Top on small) */}
      <div className="relative hidden lg:flex flex-col items-center justify-center p-12 bg-zinc-900 border-r border-zinc-800 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-900 to-zinc-950"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="relative z-10 text-center space-y-6 max-w-lg">
          <div className="mb-8">
             <div className="w-20 h-20 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl mx-auto flex items-center justify-center shadow-2xl shadow-indigo-500/20">
               <span className="text-3xl font-bold text-white">GA</span>
             </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Bienvenido de nuevo</h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Inicia sesión para gestionar tus solicitudes, ver el estado de tus proyectos o agendar una nueva consultoría.
          </p>
          
          <div className="pt-8 grid grid-cols-3 gap-6 w-full max-w-sm mx-auto opacity-50">
             <div className="h-2 bg-zinc-800 rounded-full w-full"></div>
             <div className="h-2 bg-zinc-800 rounded-full w-full"></div>
             <div className="h-2 bg-zinc-800 rounded-full w-full"></div>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex flex-col justify-center items-center p-6 md:p-12 bg-white dark:bg-black transition-colors duration-500">
        <div className="w-full max-w-md space-y-8">
           {children}
        </div>
      </div>
    </div>
  );
}
