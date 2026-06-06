import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Showcase from '@/components/Showcase';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505]">
      {/* Background Grid Global (Satu saja untuk semua) */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.1]"
        style={{
          backgroundImage: `linear-gradient(#828282 1px, transparent 1px), 
                            linear-gradient(90deg, #828282 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      <div className="absolute inset-0 z-0 bg-linear-to-r from-fuchsia-600/15 via-transparent to-cyan-500/20" />
      <Navbar />
      <Hero />
      <About />
      <Showcase />
      <Contact />
      <Footer />
    </main>
  );
}