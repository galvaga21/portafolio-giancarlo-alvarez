"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Linkedin, Github } from "lucide-react";
import Section from "@/components/ui/Section";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate Firebase submission
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
      // Reset form
      setFormState({ name: "", email: "", message: "" });
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);

    // TODO: Integrate actual Firebase logic here
    /*
    try {
      await addDoc(collection(db, "contacts"), {
        ...formState,
        timestamp: serverTimestamp()
      });
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
    */
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section id="contact" className="py-20 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Info Column */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-6">
              Hablemos
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
              ¿Tienes un proyecto en mente o quieres colaborar? Estoy siempre abierto a discutir nuevas oportunidades, 
              ideas creativas o visiones a implementar.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
              <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-500 font-medium">Email</p>
                <a href="mailto:contact@giancarlo.dev" className="text-lg hover:text-indigo-600 dark:text-indigo-400 transition-colors">
                  contact@giancarlo.dev
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-zinc-700 dark:text-zinc-300">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-zinc-600 dark:text-zinc-500 font-medium">Ubicación</p>
                <p className="text-lg">Lima, Perú</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-zinc-600 dark:text-zinc-500 font-medium mb-4">Sígueme en</h3>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/giancarlo-alvarez" className="p-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-indigo-500 hover:bg-indigo-100 dark:bg-indigo-500/10 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/giancarlo-alvarez" className="p-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-indigo-500 hover:bg-indigo-100 dark:bg-indigo-500/10 transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-white dark:bg-zinc-900/30 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                placeholder="tu@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Mensaje</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                status === "success" 
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-[0_0_20px_rgba(79,70,229,0.3)]"
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? (
                <span className="animate-pulse">Enviando...</span>
              ) : status === "success" ? (
                <span>¡Mensaje Enviado!</span>
              ) : (
                <>
                  Enviar Mensaje <Send size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
