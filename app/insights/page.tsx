import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    slug: 'understanding-uae-free-zones',
    title: 'Understanding UAE Free Zones: A Complete Guide',
    excerpt: 'Everything you need to know about free zones in the UAE, including benefits, requirements, and how to choose the right one for your business.',
    category: 'Business Setup',
    date: '2024-01-15',
    readTime: '5 min read'
  },
  {
    slug: 'mainland-vs-free-zone',
    title: 'Mainland vs Free Zone: Which is Right for Your Business?',
    excerpt: 'A detailed comparison to help you decide between mainland and free zone setup based on your business activities and goals.',
    category: 'Business Setup',
    date: '2024-01-10',
    readTime: '7 min read'
  },
  {
    slug: 'market-entry-strategy-uae',
    title: 'Market Entry Strategy for the UAE: Key Considerations',
    excerpt: 'Essential factors to consider when entering the UAE market, from regulatory requirements to cultural considerations.',
    category: 'Strategy',
    date: '2024-01-05',
    readTime: '6 min read'
  },
  {
    slug: 'business-license-types-dubai',
    title: 'Understanding Business License Types in Dubai',
    excerpt: 'An overview of different license types available in Dubai and which one suits your business activities best.',
    category: 'Business Setup',
    date: '2023-12-28',
    readTime: '4 min read'
  },
  {
    slug: 'visa-processing-guide',
    title: 'Complete Guide to UAE Visa Processing for Business Owners',
    excerpt: 'Step-by-step guide to visa processing for business owners, employees, and dependents in the UAE.',
    category: 'Visa & Immigration',
    date: '2023-12-20',
    readTime: '8 min read'
  },
  {
    slug: 'scaling-business-dubai',
    title: 'Scaling Your Business in Dubai: Growth Strategies',
    excerpt: 'Practical strategies for scaling and expanding your business operations in the dynamic Dubai market.',
    category: 'Growth',
    date: '2023-12-15',
    readTime: '6 min read'
  },
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative pt-32 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
              Insights & Resources
            </h1>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Expert insights, guides, and resources to help you navigate the UAE business landscape and make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Link
                key={index}
                href={`/insights/${insight.slug}`}
                className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 block"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs font-light">
                    {insight.category}
                  </span>
                </div>
                <h2 className="text-2xl font-normal text-white mb-4 group-hover:text-white transition-colors">
                  {insight.title}
                </h2>
                <p className="text-white/60 font-light leading-relaxed mb-6">
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-white/50">
                  <span>{new Date(insight.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>{insight.readTime}</span>
                </div>
                <div className="flex items-center text-white/80 text-sm font-medium mt-4 group-hover:gap-3 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform opacity-0 group-hover:opacity-100" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed mb-8">
            Subscribe to our newsletter for the latest insights, updates, and tips for doing business in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 font-light focus:outline-none focus:border-white/40"
            />
            <button className="bg-white text-slate-950 hover:bg-white/90 px-8 py-4 rounded-lg font-medium transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

