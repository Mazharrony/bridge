'use client';

const industries = [
  {
    name: 'Technology & Software',
    description: "From fintech startups to established SaaS companies, we help tech businesses navigate Dubai's digital ecosystem."
  },
  {
    name: 'Trading & Distribution',
    description: 'Expert guidance for import-export businesses and distribution companies looking to establish in Dubai.'
  },
  {
    name: 'Professional Services',
    description: 'Legal, consulting, and professional service firms find the perfect setup structure with our guidance.'
  },
  {
    name: 'E-commerce & Retail',
    description: 'Whether online or brick-and-mortar, we help retail businesses establish and grow in the UAE market.'
  },
  {
    name: 'Healthcare & Medical',
    description: 'Specialized support for healthcare providers, clinics, and medical equipment companies.'
  },
  {
    name: 'Real Estate & Construction',
    description: 'Comprehensive setup and advisory services for real estate developers and construction companies.'
  },
  {
    name: 'Financial Services',
    description: 'Guidance for financial advisory firms, investment companies, and fintech startups.'
  },
  {
    name: 'Food & Hospitality',
    description: 'Restaurants, cafes, and hospitality businesses get expert support for Dubai operations.'
  },
  {
    name: 'Manufacturing',
    description: 'Industrial businesses find the right location and setup structure with our specialized knowledge.'
  },
];

export default function Industries() {
  return (
    <section className="relative py-32 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
            Industries We Serve
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed">
            No matter what industry you&apos;re in, we&apos;ve got the experience and expertise to help you succeed in Dubai. Our team has worked with businesses across all sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            >
              <h3 className="text-xl font-normal text-white mb-3">
                {industry.name}
              </h3>
              <p className="text-white/60 font-light leading-relaxed text-sm">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-white/80 font-light text-lg mb-6">
            Don&apos;t see your industry listed? Don&apos;t worry!
          </p>
          <p className="text-white/60 font-light">
            We work with businesses across all sectors. Reach out and let&apos;s discuss how we can help your industry succeed in Dubai.
          </p>
        </div>
      </div>
    </section>
  );
}

