'use client';

import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-20 bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">BRIDGE</h3>
              <p className="text-sm text-white/60 font-light uppercase tracking-wider">
                Business Development & Advisory
              </p>
            </div>
            <p className="text-white/70 font-light leading-relaxed max-w-md">
              Connecting ambition to opportunity in Dubai's business landscape.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/60 hover:text-white font-light transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/60 hover:text-white font-light transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#insights" className="text-white/60 hover:text-white font-light transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-white font-light transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+971XXXXXXXXX" 
                  className="flex items-center gap-2 text-white/60 hover:text-white font-light transition-colors"
                >
                  <Phone size={16} />
                  <span>+971 XX XXX XXXX</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@bridge.ae" 
                  className="flex items-center gap-2 text-white/60 hover:text-white font-light transition-colors"
                >
                  <Mail size={16} />
                  <span>info@bridge.ae</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm font-light">
              © {new Date().getFullYear()} BRIDGE. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/50 hover:text-white/70 font-light transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white/70 font-light transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

