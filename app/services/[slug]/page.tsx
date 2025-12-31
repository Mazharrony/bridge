import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Shield, Briefcase, Building2, FileText } from 'lucide-react';
import { notFound } from 'next/navigation';
import { FadeInUp, StaggerContainer, StaggerItem } from '@/components/motion-wrapper';

const services = {
  'market-entry-strategy': {
    title: 'Market Entry Strategy',
    description: 'Comprehensive analysis and strategic planning for entering the UAE market with confidence and clarity.',
    overview: 'Our market entry strategy service helps you navigate the complexities of entering the UAE market with a clear, actionable plan tailored to your business objectives.',
    icon: TrendingUp,
    content: {
      introduction: 'Entering a new market requires careful planning and deep understanding of local dynamics. Our Market Entry Strategy service provides you with comprehensive analysis and strategic recommendations to ensure your successful entry into the UAE market.',
      whatWeDo: [
        'Comprehensive market research and analysis',
        'Competitive landscape assessment',
        'Regulatory framework evaluation',
        'Market opportunity identification',
        'Entry strategy recommendations',
        'Risk assessment and mitigation planning',
        'Go-to-market strategy development',
        'Implementation roadmap creation'
      ],
      benefits: [
        'Reduced market entry risks',
        'Clear understanding of market dynamics',
        'Strategic advantage over competitors',
        'Optimized resource allocation',
        'Informed decision-making',
        'Faster time to market'
      ],
      process: [
        {
          step: 'Initial Assessment',
          description: 'We start by understanding your business objectives, industry, target market, and strategic goals for entering the UAE.'
        },
        {
          step: 'Market Research',
          description: 'Our team conducts comprehensive research on market size, trends, competition, regulations, and opportunities specific to your industry.'
        },
        {
          step: 'Strategic Analysis',
          description: 'We analyze the data collected to identify opportunities, challenges, and develop strategic recommendations tailored to your business.'
        },
        {
          step: 'Strategy Development',
          description: 'We create a detailed market entry strategy with actionable recommendations, timelines, and implementation guidelines.'
        },
        {
          step: 'Presentation & Review',
          description: 'We present our findings and recommendations, answer your questions, and refine the strategy based on your feedback.'
        }
      ]
    }
  },
  'business-setup-licensing': {
    title: 'Business Setup & Licensing',
    description: 'End-to-end support for company formation, licensing, and regulatory compliance in Dubai.',
    overview: 'We handle every aspect of your business setup, from initial documentation to final approvals, ensuring a smooth and compliant establishment in Dubai.',
    icon: FileText,
    content: {
      introduction: 'Setting up a business in Dubai involves navigating various regulatory requirements, licensing procedures, and documentation. Our Business Setup & Licensing service handles all aspects of the process, making it smooth and stress-free for you.',
      whatWeDo: [
        'Business structure consultation',
        'License type selection guidance',
        'Document preparation and verification',
        'License application submission',
        'Government authority coordination',
        'Trade name reservation',
        'Visa processing support',
        'Bank account opening assistance'
      ],
      benefits: [
        'Hassle-free setup process',
        'Expert guidance throughout',
        'Faster approvals',
        'Compliance assurance',
        'Time and cost savings',
        'Ongoing support available'
      ],
      process: [
        {
          step: 'Consultation',
          description: 'We discuss your business type, activities, and goals to determine the best structure and license type for your needs.'
        },
        {
          step: 'Documentation',
          description: 'We prepare all required documents, verify information, and ensure everything meets regulatory requirements.'
        },
        {
          step: 'Application Submission',
          description: 'We submit your application to the relevant authorities and coordinate with government departments on your behalf.'
        },
        {
          step: 'Approval & Licensing',
          description: 'We track your application, handle any queries, and secure your business license and approvals.'
        },
        {
          step: 'Post-Setup Support',
          description: 'We assist with visa processing, bank account opening, and any additional requirements to get your business fully operational.'
        }
      ]
    }
  },
  'corporate-advisory': {
    title: 'Corporate Advisory',
    description: 'Strategic guidance for growth, expansion, and optimization of your business operations.',
    overview: 'Our corporate advisory services provide strategic insights and guidance to help your business grow, expand, and optimize operations in the UAE market.',
    icon: Briefcase,
    content: {
      introduction: 'Growing and optimizing your business in the UAE requires strategic thinking and expert guidance. Our Corporate Advisory services provide you with the insights and recommendations needed to make informed decisions and achieve your business objectives.',
      whatWeDo: [
        'Strategic planning and consultation',
        'Business model optimization',
        'Market expansion strategies',
        'Operational efficiency analysis',
        'Financial planning and advisory',
        'Risk management strategies',
        'Partnership and joint venture guidance',
        'Exit strategy planning'
      ],
      benefits: [
        'Informed strategic decisions',
        'Improved operational efficiency',
        'Better market positioning',
        'Reduced business risks',
        'Enhanced profitability',
        'Sustainable growth'
      ],
      process: [
        {
          step: 'Business Assessment',
          description: 'We conduct a comprehensive assessment of your current business operations, financials, market position, and strategic objectives.'
        },
        {
          step: 'Analysis & Research',
          description: 'We analyze market trends, competitive landscape, and opportunities to identify areas for improvement and growth.'
        },
        {
          step: 'Strategy Development',
          description: 'We develop customized strategies and recommendations aligned with your business goals and market opportunities.'
        },
        {
          step: 'Implementation Support',
          description: 'We provide guidance and support during implementation, helping you execute strategies effectively.'
        },
        {
          step: 'Ongoing Advisory',
          description: 'We offer continuous advisory services to help you adapt to market changes and optimize your business operations.'
        }
      ]
    }
  },
  'free-zone-solutions': {
    title: 'Free Zone Solutions',
    description: 'Expert consultation on free zone options and benefits for international businesses.',
    overview: 'We help you select the optimal free zone, understand benefits and regulations, and guide you through the complete setup process for your business.',
    icon: Building2,
    content: {
      introduction: 'Dubai offers numerous free zones, each with unique benefits and regulations. Our Free Zone Solutions service helps you navigate these options and select the best free zone for your business needs, then guides you through the complete setup process.',
      whatWeDo: [
        'Free zone comparison and selection',
        'License type consultation',
        'Free zone setup process guidance',
        'Visa application support',
        'Office space assistance',
        'Understanding free zone benefits',
        'Compliance guidance',
        'Renewal and maintenance support'
      ],
      benefits: [
        '100% foreign ownership',
        'Tax benefits',
        'Simplified setup process',
        'Business-friendly regulations',
        'Strategic location advantages',
        'Access to world-class infrastructure'
      ],
      process: [
        {
          step: 'Free Zone Selection',
          description: 'We help you compare different free zones and select the one that best matches your business activities and requirements.'
        },
        {
          step: 'License Application',
          description: 'We guide you through the license application process, prepare documentation, and submit applications on your behalf.'
        },
        {
          step: 'Office Setup',
          description: 'We assist with office space selection, virtual office setup, or flexi-desk arrangements based on your needs.'
        },
        {
          step: 'Visa Processing',
          description: 'We handle visa applications for you and your team, ensuring smooth processing and approvals.'
        },
        {
          step: 'Ongoing Support',
          description: 'We provide ongoing support for renewals, compliance, and any additional requirements throughout your business journey.'
        }
      ]
    }
  },
  'mainland-company-setup': {
    title: 'Mainland Company Setup',
    description: 'Complete support for mainland company registration and local partnership requirements.',
    overview: 'Comprehensive support for mainland company registration, including local sponsor arrangements and full compliance with UAE mainland regulations.',
    icon: Building2,
    content: {
      introduction: 'Mainland company setup allows you to operate anywhere in the UAE and directly trade with the local market. Our Mainland Company Setup service provides complete support for registration, licensing, and compliance with mainland regulations.',
      whatWeDo: [
        'Mainland license application',
        'Local sponsor coordination',
        'Trade name reservation',
        'MOA/AOA preparation',
        'Government approvals',
        'Commercial registration',
        'Visa processing support',
        'Bank account assistance'
      ],
      benefits: [
        'Direct access to local market',
        'No geographic restrictions',
        'Government contract eligibility',
        'Retail and wholesale trading rights',
        'Onshore business operations',
        'Local market presence'
      ],
      process: [
        {
          step: 'Initial Consultation',
          description: 'We discuss your business activities, location preferences, and requirements to determine if mainland setup is right for you.'
        },
        {
          step: 'Sponsor Arrangement',
          description: 'We help you find and coordinate with a local sponsor or service agent as required by mainland regulations.'
        },
        {
          step: 'Documentation & Application',
          description: 'We prepare all required documents, including MOA/AOA, and submit your mainland license application.'
        },
        {
          step: 'Approvals & Registration',
          description: 'We coordinate with various government departments to secure approvals and complete your commercial registration.'
        },
        {
          step: 'Operational Setup',
          description: 'We assist with office setup, visa processing, and bank account opening to get your business fully operational.'
        }
      ]
    }
  },
  'ongoing-business-support': {
    title: 'Ongoing Business Support',
    description: 'Continuous advisory and support services to ensure your business thrives in the UAE market.',
    overview: 'Beyond setup, we provide ongoing support including license renewals, compliance management, and strategic guidance for long-term success.',
    icon: Shield,
    content: {
      introduction: 'Business success requires ongoing support and maintenance. Our Ongoing Business Support service ensures your business remains compliant, optimized, and positioned for growth in the UAE market.',
      whatWeDo: [
        'License renewals and maintenance',
        'Compliance monitoring and management',
        'Visa renewals and processing',
        'Accounting and bookkeeping support',
        'Legal documentation updates',
        'Regulatory change management',
        'Strategic business consulting',
        'Growth and expansion planning'
      ],
      benefits: [
        'Continuous compliance',
        'Reduced administrative burden',
        'Peace of mind',
        'Strategic guidance',
        'Cost-effective support',
        'Long-term business sustainability'
      ],
      process: [
        {
          step: 'Support Plan Development',
          description: 'We assess your needs and develop a customized support plan that covers all your ongoing requirements.'
        },
        {
          step: 'Regular Monitoring',
          description: 'We monitor your compliance requirements, renewal dates, and regulatory changes to keep you informed.'
        },
        {
          step: 'Proactive Management',
          description: 'We handle renewals, documentation updates, and compliance matters proactively to avoid any issues.'
        },
        {
          step: 'Reporting & Updates',
          description: 'We provide regular updates on your business status, compliance matters, and any regulatory changes.'
        },
        {
          step: 'Strategic Advisory',
          description: 'We offer ongoing strategic advice to help you grow, optimize, and adapt your business in the UAE market.'
        }
      ]
    }
  }
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServiceDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      
      {/* Hero Section with Gradient Background */}
      <section className="relative pt-32 pb-24 border-b border-white/10 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-purple-950/20 to-indigo-950/30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="max-w-4xl">
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-light mb-8 transition-colors group"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Services</span>
            </Link>
            
            {/* Icon and Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs font-light mb-3">
                  Service
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl lg:text-2xl text-white/70 font-light leading-relaxed max-w-3xl">
              {service.overview}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 border-b border-white/10">
        <FadeInUp className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none
            prose-p:text-white/80 prose-p:font-light prose-p:leading-relaxed prose-p:text-lg
            prose-strong:text-white prose-strong:font-normal">
            <p className="text-xl leading-relaxed">
              {service.content.introduction}
            </p>
          </div>
        </FadeInUp>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">
              What We Do
            </h2>
            <p className="text-xl text-white/60 font-light">
              Comprehensive services tailored to your business needs
            </p>
          </FadeInUp>
          
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {service.content.whatWeDo.map((item, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-white/60" />
                  </div>
                  <p className="text-white/80 font-light leading-relaxed flex-1">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInUp className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-white/60 font-light">
              Why choose our {service.title.toLowerCase()} service
            </p>
          </FadeInUp>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.content.benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <div className="p-8 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 hover:border-white/20 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <span className="text-white/80 font-light text-lg">{index + 1}</span>
                    </div>
                  </div>
                  <p className="text-white/90 font-light leading-relaxed text-lg">{benefit}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/5 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeInUp className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-light text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-white/60 font-light">
              A streamlined approach to deliver results
            </p>
          </FadeInUp>
          
          <StaggerContainer className="space-y-8">
            {service.content.process.map((step, index) => (
              <StaggerItem key={index}>
                <div className="flex gap-8 items-start p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all">
                      <span className="text-3xl font-light text-white/60 group-hover:text-white transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-normal text-white mb-3 group-hover:text-white transition-colors">
                      {step.step}
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats/Callout Section */}
      <section className="py-20 border-b border-white/10">
        <StaggerContainer className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '500+', label: 'Businesses Supported' },
              { number: '10+', label: 'Years Experience' },
              { number: '95%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <div className="text-center p-8 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="text-4xl font-light text-white mb-3">{stat.number}</div>
                  <p className="text-white/70 font-light">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-950/20 via-purple-950/10 to-indigo-950/20">
        <FadeInUp className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-light text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl lg:text-2xl text-white/70 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how {service.title} can help your business succeed in Dubai.
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
              href="/services"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 text-white px-8 py-4 rounded-lg font-medium text-base transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </FadeInUp>
      </section>

      <Footer />
    </main>
  );
}
