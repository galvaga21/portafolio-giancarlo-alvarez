import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Contacto | Giancarlo Alvarez",
  description: "Contáctame para colaboraciones o consultas.",
};

export default function ContactPage() {
  return (
    <div className="pt-10">
      <div className="max-w-4xl mx-auto px-6 mb-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">¿Tienes un proyecto en mente?</h1>
        <p className="text-zinc-400">
          Estoy disponible para trabajos freelance y oportunidades de tiempo completo.
          Cuéntame sobre tu idea y veamos cómo podemos hacerla realidad.
        </p>
      </div>
      <Contact />
    </div>
  );
}
