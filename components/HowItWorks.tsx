'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from './motion-wrapper';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin with a comprehensive discussion to understand your business goals, market positioning, and specific requirements for the UAE market. This includes assessing your industry, target market, and long-term objectives.',
    details: 'During this phase, we gather essential information about your business, discuss your vision, and identify key challenges and opportunities in the UAE market.'
  },
  {
    number: '02',
    title: 'Strategic Planning',
    description: 'Our team develops a tailored strategy based on your objectives, including market analysis, legal structure recommendations, and entry approach. We create a detailed roadmap for your market entry.',
    details: 'This includes market research, competitive analysis, optimal business structure recommendations, and a comprehensive implementation plan with timelines and milestones.'
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'We handle all aspects of setup, licensing, and registration, ensuring compliance with UAE regulations and optimal business structure. Our team manages the entire process on your behalf.',
    details: 'We complete all documentation, submit applications, coordinate with authorities, handle licensing procedures, and ensure everything is set up correctly and efficiently.'
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description: 'Beyond setup, we provide continuous advisory services to help your business grow and adapt in the dynamic UAE market. We remain your trusted partner for long-term success.',
    details: 'Our ongoing support includes license renewals, compliance management, strategic guidance, market insights, and assistance with business growth initiatives and expansions.'
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 bg-gradient-to-b from-slate-950 to-blue-950/20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <FadeInUp className="mb-20 max-w-3xl">
          <h2 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
            How It Works
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed">
            Our simple, straightforward process takes the stress out of setting up your business. We'll guide you through every step, keeping you informed and involved along the way.
          </p>
        </FadeInUp>

        {/* Steps */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <StaggerItem key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-white/10 -z-10" 
                     style={{ width: 'calc(100% + 3rem)' }}></div>
              )}
              
              <div className="group">
                <div className="mb-6">
                  <span className="text-6xl font-light text-white/20 group-hover:text-white/40 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-normal text-white mb-4 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/60 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

