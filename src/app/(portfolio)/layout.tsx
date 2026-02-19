import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Background from "@/components/ui/Background";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Background />
      <Navbar />
      <main className="min-h-screen pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
