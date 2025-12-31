'use client';

const stats = [
  {
    number: '500+',
    label: 'Successful Business Setups',
    description: "Companies we've helped establish and thrive in Dubai"
  },
  {
    number: '10+',
    label: 'Years of Excellence',
    description: 'Decade of dedicated service in the UAE market'
  },
  {
    number: '95%',
    label: 'Client Satisfaction Rate',
    description: 'Our clients love working with us and recommend our services'
  },
  {
    number: '50+',
    label: 'Industry Sectors',
    description: 'From tech startups to established enterprises across industries'
  },
  {
    number: '24/7',
    label: 'Ongoing Support',
    description: "We're always here when you need us, every step of the way"
  },
  {
    number: '100%',
    label: 'Compliance Success',
    description: 'Perfect track record in regulatory compliance and approvals'
  },
];

export default function Stats() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950 to-blue-950/20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
            Our Track Record
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed">
            Numbers that speak to our commitment to your success. We&apos;re proud of what we&apos;ve achieved together with our clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 text-center"
            >
              <div className="mb-4">
                <span className="text-5xl lg:text-6xl font-light text-white">
                  {stat.number}
                </span>
              </div>
              <h3 className="text-xl font-normal text-white mb-3">
                {stat.label}
              </h3>
              <p className="text-white/60 font-light leading-relaxed text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

