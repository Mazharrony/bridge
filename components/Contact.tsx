'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from './motion-wrapper';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-slate-950 to-blue-950/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl lg:text-2xl text-white/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              Ready to start your Dubai business journey? We&apos;d love to chat! Book a free, no-obligation consultation with our friendly team. No pressure, just helpful advice and answers to all your questions.
            </p>
          </FadeInUp>

          {/* CTA Buttons */}
          <FadeInUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/contact"
                className="group bg-white text-slate-950 hover:bg-white/90 px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 flex items-center justify-center gap-2"
              >
                Book a Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 text-white px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 text-center"
              >
                Schedule a Call
              </Link>
            </div>
          </FadeInUp>

          {/* Contact Information */}
          <StaggerContainer className="grid md:grid-cols-3 gap-8 pt-16 border-t border-white/10">
            <StaggerItem>
              <div>
                <h3 className="text-white font-medium mb-4">Phone</h3>
                <a href="tel:+971XXXXXXXXX" className="text-white/70 hover:text-white font-light transition-colors">
                  +971 XX XXX XXXX
                </a>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <h3 className="text-white font-medium mb-4">Email</h3>
                <a href="mailto:info@bridge.ae" className="text-white/70 hover:text-white font-light transition-colors">
                  info@bridge.ae
                </a>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div>
                <h3 className="text-white font-medium mb-4">Location</h3>
                <p className="text-white/70 font-light">
                  Dubai, United Arab Emirates
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

