'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Services', 'How It Works', 'Insights', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Section - Brand */}
          <div className="flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-white">
                BRIDGE
              </span>
              <span className="text-[10px] tracking-wider text-white/60 font-light uppercase mt-[-4px]">
                Business Development & Advisory
              </span>
            </div>
          </div>

          {/* Center Section - Navigation (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white/70 font-normal text-sm hover:text-white transition-all relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Section - CTA (Desktop) */}
          <div className="hidden lg:flex items-center">
            <button className="bg-white text-slate-950 hover:bg-white/90 px-6 py-2.5 rounded-lg transition-all font-medium text-sm">
              Book a Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/80 hover:text-white p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-white/10 mt-4 pt-4 bg-slate-950/95 backdrop-blur-md rounded-b-xl">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white/80 font-medium hover:text-white transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <button className="bg-white text-slate-950 hover:bg-white/90 px-6 py-2.5 rounded-lg transition-all font-medium text-sm w-full">
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

