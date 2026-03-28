import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MainContent from '@/components/MainContent';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-dark-bg text-off-white min-h-screen selection:bg-neon-green selection:text-dark-bg">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}