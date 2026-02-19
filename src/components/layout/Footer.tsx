export default function Footer() {
  return (
    <footer className="py-8 bg-zinc-950 border-t border-zinc-900 text-center">
      <p className="text-zinc-500 text-sm">
        © {new Date().getFullYear()} Giancarlo Alvarez. Todos los derechos reservados.
      </p>
      <p className="text-zinc-600 text-xs mt-2">
        Diseñado y desarrollado con Next.js & Tailwind CSS
      </p>
    </footer>
  );
}
