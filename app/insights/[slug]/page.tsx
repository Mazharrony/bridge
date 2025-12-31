import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, ArrowLeft, FileText } from 'lucide-react';
import { notFound } from 'next/navigation';

const insights = {
  'understanding-uae-free-zones': {
    title: 'Understanding UAE Free Zones: A Complete Guide',
    category: 'Business Setup',
    date: '2024-01-15',
    readTime: '5 min read',
    excerpt: 'Everything you need to know about free zones in the UAE, including benefits, requirements, and how to choose the right one for your business.',
    content: `
      <p>Free zones in the UAE offer an attractive option for businesses looking to establish a presence in the region. With over 40 free zones across the country, each offering unique benefits and advantages, understanding the landscape is crucial for making the right decision.</p>
      
      <h2>What Are Free Zones?</h2>
      <p>Free zones are designated areas within the UAE that offer special incentives to businesses, including 100% foreign ownership, tax exemptions, and simplified business setup processes. These zones are designed to attract foreign investment and promote economic diversification.</p>
      
      <h2>Key Benefits of Free Zones</h2>
      <ul>
        <li><strong>100% Foreign Ownership:</strong> Unlike mainland companies, free zone businesses can be 100% owned by foreign nationals, eliminating the need for a local partner.</li>
        <li><strong>Tax Benefits:</strong> Most free zones offer corporate tax exemptions and zero personal income tax, making them highly attractive for international businesses.</li>
        <li><strong>Simplified Setup:</strong> The setup process in free zones is typically faster and more streamlined compared to mainland registration.</li>
        <li><strong>Business-Friendly Regulations:</strong> Free zones often have more flexible regulations tailored to international business needs.</li>
      </ul>
      
      <h2>Types of Free Zones</h2>
      <p>The UAE has specialized free zones catering to different industries:</p>
      <ul>
        <li><strong>Technology Zones:</strong> Dubai Internet City, Dubai Silicon Oasis</li>
        <li><strong>Financial Zones:</strong> Dubai International Financial Centre (DIFC)</li>
        <li><strong>Media Zones:</strong> Dubai Media City, Dubai Studio City</li>
        <li><strong>Healthcare Zones:</strong> Dubai Healthcare City</li>
        <li><strong>General Business Zones:</strong> DMCC, JAFZA, Sharjah Airport International Free Zone</li>
      </ul>
      
      <h2>Choosing the Right Free Zone</h2>
      <p>When selecting a free zone, consider the following factors:</p>
      <ul>
        <li>Industry focus and specialization</li>
        <li>Location and accessibility</li>
        <li>License types available</li>
        <li>Cost structure and fees</li>
        <li>Infrastructure and facilities</li>
        <li>Network and community benefits</li>
      </ul>
      
      <h2>Setting Up in a Free Zone</h2>
      <p>The setup process typically involves:</p>
      <ol>
        <li>Choosing your free zone and license type</li>
        <li>Reserving your trade name</li>
        <li>Submitting application and required documents</li>
        <li>Obtaining approvals and license</li>
        <li>Setting up office space (if required)</li>
        <li>Processing visas for employees</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Free zones offer an excellent entry point for businesses looking to establish in the UAE. With the right guidance and understanding of the options available, you can select a free zone that best suits your business needs and objectives.</p>
    `
  },
  'mainland-vs-free-zone': {
    title: 'Mainland vs Free Zone: Which is Right for Your Business?',
    category: 'Business Setup',
    date: '2024-01-10',
    readTime: '7 min read',
    excerpt: 'A detailed comparison to help you decide between mainland and free zone setup based on your business activities and goals.',
    content: `
      <p>One of the most important decisions when setting up a business in Dubai is choosing between a mainland license and a free zone license. Each option has distinct advantages and limitations, making it essential to understand which suits your business model best.</p>
      
      <h2>Mainland Company Setup</h2>
      <p>Mainland companies are registered with the Department of Economic Development (DED) and can operate anywhere in the UAE without geographic restrictions.</p>
      
      <h3>Advantages:</h3>
      <ul>
        <li>Unrestricted trading rights across the UAE</li>
        <li>Ability to bid for government contracts</li>
        <li>Direct access to the local market</li>
        <li>No geographic limitations</li>
        <li>Can engage in retail and wholesale trading</li>
      </ul>
      
      <h3>Limitations:</h3>
      <ul>
        <li>Generally requires a local sponsor or service agent (51% UAE ownership for certain activities)</li>
        <li>More complex setup process</li>
        <li>Higher costs and more documentation required</li>
      </ul>
      
      <h2>Free Zone Company Setup</h2>
      <p>Free zone companies operate within designated free zone areas and are regulated by the respective free zone authority.</p>
      
      <h3>Advantages:</h3>
      <ul>
        <li>100% foreign ownership</li>
        <li>Tax benefits and exemptions</li>
        <li>Simplified setup process</li>
        <li>Industry-specific zones with specialized support</li>
        <li>Modern infrastructure and facilities</li>
      </ul>
      
      <h3>Limitations:</h3>
      <ul>
        <li>Limited to operating within the free zone or outside the UAE</li>
        <li>Cannot directly trade with the UAE mainland (requires customs clearance)</li>
        <li>Cannot bid for government contracts directly</li>
        <li>May require a local service agent for mainland activities</li>
      </ul>
      
      <h2>Making the Decision</h2>
      <p>Consider these factors when deciding:</p>
      <ul>
        <li><strong>Business Activities:</strong> What will you be doing? Retail requires mainland, while many services work well in free zones.</li>
        <li><strong>Target Market:</strong> Are you serving the UAE market directly or exporting? Mainland for local market, free zone for international.</li>
        <li><strong>Ownership Structure:</strong> Do you want 100% ownership without a local partner? Free zones offer this advantage.</li>
        <li><strong>Cost Considerations:</strong> Free zones often have lower initial costs, while mainland offers broader market access.</li>
        <li><strong>Future Plans:</strong> Consider your expansion plans and whether you'll need mainland access later.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The choice between mainland and free zone depends on your specific business needs, activities, and long-term goals. Consulting with experts can help you make an informed decision that aligns with your business objectives.</p>
    `
  },
  'market-entry-strategy-uae': {
    title: 'Market Entry Strategy for the UAE: Key Considerations',
    category: 'Strategy',
    date: '2024-01-05',
    readTime: '6 min read',
    excerpt: 'Essential factors to consider when entering the UAE market, from regulatory requirements to cultural considerations.',
    content: `
      <p>Entering the UAE market requires careful planning and strategic consideration of various factors. A well-thought-out market entry strategy can make the difference between success and challenges in this dynamic market.</p>
      
      <h2>Market Research and Analysis</h2>
      <p>Before entering the UAE market, thorough research is essential:</p>
      <ul>
        <li>Understand market size and growth potential</li>
        <li>Analyze competition and market positioning</li>
        <li>Identify target customer segments</li>
        <li>Study consumer behavior and preferences</li>
        <li>Assess pricing and distribution channels</li>
      </ul>
      
      <h2>Regulatory and Legal Considerations</h2>
      <p>The UAE has specific regulatory requirements that vary by industry:</p>
      <ul>
        <li>Business licensing and registration requirements</li>
        <li>Industry-specific regulations and approvals</li>
        <li>Compliance with local laws and standards</li>
        <li>Understanding of tax obligations</li>
        <li>Intellectual property protection</li>
      </ul>
      
      <h2>Cultural and Business Environment</h2>
      <p>The UAE's diverse and multicultural business environment requires cultural sensitivity:</p>
      <ul>
        <li>Understanding of local business customs and etiquette</li>
        <li>Building relationships and trust (wasta)</li>
        <li>Adapting to the work week (Sunday-Thursday)</li>
        <li>Respect for religious and cultural practices</li>
        <li>Language considerations (Arabic and English)</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>A successful market entry strategy requires comprehensive planning, understanding of the local environment, and expert guidance. Taking the time to properly plan and prepare will significantly increase your chances of success in the UAE market.</p>
    `
  },
  'business-license-types-dubai': {
    title: 'Understanding Business License Types in Dubai',
    category: 'Business Setup',
    date: '2023-12-28',
    readTime: '4 min read',
    excerpt: 'An overview of different license types available in Dubai and which one suits your business activities best.',
    content: `
      <p>Understanding the different types of business licenses in Dubai is crucial for ensuring your business activities are properly covered and compliant. Dubai offers various license types to accommodate different business models.</p>
      
      <h2>Commercial License</h2>
      <p>A commercial license covers trading activities, including buying and selling goods. This license is suitable for:</p>
      <ul>
        <li>Import/export businesses</li>
        <li>Retail and wholesale trading</li>
        <li>General trading companies</li>
        <li>Distributorship businesses</li>
      </ul>
      
      <h2>Professional License</h2>
      <p>Professional licenses are for service-based businesses that require professional expertise:</p>
      <ul>
        <li>Consulting services</li>
        <li>Legal and accounting services</li>
        <li>Engineering and architecture</li>
        <li>Medical and healthcare services</li>
        <li>Educational services</li>
        <li>IT and software services</li>
      </ul>
      
      <h2>Industrial License</h2>
      <p>Industrial licenses are for manufacturing and production activities:</p>
      <ul>
        <li>Manufacturing of goods</li>
        <li>Food processing</li>
        <li>Pharmaceutical production</li>
        <li>Construction materials manufacturing</li>
        <li>Packaging and labeling</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Selecting the appropriate license type is a critical step in your business setup. Working with experienced consultants ensures you choose the right license and maintain compliance with all regulatory requirements.</p>
    `
  },
  'visa-processing-guide': {
    title: 'Complete Guide to UAE Visa Processing for Business Owners',
    category: 'Visa & Immigration',
    date: '2023-12-20',
    readTime: '8 min read',
    excerpt: 'Step-by-step guide to visa processing for business owners, employees, and dependents in the UAE.',
    content: `
      <p>Understanding the UAE visa process is essential for business owners and their teams. The visa system in the UAE is comprehensive and varies based on your business structure and requirements.</p>
      
      <h2>Types of Business Visas</h2>
      <h3>Investor/Partner Visa</h3>
      <p>For business owners and partners holding significant shares in UAE companies:</p>
      <ul>
        <li>Valid for 2-3 years depending on license type</li>
        <li>Requires minimum investment threshold</li>
        <li>Allows sponsorship of family members</li>
      </ul>
      
      <h3>Employment Visa</h3>
      <p>For employees working in UAE companies:</p>
      <ul>
        <li>Sponsored by the employing company</li>
        <li>Typically valid for 2-3 years</li>
        <li>Can sponsor dependents (spouse and children)</li>
        <li>Requires medical fitness test</li>
      </ul>
      
      <h2>Visa Processing Steps</h2>
      <p>The visa process involves several steps:</p>
      <ol>
        <li>Entry permit application</li>
        <li>Entry to UAE</li>
        <li>Medical fitness test</li>
        <li>Emirates ID application</li>
        <li>Residency visa stamping</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>While the UAE visa process can seem complex, understanding the requirements and working with experienced professionals can make the process smooth and efficient. Proper planning and preparation are key to successful visa processing.</p>
    `
  },
  'scaling-business-dubai': {
    title: 'Scaling Your Business in Dubai: Growth Strategies',
    category: 'Growth',
    date: '2023-12-15',
    readTime: '6 min read',
    excerpt: 'Practical strategies for scaling and expanding your business operations in the dynamic Dubai market.',
    content: `
      <p>Scaling a business in Dubai requires strategic planning, understanding of the market dynamics, and leveraging the right opportunities. The city's strategic location, business-friendly environment, and growing economy offer excellent opportunities for business expansion.</p>
      
      <h2>Market Expansion Strategies</h2>
      <p>Dubai serves as a gateway to the wider Middle East and North Africa (MENA) region:</p>
      <ul>
        <li>Expand to other Emirates (Abu Dhabi, Sharjah, etc.)</li>
        <li>Enter other GCC markets (Saudi Arabia, Qatar, etc.)</li>
        <li>Leverage Dubai's logistics hub for regional expansion</li>
        <li>Consider free zone presence for re-export activities</li>
      </ul>
      
      <h2>Operational Scaling</h2>
      <p>Building the right team is crucial for scaling:</p>
      <ul>
        <li>Hire talent with local market knowledge</li>
        <li>Build a diverse, multicultural team</li>
        <li>Invest in training and development</li>
        <li>Create clear organizational structure</li>
      </ul>
      
      <h2>Financial Management</h2>
      <p>Proper financial planning supports growth:</p>
      <ul>
        <li>Secure adequate financing for expansion</li>
        <li>Manage cash flow effectively</li>
        <li>Plan for increased operational costs</li>
        <li>Consider investment and funding options</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Scaling in Dubai offers tremendous opportunities, but requires careful planning, strategic thinking, and execution. By focusing on market expansion, operational efficiency, and strategic partnerships, businesses can achieve sustainable growth in this dynamic market.</p>
    `
  }
};

export async function generateStaticParams() {
  return Object.keys(insights).map((slug) => ({
    slug: slug,
  }));
}

export default async function InsightDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const insight = insights[slug as keyof typeof insights];

  if (!insight) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-white/10 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-purple-950/20 to-indigo-950/30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <Link 
            href="/insights"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-light mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Insights</span>
          </Link>
          
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/70 text-sm font-light">
              {insight.category}
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light text-white mb-6 leading-tight">
            {insight.title}
          </h1>
          
          <p className="text-xl text-white/70 font-light leading-relaxed mb-8">
            {insight.excerpt}
          </p>
          
          <div className="flex items-center gap-6 text-white/60 text-sm font-light">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(insight.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{insight.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content with Enhanced Styling */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Featured Image Placeholder */}
          <div className="mb-12 rounded-2xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-600/20 border border-white/10 flex items-center justify-center">
              <div className="text-center p-12">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-white/40" />
                </div>
                <p className="text-white/40 font-light text-sm">Article Illustration</p>
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-light prose-headings:mt-12 prose-headings:mb-6
              prose-h2:text-3xl prose-h2:font-light prose-h2:mt-16 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:font-light prose-h3:mt-10 prose-h3:mb-4
              prose-p:text-white/80 prose-p:font-light prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
              prose-strong:text-white prose-strong:font-normal
              prose-ul:text-white/80 prose-ul:font-light prose-ul:my-6
              prose-ol:text-white/80 prose-ol:font-light prose-ol:my-6
              prose-li:text-white/80 prose-li:font-light prose-li:mb-3 prose-li:leading-relaxed
              prose-li:marker:text-white/40
              prose-a:text-white prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-white/80
              prose-ul:space-y-3 prose-ol:space-y-3
              prose-ul:pl-6 prose-ol:pl-6"
            dangerouslySetInnerHTML={{ __html: insight.content }}
          />
        </div>
      </article>

      {/* Related Articles / Key Takeaways */}
      <section className="py-20 border-t border-white/10 bg-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-light text-white mb-4">Key Takeaways</h3>
              <ul className="space-y-3 text-white/70 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-white/40 mt-1.5">•</span>
                  <span>Understand your options before making decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/40 mt-1.5">•</span>
                  <span>Seek professional guidance for complex processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/40 mt-1.5">•</span>
                  <span>Plan ahead and allow time for approvals</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-light text-white mb-4">Need Help?</h3>
              <p className="text-white/70 font-light leading-relaxed mb-6">
                Our team of experts is here to guide you through every step of your business journey in Dubai.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-white hover:text-white/80 text-sm font-medium transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-950/20 via-purple-950/10 to-indigo-950/20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-light text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl lg:text-2xl text-white/70 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your business succeed in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-white/90 px-8 py-4 rounded-lg font-medium text-base transition-all duration-300"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 text-white px-8 py-4 rounded-lg font-medium text-base transition-all duration-300"
            >
              Read More Insights
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
