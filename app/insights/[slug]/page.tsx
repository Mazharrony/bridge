import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
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
      
      <h2>Hybrid Approach</h2>
      <p>Some businesses opt for a hybrid approach, establishing both a free zone company and a mainland entity to maximize benefits and market access. This strategy can be particularly effective for businesses with diverse activities or those planning significant expansion.</p>
      
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
      
      <h2>Business Structure Selection</h2>
      <p>Choosing the right business structure is crucial:</p>
      <ul>
        <li>Mainland vs Free Zone comparison</li>
        <li>License type selection</li>
        <li>Ownership structure considerations</li>
        <li>Location and office requirements</li>
        <li>Partnership and sponsorship options</li>
      </ul>
      
      <h2>Financial Planning</h2>
      <p>Proper financial planning ensures smooth operations:</p>
      <ul>
        <li>Initial capital requirements</li>
        <li>Ongoing operational costs</li>
        <li>Bank account setup and requirements</li>
        <li>Currency and payment considerations</li>
        <li>Budgeting for licenses and renewals</li>
      </ul>
      
      <h2>Market Entry Methods</h2>
      <p>Consider different entry methods:</p>
      <ul>
        <li><strong>Direct Investment:</strong> Setting up your own entity</li>
        <li><strong>Joint Ventures:</strong> Partnering with local companies</li>
        <li><strong>Distribution Agreements:</strong> Working with local distributors</li>
        <li><strong>Franchising:</strong> Expanding through franchising models</li>
      </ul>
      
      <h2>Implementation Timeline</h2>
      <p>A realistic timeline is important for planning:</p>
      <ul>
        <li>Research and planning phase (2-4 weeks)</li>
        <li>Business setup and licensing (4-8 weeks)</li>
        <li>Office setup and infrastructure (2-4 weeks)</li>
        <li>Team recruitment and visa processing (4-6 weeks)</li>
        <li>Market entry and launch (ongoing)</li>
      </ul>
      
      <h2>Common Challenges and Solutions</h2>
      <p>Be prepared for common challenges:</p>
      <ul>
        <li>Navigating bureaucratic processes (work with experienced consultants)</li>
        <li>Understanding local market dynamics (conduct thorough research)</li>
        <li>Building local networks (attend events, join business councils)</li>
        <li>Adapting products/services (localization may be necessary)</li>
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
      
      <h2>Tourism License</h2>
      <p>Tourism licenses cover businesses in the tourism and hospitality sector:</p>
      <ul>
        <li>Travel agencies</li>
        <li>Tour operators</li>
        <li>Hotel and resort management</li>
        <li>Event management</li>
      </ul>
      
      <h2>Agricultural License</h2>
      <p>Agricultural licenses are for farming and agricultural activities:</p>
      <ul>
        <li>Crop cultivation</li>
        <li>Livestock farming</li>
        <li>Fish farming</li>
        <li>Agricultural consulting</li>
      </ul>
      
      <h2>Choosing the Right License</h2>
      <p>When selecting a license type, consider:</p>
      <ul>
        <li>Your primary business activities</li>
        <li>Whether you'll engage in multiple activity types</li>
        <li>Future expansion plans</li>
        <li>Regulatory requirements for specific industries</li>
      </ul>
      
      <h2>Multiple Activities</h2>
      <p>Many businesses engage in multiple activities. You can add multiple activities to a single license, though additional activities may incur extra fees. It's important to ensure all your business activities are properly licensed.</p>
      
      <h2>License Renewal</h2>
      <p>Business licenses in Dubai typically need to be renewed annually. The renewal process includes:</p>
      <ul>
        <li>Payment of renewal fees</li>
        <li>Submission of updated documents if required</li>
        <li>Compliance with any new regulatory requirements</li>
        <li>Updating of business information</li>
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
      
      <h3>Dependent Visa</h3>
      <p>For family members of visa holders:</p>
      <ul>
        <li>Sponsored by the primary visa holder</li>
        <li>Valid for the same duration as sponsor's visa</li>
        <li>Includes spouse and children under 18</li>
      </ul>
      
      <h2>Visa Processing Steps</h2>
      <h3>Step 1: Entry Permit</h3>
      <p>The first step is obtaining an entry permit, which allows entry into the UAE:</p>
      <ul>
        <li>Application submission to relevant authority</li>
        <li>Required documents submission</li>
        <li>Approval and permit issuance</li>
      </ul>
      
      <h3>Step 2: Entry to UAE</h3>
      <p>Once you have the entry permit, you can enter the UAE and begin the residency process.</p>
      
      <h3>Step 3: Medical Test</h3>
      <p>All employment and investor visa applicants must undergo a medical fitness test at authorized medical centers.</p>
      
      <h3>Step 4: Emirates ID Application</h3>
      <p>The Emirates ID is a mandatory identification card for all UAE residents:</p>
      <ul>
        <li>Application at Emirates Identity Authority</li>
        <li>Biometric data capture</li>
        <li>Card issuance (typically 5-7 working days)</li>
      </ul>
      
      <h3>Step 5: Residency Visa Stamping</h3>
      <p>Final step involves stamping the residency visa in your passport:</p>
      <ul>
        <li>Submission to immigration authority</li>
        <li>Passport stamping</li>
        <li>Visa activation</li>
      </ul>
      
      <h2>Required Documents</h2>
      <p>Common documents required include:</p>
      <ul>
        <li>Passport copies (valid for at least 6 months)</li>
        <li>Passport-sized photographs</li>
        <li>Medical fitness certificate</li>
        <li>Emirates ID application</li>
        <li>Company documents (trade license, etc.)</li>
        <li>Educational certificates (attested if required)</li>
      </ul>
      
      <h2>Processing Times</h2>
      <p>Typical processing times vary:</p>
      <ul>
        <li>Entry permit: 3-5 working days</li>
        <li>Medical test: Same day</li>
        <li>Emirates ID: 5-7 working days</li>
        <li>Visa stamping: 2-3 working days</li>
        <li>Total process: 2-3 weeks</li>
      </ul>
      
      <h2>Visa Renewal</h2>
      <p>Visa renewals follow a similar process:</p>
      <ul>
        <li>Application before expiry (typically 30 days before)</li>
        <li>Medical test (if required)</li>
        <li>Emirates ID renewal</li>
        <li>Visa stamping renewal</li>
      </ul>
      
      <h2>Free Zone vs Mainland Visas</h2>
      <p>Visa processes differ slightly between free zones and mainland:</p>
      <ul>
        <li><strong>Free Zones:</strong> Processed through free zone authority, typically faster</li>
        <li><strong>Mainland:</strong> Processed through General Directorate of Residency and Foreigners Affairs (GDRFA), may have additional requirements</li>
      </ul>
      
      <h2>Common Challenges</h2>
      <p>Be aware of common challenges:</p>
      <ul>
        <li>Document attestation requirements</li>
        <li>Medical test results delays</li>
        <li>Processing backlogs during peak seasons</li>
        <li>Understanding specific free zone requirements</li>
      </ul>
      
      <h2>Tips for Smooth Processing</h2>
      <ul>
        <li>Start the process well in advance</li>
        <li>Ensure all documents are properly attested</li>
        <li>Work with experienced visa processing agents</li>
        <li>Keep track of expiry dates for renewals</li>
        <li>Maintain valid health insurance</li>
      </ul>
      
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
      <h3>Geographic Expansion</h3>
      <p>Dubai serves as a gateway to the wider Middle East and North Africa (MENA) region:</p>
      <ul>
        <li>Expand to other Emirates (Abu Dhabi, Sharjah, etc.)</li>
        <li>Enter other GCC markets (Saudi Arabia, Qatar, etc.)</li>
        <li>Leverage Dubai's logistics hub for regional expansion</li>
        <li>Consider free zone presence for re-export activities</li>
      </ul>
      
      <h3>Product/Service Diversification</h3>
      <p>Expand your offerings to capture more market share:</p>
      <ul>
        <li>Add complementary products or services</li>
        <li>Develop new service lines</li>
        <li>Target different customer segments</li>
        <li>Create value-added services</li>
      </ul>
      
      <h2>Operational Scaling</h2>
      <h3>Team Expansion</h3>
      <p>Building the right team is crucial for scaling:</p>
      <ul>
        <li>Hire talent with local market knowledge</li>
        <li>Build a diverse, multicultural team</li>
        <li>Invest in training and development</li>
        <li>Create clear organizational structure</li>
      </ul>
      
      <h3>Technology and Infrastructure</h3>
      <p>Leverage technology for efficiency:</p>
      <ul>
        <li>Implement scalable business systems</li>
        <li>Adopt cloud-based solutions</li>
        <li>Automate repetitive processes</li>
        <li>Invest in digital infrastructure</li>
      </ul>
      
      <h2>Financial Management</h2>
      <p>Proper financial planning supports growth:</p>
      <ul>
        <li>Secure adequate financing for expansion</li>
        <li>Manage cash flow effectively</li>
        <li>Plan for increased operational costs</li>
        <li>Consider investment and funding options</li>
        <li>Maintain financial discipline</li>
      </ul>
      
      <h2>Partnerships and Alliances</h2>
      <p>Strategic partnerships can accelerate growth:</p>
      <ul>
        <li>Partner with local businesses</li>
        <li>Form strategic alliances</li>
        <li>Join industry associations</li>
        <li>Collaborate with complementary businesses</li>
        <li>Build supplier and distributor networks</li>
      </ul>
      
      <h2>Marketing and Brand Building</h2>
      <p>Strong brand presence supports scaling:</p>
      <ul>
        <li>Develop a strong brand identity</li>
        <li>Invest in digital marketing</li>
        <li>Build local market presence</li>
        <li>Engage in networking and events</li>
        <li>Leverage social media and online platforms</li>
      </ul>
      
      <h2>Regulatory Considerations</h2>
      <p>As you scale, regulatory compliance becomes more complex:</p>
      <ul>
        <li>Update licenses for new activities</li>
        <li>Ensure compliance with labor laws</li>
        <li>Maintain proper documentation</li>
        <li>Stay updated on regulatory changes</li>
        <li>Consider mainland expansion if in free zone</li>
      </ul>
      
      <h2>Challenges and Solutions</h2>
      <h3>Common Scaling Challenges:</h3>
      <ul>
        <li><strong>Market Competition:</strong> Differentiate through quality and service</li>
        <li><strong>Resource Constraints:</strong> Plan finances and secure funding early</li>
        <li><strong>Regulatory Complexity:</strong> Work with experienced consultants</li>
        <li><strong>Talent Acquisition:</strong> Offer competitive packages and growth opportunities</li>
        <li><strong>Operational Efficiency:</strong> Implement systems and processes</li>
      </ul>
      
      <h2>Growth Metrics to Monitor</h2>
      <p>Track key metrics as you scale:</p>
      <ul>
        <li>Revenue growth rate</li>
        <li>Customer acquisition and retention</li>
        <li>Market share</li>
        <li>Operational efficiency</li>
        <li>Employee productivity</li>
        <li>Profitability margins</li>
      </ul>
      
      <h2>Long-Term Vision</h2>
      <p>Successful scaling requires a clear long-term vision:</p>
      <ul>
        <li>Define your growth objectives</li>
        <li>Plan for sustainable growth</li>
        <li>Build scalable business models</li>
        <li>Maintain focus on core competencies</li>
        <li>Adapt to market changes</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Scaling in Dubai offers tremendous opportunities, but requires careful planning, strategic thinking, and execution. By focusing on market expansion, operational efficiency, and strategic partnerships, businesses can achieve sustainable growth in this dynamic market.</p>
    `
  }
};

export default function InsightDetailPage({ params }: { params: { slug: string } }) {
  const insight = insights[params.slug as keyof typeof insights];

  if (!insight) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Page Header */}
      <section className="relative pt-32 pb-20 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link 
            href="/insights"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-light mb-6 transition-colors"
          >
            ← Back to Insights
          </Link>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs font-light">
              {insight.category}
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-light text-white mb-6 leading-tight">
            {insight.title}
          </h1>
          <div className="flex items-center gap-6 text-white/60 text-sm font-light">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{new Date(insight.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{insight.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-light
              prose-p:text-white/80 prose-p:font-light prose-p:leading-relaxed
              prose-strong:text-white prose-strong:font-normal
              prose-ul:text-white/80 prose-li:text-white/80 prose-li:font-light
              prose-ol:text-white/80 prose-li:marker:text-white/40
              prose-a:text-white prose-a:underline hover:prose-a:text-white/80
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-ul:space-y-2 prose-ol:space-y-2"
            dangerouslySetInnerHTML={{ __html: insight.content }}
          />
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed mb-8">
            Let&apos;s discuss how we can help your business succeed in Dubai.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-white/90 px-8 py-4 rounded-lg font-medium text-base transition-all duration-300"
          >
            Book a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

