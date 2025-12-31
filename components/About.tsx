'use client';

export default function About() {
  return (
    <section id="insights" className="relative py-32 bg-gradient-to-b from-blue-950/20 to-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight">
              Why Choose BRIDGE
            </h2>
            <div className="space-y-6 text-white/80 font-light leading-relaxed text-lg">
              <p>
                With over a decade of experience in the UAE market, BRIDGE has established itself as a trusted partner for businesses seeking to establish, grow, or expand their presence in Dubai and across the Emirates.
              </p>
              <p>
                Our deep understanding of local regulations, market dynamics, and business culture enables us to provide strategic guidance that goes beyond simple compliance. We help you navigate the complexities of the UAE business landscape with confidence and clarity.
              </p>
              <p>
                Whether you're a startup looking to establish your first international presence or an established company seeking to optimize your operations, our team of experts is dedicated to your success.
              </p>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-normal text-white mb-4">Deep Market Knowledge</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Over 10 years of hands-on experience working with businesses across various industries in the UAE, providing us with unmatched insights into market trends and opportunities.
              </p>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-normal text-white mb-4">Comprehensive Solutions</h3>
              <p className="text-white/60 font-light leading-relaxed">
                From initial market research to ongoing business support, we offer end-to-end services that cover every aspect of your business journey in the UAE.
              </p>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-normal text-white mb-4">Proven Track Record</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Successfully supported over 500 businesses in their UAE market entry and expansion, with a focus on sustainable growth and long-term success.
              </p>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-normal text-white mb-4">Personalized Approach</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Every business is unique. We tailor our services to your specific needs, industry requirements, and strategic objectives, ensuring solutions that work for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

