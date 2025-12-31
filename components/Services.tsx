'use client';

import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Market Entry Strategy',
    description: 'Comprehensive analysis and strategic planning for entering the UAE market with confidence and clarity. We conduct in-depth market research, competitive analysis, and develop tailored entry strategies that align with your business objectives.',
    details: 'Includes market research, competitive analysis, regulatory framework assessment, and strategic recommendations.'
  },
  {
    title: 'Business Setup & Licensing',
    description: 'End-to-end support for company formation, licensing, and regulatory compliance in Dubai. From initial documentation to final approvals, we handle all aspects of the setup process.',
    details: 'Complete handling of licenses, permits, registrations, and all required documentation for your business type.'
  },
  {
    title: 'Corporate Advisory',
    description: 'Strategic guidance for growth, expansion, and optimization of your business operations. Our advisory services help you make informed decisions and navigate complex business challenges.',
    details: 'Strategic planning, operational optimization, market expansion guidance, and ongoing business consulting.'
  },
  {
    title: 'Free Zone Solutions',
    description: 'Expert consultation on free zone options and benefits for international businesses. We help you select the optimal free zone and guide you through the complete setup process.',
    details: 'Free zone selection, license types, visa processing, and understanding free zone benefits and regulations.'
  },
  {
    title: 'Mainland Company Setup',
    description: 'Complete support for mainland company registration and local partnership requirements. We facilitate connections with local partners and ensure compliance with mainland regulations.',
    details: 'Mainland license applications, local sponsor arrangements, trade license processing, and regulatory compliance.'
  },
  {
    title: 'Ongoing Business Support',
    description: "Continuous advisory and support services to ensure your business thrives in the UAE market. From annual renewals to strategic growth initiatives, we\'re here to support your success.",
    details: 'License renewals, visa processing, accounting support, legal compliance, and strategic business development.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
            Our Services
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed">
            Everything you need to succeed in Dubai, all in one place. We&apos;ve got your back from day one through every step of your business journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            >
              <h3 className="text-2xl font-normal text-white mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-white/60 font-light leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-white/80 text-sm font-medium group-hover:gap-3 transition-all">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform opacity-0 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

