'use client';

import { FadeInUp, StaggerContainer, StaggerItem } from './motion-wrapper';

export default function About() {
  return (
    <section id="insights" className="relative py-32 bg-gradient-to-b from-blue-950/20 to-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <FadeInUp>
            <h2 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Why Choose BRIDGE
            </h2>
            <div className="space-y-6 text-white/80 font-light leading-relaxed text-lg">
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
          </FadeInUp>

          {/* Right Column - Features */}
          <StaggerContainer className="space-y-6">
            <StaggerItem>
              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-2xl font-normal text-white mb-4">We Really Know Our Stuff</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  After 10+ years working with businesses of all sizes and industries, we&apos;ve seen it all. This experience means we can anticipate challenges before they happen and guide you around potential pitfalls.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-2xl font-normal text-white mb-4">We&apos;ve Got Your Back</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  From your first question to ongoing support years later, we&apos;re here for you. Our comprehensive services mean you don&apos;t have to juggle multiple vendors – we handle everything you need.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-2xl font-normal text-white mb-4">Success That Speaks for Itself</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  Over 500 businesses can&apos;t be wrong! Our clients come back to us because we deliver results. Many have grown from startups to thriving companies, and we&apos;re proud to have been part of their journey.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-2xl font-normal text-white mb-4">You&apos;re Not Just Another Number</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  We take the time to understand what makes your business special. Your goals become our goals, and we customize our approach to fit exactly what you need. No cookie-cutter solutions here.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

