import Section from "./Section";

export default function About() {
  return (
    <Section id="about" className="text-center sm:text-left py-20 flex flex-col md:flex-row items-center gap-12 bg-zinc-900/50 rounded-2xl border border-zinc-800 backdrop-blur-sm shadow-2xl">
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="relative group w-64 h-64">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          {/* Using a placeholder div instead of Next Image for reliability if file is missing, or can use Image later */}
          <div className="relative w-full h-full bg-zinc-950 rounded-2xl overflow-hidden flex items-center justify-center border border-zinc-700">
            <span className="text-zinc-500 text-6xl font-bold">GA</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3 space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">
          Sobre mí
        </h2>
        <p className="text-zinc-400 leading-7 text-lg">
          Soy estudiante de <strong>Ingeniería Informática</strong> en la Universidad Ricardo Palma, 
          apasionado por el desarrollo de software y la <strong>arquitectura escalable</strong>.
        </p>
        <p className="text-zinc-400 leading-7 text-lg">
          Mi enfoque principal es la creación de aplicaciones web modernas que no solo sean visualmente atractivas, 
          sino también robustas y fáciles de mantener. Me especializo en metodologías ágiles como <strong>Scrum</strong>, 
          lo que me permite colaborar eficazmente en equipos multidisciplinarios y entregar valor de manera iterativa.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <span className="px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-sm font-semibold border border-indigo-500/20">
            Ingeniería Informática
          </span>
          <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-semibold border border-purple-500/20">
            Scrum & Agile
          </span>
          <span className="px-4 py-2 bg-sky-500/10 text-sky-400 rounded-full text-sm font-semibold border border-sky-500/20">
            Arquitectura Escalable
          </span>
        </div>
      </div>
    </Section>
  );
}
