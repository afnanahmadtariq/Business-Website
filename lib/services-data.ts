export interface ServiceFeature {
  title: string
  description: string
}

export interface ServiceProcess {
  step: number
  title: string
  description: string
}

export interface ServiceTestimonial {
  quote: string
  author: string
  company: string
  image?: string
}

export interface Service {
  id: number
  title: string
  slug: string
  shortDescription: string
  icon: string
  description: string
  features: ServiceFeature[]
  process: ServiceProcess[]
  benefits: string[]
  testimonials: ServiceTestimonial[]
  faqs: { question: string; answer: string }[]
  image: string
  ctaText: string
}

export const services: Service[] = [
  {
    id: 1,
    title: "Digital Marketing",
    slug: "digital-marketing",
    shortDescription: "Boost your online presence with our comprehensive digital marketing strategies.",
    icon: "Globe",
    description: `Our digital marketing services are designed to help your business thrive in the online world. We combine data-driven strategies with creative execution to deliver measurable results that drive growth and ROI.

Whether you're looking to increase brand awareness, generate leads, or boost online sales, our team of digital marketing experts will develop a tailored strategy to meet your specific goals. We stay up-to-date with the latest trends and technologies to ensure your business stays ahead of the competition.`,
    features: [
      {
        title: "Search Engine Optimization (SEO)",
        description:
          "Improve your website's visibility in search engine results and drive organic traffic with our comprehensive SEO strategies.",
      },
      {
        title: "Pay-Per-Click Advertising (PPC)",
        description:
          "Generate immediate traffic and leads with targeted paid advertising campaigns across search engines and social media platforms.",
      },
      {
        title: "Social Media Marketing",
        description:
          "Build brand awareness and engage with your audience through strategic social media content and campaigns.",
      },
      {
        title: "Content Marketing",
        description:
          "Attract and retain customers with valuable, relevant content that establishes your authority in your industry.",
      },
      {
        title: "Email Marketing Campaigns",
        description:
          "Nurture leads and maintain customer relationships with personalized email campaigns that drive conversions.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Analysis",
        description:
          "We begin by understanding your business, goals, target audience, and current digital presence. We conduct a comprehensive analysis of your market and competitors.",
      },
      {
        step: 2,
        title: "Strategy Development",
        description:
          "Based on our findings, we develop a customized digital marketing strategy aligned with your business objectives and budget.",
      },
      {
        step: 3,
        title: "Implementation",
        description:
          "Our team executes the strategy across relevant channels, creating compelling content and campaigns designed to engage your target audience.",
      },
      {
        step: 4,
        title: "Monitoring & Optimization",
        description:
          "We continuously monitor campaign performance and make data-driven adjustments to optimize results and maximize ROI.",
      },
      {
        step: 5,
        title: "Reporting & Analysis",
        description:
          "You'll receive regular reports with clear insights into campaign performance, including key metrics and recommendations for future improvements.",
      },
    ],
    benefits: [
      "Increased brand visibility and awareness",
      "Higher quality website traffic and leads",
      "Improved conversion rates",
      "Better return on marketing investment",
      "Data-driven insights for business decisions",
      "Competitive advantage in your market",
    ],
    testimonials: [
      {
        quote:
          "The digital marketing team transformed our online presence. Within six months, our organic traffic increased by 150% and leads by 75%.",
        author: "Jennifer Roberts",
        company: "TechSolutions Inc.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        quote:
          "Their strategic approach to our PPC campaigns reduced our cost per acquisition by 40% while increasing conversions. Highly recommended!",
        author: "Mark Thompson",
        company: "Global Retail Group",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    faqs: [
      {
        question: "How long does it take to see results from digital marketing?",
        answer:
          "Results vary depending on the strategies implemented. PPC campaigns can generate immediate traffic, while SEO typically takes 3-6 months to show significant results. We provide realistic timelines based on your specific situation and goals.",
      },
      {
        question: "How much should I budget for digital marketing?",
        answer:
          "Your budget depends on your goals, industry, and competition. We work with businesses of all sizes and can develop strategies that align with various budget levels. We focus on delivering the best possible ROI regardless of budget size.",
      },
      {
        question: "Do you provide reports on campaign performance?",
        answer:
          "Yes, we provide regular, comprehensive reports that track key performance indicators relevant to your goals. Our reports are designed to be clear and actionable, helping you understand exactly how your campaigns are performing.",
      },
      {
        question: "Can you work with our in-house marketing team?",
        answer:
          "We often collaborate with in-house teams, providing specialized expertise while integrating with your existing processes. We can either supplement your team's capabilities or provide training to enhance their skills.",
      },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ctaText: "Ready to boost your online presence? Contact us today for a free digital marketing consultation.",
  },
  {
    id: 2,
    title: "Business Consulting",
    slug: "business-consulting",
    shortDescription: "Expert advice to optimize your business operations and drive growth.",
    icon: "Lightbulb",
    description: `Our business consulting services provide expert guidance to help your organization overcome challenges, improve performance, and achieve sustainable growth. We work closely with you to understand your unique business needs and develop tailored solutions that deliver measurable results.

With years of experience across various industries, our consultants bring fresh perspectives and proven methodologies to address your most pressing business challenges. Whether you're looking to optimize operations, develop a growth strategy, or navigate a business transformation, we're here to help you succeed.`,
    features: [
      {
        title: "Strategic Planning",
        description:
          "Develop clear, actionable business strategies that align with your vision and drive sustainable growth.",
      },
      {
        title: "Process Optimization",
        description: "Identify inefficiencies and implement improvements to streamline operations and reduce costs.",
      },
      {
        title: "Market Research",
        description:
          "Gain valuable insights into your market, customers, and competitors to inform business decisions.",
      },
      {
        title: "Competitive Analysis",
        description:
          "Understand your position in the market and identify opportunities to differentiate your business.",
      },
      {
        title: "Growth Strategy Development",
        description:
          "Create comprehensive plans for expanding your business through new markets, products, or services.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Assessment",
        description:
          "We conduct a thorough assessment of your current business situation, including strengths, weaknesses, opportunities, and threats.",
      },
      {
        step: 2,
        title: "Goal Setting",
        description:
          "Together, we establish clear, measurable objectives that align with your vision and address your most pressing challenges.",
      },
      {
        step: 3,
        title: "Strategy Development",
        description:
          "Our consultants develop customized strategies and action plans designed to achieve your specific goals.",
      },
      {
        step: 4,
        title: "Implementation Support",
        description:
          "We provide guidance and support throughout the implementation process, ensuring strategies are executed effectively.",
      },
      {
        step: 5,
        title: "Evaluation & Refinement",
        description:
          "We continuously monitor progress, measure results against objectives, and refine strategies as needed to ensure success.",
      },
    ],
    benefits: [
      "Expert guidance from experienced business professionals",
      "Fresh perspectives on business challenges and opportunities",
      "Improved operational efficiency and reduced costs",
      "Strategic clarity and focused direction",
      "Accelerated business growth and improved profitability",
      "Enhanced competitive advantage",
    ],
    testimonials: [
      {
        quote:
          "Their strategic insights helped us identify new market opportunities we hadn't considered. Within a year of implementing their recommendations, we increased revenue by 35%.",
        author: "David Chen",
        company: "Innovate Manufacturing",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        quote:
          "The process optimization work they did transformed our operations. We've reduced costs by 22% while improving customer satisfaction scores.",
        author: "Sarah Williams",
        company: "Premier Services Group",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    faqs: [
      {
        question: "How long does a typical consulting engagement last?",
        answer:
          "The duration varies based on the scope and complexity of your needs. Projects can range from short-term assessments of 2-4 weeks to long-term strategic partnerships spanning several months. We'll provide a clear timeline during our initial consultation.",
      },
      {
        question: "How do you measure the success of your consulting services?",
        answer:
          "We establish clear, measurable objectives at the beginning of each engagement and track progress against these metrics. Success might be measured in terms of cost reduction, revenue growth, improved efficiency, or other key performance indicators relevant to your goals.",
      },
      {
        question: "Will we work with the same consultant throughout the project?",
        answer:
          "Yes, you'll have a dedicated lead consultant who manages your project from start to finish. Depending on your needs, they may bring in specialists with expertise in specific areas, but your primary point of contact remains consistent.",
      },
      {
        question: "How involved do we need to be in the consulting process?",
        answer:
          "Successful consulting requires collaboration. While we do the heavy lifting, we need input and feedback from your team to ensure our recommendations are practical and aligned with your business realities. The level of involvement can be tailored to your availability and preferences.",
      },
    ],
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ctaText:
      "Ready to transform your business? Contact us today for a free consultation with our expert business consultants.",
  },
  {
    id: 3,
    title: "Data Analytics",
    slug: "data-analytics",
    shortDescription: "Transform your data into actionable insights for informed decision-making.",
    icon: "BarChart3",
    description: `Our data analytics services help businesses harness the power of their data to drive smarter decision-making and achieve better outcomes. We transform raw data into meaningful insights that reveal opportunities, identify trends, and solve complex business problems.

In today's data-rich environment, the ability to extract value from information is a critical competitive advantage. Our team of data scientists and analysts combine technical expertise with business acumen to deliver analytics solutions that drive real business impact.`,
    features: [
      {
        title: "Business Intelligence",
        description:
          "Develop dashboards and reports that provide clear visibility into key performance metrics and business trends.",
      },
      {
        title: "Data Visualization",
        description:
          "Transform complex data into intuitive visual representations that make insights accessible to all stakeholders.",
      },
      {
        title: "Predictive Analytics",
        description:
          "Leverage advanced statistical models and machine learning to forecast trends and anticipate future outcomes.",
      },
      {
        title: "Customer Behavior Analysis",
        description:
          "Gain deep insights into customer preferences, behaviors, and journeys to improve targeting and personalization.",
      },
      {
        title: "Performance Metrics & KPIs",
        description:
          "Establish meaningful metrics and key performance indicators aligned with your business objectives.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Data Assessment",
        description:
          "We evaluate your current data sources, quality, and infrastructure to understand what's available and identify any gaps.",
      },
      {
        step: 2,
        title: "Requirements Gathering",
        description:
          "We work with you to define the business questions you need to answer and the insights you want to gain from your data.",
      },
      {
        step: 3,
        title: "Data Preparation",
        description:
          "Our team collects, cleans, and structures your data to ensure accuracy and reliability in the analysis.",
      },
      {
        step: 4,
        title: "Analysis & Modeling",
        description:
          "We apply appropriate analytical techniques and build models to extract meaningful insights from your data.",
      },
      {
        step: 5,
        title: "Visualization & Reporting",
        description:
          "We present findings in clear, actionable formats through interactive dashboards and comprehensive reports.",
      },
    ],
    benefits: [
      "Data-driven decision making across your organization",
      "Identification of new business opportunities and revenue streams",
      "Improved operational efficiency and cost reduction",
      "Enhanced customer understanding and engagement",
      "Early detection of market trends and competitive threats",
      "Reduced risk through better forecasting and scenario planning",
    ],
    testimonials: [
      {
        quote:
          "Their customer behavior analysis completely changed how we approach our marketing. We've seen a 45% increase in customer retention and a 30% boost in average order value.",
        author: "Rebecca Johnson",
        company: "Retail Excellence",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        quote:
          "The predictive models they developed have transformed our inventory management. We've reduced stockouts by 65% while decreasing overall inventory costs by 18%.",
        author: "Michael Zhang",
        company: "Global Supply Co.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    faqs: [
      {
        question: "What types of data can you analyze?",
        answer:
          "We work with various data types, including structured data (databases, spreadsheets), unstructured data (text, social media), and semi-structured data (logs, XML/JSON). We can integrate multiple data sources to provide comprehensive insights.",
      },
      {
        question: "Do we need to have a data warehouse or specific tools already in place?",
        answer:
          "No, we can work with your existing infrastructure or recommend and help implement appropriate solutions based on your needs and budget. We're tool-agnostic and focus on delivering value regardless of your current data maturity.",
      },
      {
        question: "How do you ensure data privacy and security?",
        answer:
          "We adhere to strict data security protocols and comply with relevant regulations like GDPR and CCPA. We implement appropriate safeguards including data anonymization, encryption, and secure access controls to protect sensitive information.",
      },
      {
        question: "Can you help us build internal analytics capabilities?",
        answer:
          "Yes, we offer training and knowledge transfer to help your team develop analytics skills. We can also help you establish data governance frameworks and best practices to ensure sustainable analytics capabilities.",
      },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ctaText: "Ready to unlock the power of your data? Contact us today for a free data analytics consultation.",
  },
  {
    id: 4,
    title: "Custom Solutions",
    slug: "custom-solutions",
    shortDescription: "Tailored solutions designed to address your unique business challenges.",
    icon: "ShieldCheck",
    description: `Our custom solutions service is designed for businesses with unique challenges that don't fit neatly into standard service offerings. We take a holistic approach to understanding your specific needs and develop tailored strategies and implementations that address your distinct business requirements.

We believe that every business is unique, with its own set of challenges and opportunities. Our team brings together expertise from various disciplines to create integrated solutions that drive meaningful results for your specific situation.`,
    features: [
      {
        title: "Personalized Strategy Development",
        description: "Custom strategies designed specifically for your unique business challenges and objectives.",
      },
      {
        title: "Custom Software Solutions",
        description: "Bespoke software applications and digital tools tailored to your specific business processes.",
      },
      {
        title: "Integration Services",
        description: "Seamless integration of various systems and platforms to create a unified business ecosystem.",
      },
      {
        title: "Workflow Automation",
        description: "Custom automation solutions that streamline operations and reduce manual tasks.",
      },
      {
        title: "Dedicated Support & Maintenance",
        description: "Ongoing support and continuous improvement of your custom solutions.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Needs Assessment",
        description:
          "We conduct in-depth interviews and workshops to fully understand your unique challenges, requirements, and objectives.",
      },
      {
        step: 2,
        title: "Solution Design",
        description:
          "Our cross-functional team designs a comprehensive solution that addresses your specific needs, combining various services and approaches as needed.",
      },
      {
        step: 3,
        title: "Prototype & Validation",
        description:
          "We develop prototypes or pilot programs to validate the solution concept and gather feedback for refinement.",
      },
      {
        step: 4,
        title: "Implementation",
        description:
          "Our team executes the custom solution, working closely with your team to ensure smooth integration with your existing processes.",
      },
      {
        step: 5,
        title: "Evaluation & Iteration",
        description:
          "We continuously monitor the solution's performance, gathering feedback and making iterative improvements to optimize results.",
      },
    ],
    benefits: [
      "Solutions precisely tailored to your specific business needs",
      "Integration of multiple disciplines and approaches",
      "Flexibility to adapt as your requirements evolve",
      "Competitive advantage through unique capabilities",
      "Ownership of custom-developed assets and intellectual property",
      "Ongoing support from a team that understands your business",
    ],
    testimonials: [
      {
        quote:
          "They took the time to truly understand our unique business model before proposing solutions. The custom workflow system they developed has increased our team's productivity by over 60%.",
        author: "Thomas Anderson",
        company: "Specialized Industries Ltd.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        quote:
          "When off-the-shelf solutions couldn't meet our complex requirements, their team created a custom platform that perfectly aligned with our processes. It's been a game-changer for our business.",
        author: "Lisa Rodriguez",
        company: "Innovative Solutions Group",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    faqs: [
      {
        question: "How do you determine if we need a custom solution?",
        answer:
          "We start with a thorough assessment of your needs and evaluate whether existing standard solutions can meet those requirements. If we identify unique challenges or opportunities that would benefit from a tailored approach, we'll recommend a custom solution and explain the specific advantages it would provide.",
      },
      {
        question: "Are custom solutions more expensive than standard offerings?",
        answer:
          "While the initial investment for a custom solution may be higher than off-the-shelf alternatives, the long-term value often outweighs the cost. Custom solutions are designed to address your specific pain points and opportunities, potentially delivering greater ROI through improved efficiency, competitive advantage, or new revenue streams.",
      },
      {
        question: "How long does it take to develop and implement a custom solution?",
        answer:
          "Timelines vary significantly based on the complexity and scope of your needs. Simple solutions might be implemented in weeks, while more comprehensive systems could take several months. During our initial consultation, we'll provide a realistic timeline based on your specific requirements.",
      },
      {
        question: "Who owns the intellectual property for custom-developed solutions?",
        answer:
          "Typically, you retain ownership of any custom software or unique methodologies developed specifically for your business. We clearly outline intellectual property rights in our agreements to ensure transparency and protect your interests.",
      },
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ctaText: "Have a unique business challenge? Contact us today to discuss how our custom solutions can help.",
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServices(): Service[] {
  return services
}
