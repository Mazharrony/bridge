import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin with a comprehensive discussion to understand your business goals, market positioning, and specific requirements for the UAE market. This includes assessing your industry, target market, and long-term objectives.',
    details: [
      'Understanding your business vision and objectives',
      'Assessing your industry and market positioning',
      'Identifying your specific requirements and challenges',
      'Discussing timeline and budget considerations',
      'Answering all your questions about the UAE market'
    ]
  },
  {
    number: '02',
    title: 'Strategic Planning',
    description: 'Our team develops a tailored strategy based on your objectives, including market analysis, legal structure recommendations, and entry approach. We create a detailed roadmap for your market entry.',
    details: [
      'Comprehensive market research and analysis',
      'Optimal business structure recommendations',
      'License type and location selection',
      'Detailed implementation roadmap',
      'Timeline and milestone planning'
    ]
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'We handle all aspects of setup, licensing, and registration, ensuring compliance with UAE regulations and optimal business structure. Our team manages the entire process on your behalf.',
    details: [
      'Document preparation and verification',
      'License application submission',
      'Government authority coordination',
      'Trade name reservation',
      'Compliance and regulatory adherence'
    ]
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description: 'Beyond setup, we provide continuous advisory services to help your business grow and adapt in the dynamic UAE market. We remain your trusted partner for long-term success.',
    details: [
      'License renewals and maintenance',
      'Compliance monitoring',
      'Visa processing support',
      'Strategic business guidance',
      'Growth and expansion planning'
    ]
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative pt-32 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
              How It Works
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Our simple, straightforward process takes the stress out of setting up your business. We&apos;ll guide you through every step, keeping you informed and involved along the way.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Step Number & Title */}
                <div className="sticky top-32">
                  <div className="mb-6">
                    <span className="text-7xl lg:text-8xl font-light text-white/20">
                      {step.number}
                    </span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                    {step.title}
                  </h2>
                  <p className="text-lg text-white/70 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Details */}
                <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                  <h3 className="text-xl font-normal text-white mb-6">What This Includes</h3>
                  <ul className="space-y-4">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-4">
                        <span className="text-white/40 mt-1">•</span>
                        <span className="text-white/80 font-light leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Process */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-8 text-center">
            Why Our Process Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-normal text-white mb-4">Streamlined & Efficient</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Our proven process eliminates unnecessary steps and bottlenecks, getting you operational faster.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-normal text-white mb-4">Transparent Communication</h3>
              <p className="text-white/70 font-light leading-relaxed">
                We keep you informed at every stage, with clear updates and no surprises along the way.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-normal text-white mb-4">Expert Guidance</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Our experienced team navigates the complexities, so you don&apos;t have to worry about the details.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <h3 className="text-xl font-normal text-white mb-4">Ongoing Partnership</h3>
              <p className="text-white/70 font-light leading-relaxed">
                We&apos;re with you for the long haul, providing support and guidance as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed mb-8">
            Let&apos;s start with a free consultation to discuss your business goals and how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-white/90 px-8 py-4 rounded-lg font-medium text-base transition-all duration-300"
          >
            Book a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

