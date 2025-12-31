import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-8xl lg:text-9xl font-light text-white/20 mb-8">404</h1>
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed mb-12">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-white/90 px-8 py-4 rounded-lg font-medium text-base transition-all duration-300"
            >
              Go to Homepage
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 text-white px-8 py-4 rounded-lg font-medium text-base transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

