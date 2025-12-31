import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import ValueProposition from '@/components/ValueProposition';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <HowItWorks />
      <About />
      <ValueProposition />
      <Industries />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
