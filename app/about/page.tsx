import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative pt-32 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
              About BRIDGE
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Your trusted partner for business success in Dubai. We&apos;re a friendly, approachable team dedicated to helping businesses thrive in the UAE market.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-8 text-lg text-white/80 font-light leading-relaxed">
            <p>
              Welcome to BRIDGE! We&apos;re a friendly, approachable team of business development experts who&apos;ve been helping companies succeed in Dubai for over a decade. Think of us as your knowledgeable friends who happen to know everything about setting up and growing businesses in the UAE.
            </p>
            <p>
              What makes us different? We genuinely care about your success. We&apos;re not just another consultancy – we&apos;re your partners on this journey. Our team takes the time to understand your unique situation, goals, and challenges. We&apos;ve helped over 500 businesses, and we&apos;d love to help yours too.
            </p>
            <p>
              Whether you&apos;re a startup taking your first steps into international markets, or an established company looking to expand into Dubai, we&apos;re here to make the process smooth, transparent, and stress-free. We believe in building relationships, not just completing transactions. Your success is our success, and we&apos;re with you every step of the way.
            </p>
            <p>
              Our friendly approach doesn&apos;t mean we&apos;re not serious about business – we are! We&apos;re professional, experienced, and results-driven. But we also believe that business can be done with a smile, clear communication, and genuine care for our clients. That&apos;s the BRIDGE way.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-normal text-white mb-4">Integrity</h3>
              <p className="text-white/70 font-light leading-relaxed">
                We believe in honest, transparent communication and ethical business practices in everything we do.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-normal text-white mb-4">Excellence</h3>
              <p className="text-white/70 font-light leading-relaxed">
                We strive for excellence in every project, delivering results that exceed expectations.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-normal text-white mb-4">Partnership</h3>
              <p className="text-white/70 font-light leading-relaxed">
                We view our clients as partners, building long-term relationships based on mutual trust and respect.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-normal text-white mb-4">Innovation</h3>
              <p className="text-white/70 font-light leading-relaxed">
                We stay ahead of market trends and continuously improve our services to better serve our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-light text-white mb-4">10+</div>
              <div className="text-white/70 font-light">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-light text-white mb-4">500+</div>
              <div className="text-white/70 font-light">Businesses Supported</div>
            </div>
            <div>
              <div className="text-5xl font-light text-white mb-4">95%</div>
              <div className="text-white/70 font-light">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-light text-white mb-4">50+</div>
              <div className="text-white/70 font-light">Industry Sectors</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed mb-8">
            Ready to start your business journey in Dubai? We&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-white/90 px-8 py-4 rounded-lg font-medium text-base transition-all duration-300"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

