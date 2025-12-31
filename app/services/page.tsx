'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/motion-wrapper';

const services = [
  {
    slug: 'market-entry-strategy',
    title: 'Market Entry Strategy',
    description: 'Comprehensive analysis and strategic planning for entering the UAE market with confidence and clarity.',
    overview: 'Our market entry strategy service helps you navigate the complexities of entering the UAE market with a clear, actionable plan tailored to your business objectives.',
  },
  {
    slug: 'business-setup-licensing',
    title: 'Business Setup & Licensing',
    description: 'End-to-end support for company formation, licensing, and regulatory compliance in Dubai.',
    overview: 'We handle every aspect of your business setup, from initial documentation to final approvals, ensuring a smooth and compliant establishment in Dubai.',
  },
  {
    slug: 'corporate-advisory',
    title: 'Corporate Advisory',
    description: 'Strategic guidance for growth, expansion, and optimization of your business operations.',
    overview: 'Our corporate advisory services provide strategic insights and guidance to help your business grow, expand, and optimize operations in the UAE market.',
  },
  {
    slug: 'free-zone-solutions',
    title: 'Free Zone Solutions',
    description: 'Expert consultation on free zone options and benefits for international businesses.',
    overview: 'We help you select the optimal free zone, understand benefits and regulations, and guide you through the complete setup process for your business.',
  },
  {
    slug: 'mainland-company-setup',
    title: 'Mainland Company Setup',
    description: 'Complete support for mainland company registration and local partnership requirements.',
    overview: 'Comprehensive support for mainland company registration, including local sponsor arrangements and full compliance with UAE mainland regulations.',
  },
  {
    slug: 'ongoing-business-support',
    title: 'Ongoing Business Support',
    description: 'Continuous advisory and support services to ensure your business thrives in the UAE market.',
    overview: 'Beyond setup, we provide ongoing support including license renewals, compliance management, and strategic guidance for long-term success.',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative pt-32 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Comprehensive business development solutions tailored to your needs in the UAE market. Everything you need to succeed in Dubai, all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <StaggerContainer className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 block"
                >
                  <h2 className="text-2xl font-normal text-white mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-white/60 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-white/80 text-sm font-medium group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform opacity-0 group-hover:opacity-100" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <FadeInUp className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed mb-8">
            Let&apos;s discuss which services are right for your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-white/90 px-8 py-4 rounded-lg font-medium text-base transition-all duration-300"
          >
            Book a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeInUp>
      </section>

      <Footer />
    </main>
  );
}

