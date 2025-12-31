'use client';

const values = [
  {
    title: 'Friendly & Approachable',
    description: "We believe business should be enjoyable. Our team is always friendly, responsive, and here to help. No corporate jargon, no confusing processes – just clear, honest communication."
  },
  {
    title: 'Transparent Pricing',
    description: "No hidden fees, no surprise charges. We believe in upfront, honest pricing so you know exactly what you're investing in. What you see is what you get, always."
  },
  {
    title: 'Fast & Efficient',
    description: 'We know time is money. Our streamlined processes and deep knowledge mean we can move fast without cutting corners. Most businesses are up and running faster than they expect.'
  },
  {
    title: 'Always Available',
    description: "Questions at 2 PM or 2 AM? We're here for you. Our commitment to client support means you're never left hanging. When you need us, we're just a call or email away."
  },
];

export default function ValueProposition() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-blue-950/20 to-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
            The BRIDGE Difference
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed">
            What makes working with us a great experience? It&apos;s our commitment to being the kind of business partner you actually want to work with.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            >
              <h3 className="text-2xl font-normal text-white mb-4">
                {value.title}
              </h3>
              <p className="text-white/60 font-light leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

