'use client';

const testimonials = [
  {
    quote: "BRIDGE made our entry into the Dubai market seamless. Their expertise in free zone regulations and local business practices saved us months of research and potential mistakes.",
    author: "Sarah Mitchell",
    role: "CEO, Tech Innovations Ltd.",
    company: "Technology Sector"
  },
  {
    quote: "The team&apos;s understanding of mainland company requirements and their network of local partners was invaluable. We&apos;re now fully operational and growing steadily.",
    author: "Ahmed Hassan",
    role: "Founder, Global Trading Co.",
    company: "Trading & Distribution"
  },
  {
    quote: "From initial consultation to ongoing advisory, BRIDGE has been our trusted partner. Their strategic guidance has been instrumental in our expansion across the UAE.",
    author: "Emma Thompson",
    role: "Director, International Services",
    company: "Professional Services"
  },
  {
    quote: "The comprehensive support we received during our business setup exceeded our expectations. BRIDGE truly understands what it takes to succeed in this market.",
    author: "James Wilson",
    role: "Managing Director, Finance Solutions",
    company: "Financial Services"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
            Client Success Stories
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed">
            Don&apos;t just take our word for it – hear directly from our clients about their experience working with us. We&apos;re proud of the relationships we&apos;ve built and the success stories we&apos;ve helped create.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500"
            >
              <div className="mb-6">
                <svg className="w-8 h-8 text-white/20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                </svg>
                <p className="text-white/90 font-light text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="pt-6 border-t border-white/10">
                <p className="text-white font-medium mb-1">{testimonial.author}</p>
                <p className="text-white/60 text-sm font-light">{testimonial.role}</p>
                <p className="text-white/50 text-sm font-light mt-1">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

