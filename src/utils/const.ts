import {
  Award,
  Brain,
  Building,
  Code,
  Cpu,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Rocket,
  Search,
  Shield,
  Star,
  Target,
  TrendingUp,
  X,
  Users,
  Zap,
} from "lucide-react";

/* ================== START: Constants ================== */
export const footerNavItems = [
  { name: "Home", id: "home", to: "/" },
  { name: "About Us", id: "about", to: "/" },
  // pages that live on separate routes have explicit `to` targets
  { name: "Services", id: "services", to: "/services" },
  { name: "Facts", id: "facts", to: "/#facts" },
  { name: "Projects", id: "projects", to: "/projects" },
  { name: "FAQs", id: "faqs", to: "/faq" },
  { name: "Our Team", id: "team", to: "/team" },
  { name: "Blog", id: "blog", to: "/blog" },
];
export const headerItems = [
  { name: "Home", id: "home", to: "/" },
  { name: "About", id: "about", to: "/#about" },
  { name: "Pages", id: "pages" }, // dropdown
  { name: "Blog", id: "blog" }, // dropdown
];
export const headerPagesMenu = [
  { name: "Services", to: "/services" },
  { name: "Projects", to: "/projects" },
  { name: "FAQ", to: "/faq" },
  { name: "Team", to: "/team" },
];

export const heroStats = [
  { value: "500+", label: "Projects Completed", icon: Target },
  { value: "99%", label: "Client Satisfaction", icon: Brain },
  { value: "24/7", label: "Support Available", icon: Cpu },
];

export const aboutFeatures = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our team consists of AI specialists, data scientists, and software engineers with years of experience in cutting-edge technology.",
  },
  {
    icon: Award,
    title: "Award-Winning Solutions",
    description:
      "Recognized globally for our innovative AI solutions and cutting-edge technology implementations across various industries.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "We've helped hundreds of businesses increase efficiency and revenue through AI automation and intelligent systems.",
  },
];

export const aboutAchievements = [
  {
    icon: Building,
    value: "500+",
    label: "Successful Projects",
    description: "AI solutions deployed globally",
  },
  {
    icon: Users,
    value: "98%",
    label: "Client Retention Rate",
    description: "Long-term partnerships built",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries Served",
    description: "Worldwide presence established",
  },
  {
    icon: Shield,
    value: "24/7",
    label: "Support Available",
    description: "Round-the-clock assistance",
  },
];

export const processSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consultation",
    description:
      "We start with a detailed discussion about your business needs, challenges, and AI objectives to create a tailored strategy.",
  },
  {
    number: "02",
    icon: Search,
    title: "Analysis",
    description:
      "Our experts analyze your data, processes, and infrastructure to identify the best AI solutions for your specific use case.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description:
      "We develop and customize AI models using cutting-edge technologies, ensuring seamless integration with your existing systems.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deployment",
    description:
      "After thorough testing, we deploy your AI solution and provide ongoing support to ensure optimal performance and continuous improvement.",
  },
];

// Used for fallback social links if no data is found in Sanity
export const socialLinks = [
  { icon: X, href: "#", label: "X" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@reactifyai.com", label: "Email" },
];

// Used for fallback facts if no data is found in Sanity
export const facts = [
  {
    icon: TrendingUp,
    value: "500+",
    label: "Projects Completed",
    description: "delivered AI solutions industries",
  },
  {
    icon: Users,
    value: "200+",
    label: "Happy Clients",
    description: "Businesses transformed through our AI solutions",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries Served",
    description: "Global reach with local expertise and support",
  },
  {
    icon: Award,
    value: "99%",
    label: "Success Rate",
    description: "Track record of successful AI implementations",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Client Rating",
    description: "Consistently high satisfaction scores",
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Support Available",
    description: "Round-the-clock technical assistance",
  },
];

// Used for fallback faqs if no data is found in Sanity
export const faqs = [
  {
    question: "What types of AI solutions do you offer?",
    answer:
      "We offer a comprehensive range of AI solutions including machine learning models, natural language processing, computer vision, chatbots, predictive analytics, automation systems, and custom AI applications tailored to your specific business needs.",
  },
  {
    question: "How long does it typically take to implement an AI solution?",
    answer:
      "Implementation timelines vary based on project complexity. Simple chatbots can be deployed in 2-4 weeks, while complex machine learning systems may take 3-6 months. We provide detailed timelines during our consultation phase and keep you updated throughout the development process.",
  },
  {
    question: "Do I need technical expertise to use your AI solutions?",
    answer:
      "No technical expertise is required. We design user-friendly interfaces and provide comprehensive training and documentation. Our solutions are built to be intuitive and accessible to non-technical users, with 24/7 support available whenever you need assistance.",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "We prioritize data security with end-to-end encryption, secure cloud infrastructure, and compliance with GDPR, CCPA, and other data protection regulations. We're ISO 27001 certified and implement best practices for data handling, storage, and processing.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across diverse industries including healthcare, finance, manufacturing, retail, logistics, education, and technology. Our team has domain expertise in various sectors and can adapt our AI solutions to meet industry-specific requirements and regulations.",
  },
  {
    question: "How do you measure the success of AI implementations?",
    answer:
      "We establish clear KPIs and success metrics before project initiation, including accuracy rates, efficiency improvements, cost savings, and user satisfaction. We provide regular performance reports and continuously optimize solutions based on real-world data and feedback.",
  },
];

// Used for fallback team members if no data is found in Sanity
export const team = [
  {
    name: "Sarah Chen",
    role: "CEO & AI Strategist",
    image: import.meta.env.PUBLIC_TEAM1_IMAGE,
    bio: "15+ years in AI research and business strategy",
    social: { linkedin: "#", x: "#", github: "#" },
  },
  {
    name: "Dr. Lou Gramm",
    role: "CTO & ML Lead",
    image: import.meta.env.PUBLIC_TEAM2_IMAGE,
    bio: "PhD in Computer Science, former Google AI researcher",
    social: { linkedin: "#", x: "#", github: "#" },
  },
  {
    name: "Emily Watson",
    role: "Data Science Director",
    image: import.meta.env.PUBLIC_TEAM3_IMAGE,
    bio: "Expert in predictive analytics and neural networks",
    social: { linkedin: "#", x: "#", github: "#" },
  },
  {
    name: "Alex Kim",
    role: "AI Engineering Manager",
    image: import.meta.env.PUBLIC_TEAM4_IMAGE,
    bio: "Full-stack AI developer with 10+ years experience",
    social: { linkedin: "#", x: "#", github: "#" },
  },
];

// Used for fallback contact info if no data is found in Sanity
export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@reactifyai.com",
    href: "mailto:hello@reactifyai.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
];
/* ================== END: Constants ================== */
