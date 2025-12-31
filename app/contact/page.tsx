'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here (e.g., API call, email service, etc.)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative pt-32 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Ready to start your Dubai business journey? We&apos;d love to chat! Book a free, no-obligation consultation with our friendly team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-white mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 font-light mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 font-light focus:outline-none focus:border-white/30"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/80 font-light mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 font-light focus:outline-none focus:border-white/30"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white/80 font-light mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 font-light focus:outline-none focus:border-white/30"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-white/80 font-light mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 font-light focus:outline-none focus:border-white/30"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-white/80 font-light mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white font-light focus:outline-none focus:border-white/30"
                  >
                    <option value="">Select a service</option>
                    <option value="market-entry">Market Entry Strategy</option>
                    <option value="business-setup">Business Setup & Licensing</option>
                    <option value="corporate-advisory">Corporate Advisory</option>
                    <option value="free-zone">Free Zone Solutions</option>
                    <option value="mainland">Mainland Company Setup</option>
                    <option value="ongoing-support">Ongoing Business Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/80 font-light mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 font-light focus:outline-none focus:border-white/30 resize-none"
                    placeholder="Tell us about your business and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-slate-950 hover:bg-white/90 px-8 py-4 rounded-lg font-medium text-base transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light text-white mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-white font-medium mb-4">Phone</h3>
                  <a href="tel:+971XXXXXXXXX" className="text-white/70 hover:text-white font-light transition-colors">
                    +971 XX XXX XXXX
                  </a>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-4">Email</h3>
                  <a href="mailto:info@bridge.ae" className="text-white/70 hover:text-white font-light transition-colors">
                    info@bridge.ae
                  </a>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-4">Location</h3>
                  <p className="text-white/70 font-light">
                    Dubai, United Arab Emirates
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <h3 className="text-white font-medium mb-4">Office Hours</h3>
                  <div className="space-y-2 text-white/70 font-light">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

