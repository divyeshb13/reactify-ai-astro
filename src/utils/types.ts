/* ================== START: Types ================== */
export interface IContactForm {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export type FAQCard1Props = {
  question: string;
  answer: string;
  index: number;
  className?: string;
};

export type AboutCard1Props = {
  icon: React.ElementType;
  title: string;
  description: string;
  animationDelay?: number;
  className?: string;
};

export type AboutCard2Props = {
  icon: React.ElementType;
  value: string | number;
  label: string;
  description?: string;
  onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
  onTouchMove?: React.TouchEventHandler<HTMLDivElement>;
  className?: string;
};

export type BlogCardProps = {
  id: string | number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime?: string;
  index: number;
  className?: string;
};

export type CTACardProps = {
  title: string;
  subtitle?: string;
  actions?: string;
  delay?: number;
  className?: string;
  to?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export type HeroCardProps = {
  icon: React.ElementType;
  value: string | number;
  label: string;
  index: number;
  classname?: string;
};

export type ProcessCardProps = {
  icon: React.ElementType;
  value?: string | number;
  label?: string;
  index: number;
  className?: string;
  handleMouseMove?: React.MouseEventHandler<HTMLDivElement>;
  handleTouchMove?: React.TouchEventHandler<HTMLDivElement>;
  processSteps: {
    icon: React.ElementType;
    title: string;
    description: string;
  }[];
  title: string;
  description: string;
};

export type ProjectCardProps = {
  id: string | number;
  image: string;
  title: string;
  description: string;
  category?: string;
  technologies: string[];
  results?: string;
  animationDelay?: number;
  className?: string;
};

export type ServiceCardProps = {
  id?: string | number;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  animationDelay?: number;
  className?: string;
};

export type TeamCardProps = {
  image: string;
  name: string;
  role: string;
  bio: string;
  index: number;
  classname?: string;
};

export type FactsCardProps = {
  icon: React.ElementType;
  value: string | number;
  label: string;
  description: string;
  index: number;
  classname?: string;
};

export type CardGradientBgProps = {
  className?: string;
  hover?: boolean;
  gradientClass?: string;
  gridOpacity?: number;
  icon?: React.ElementType;
  iconClass?: string;
  iconScale?: number;
  children?: React.ReactNode;
};

/* ================== START: Sanity Interfaces ================== */
export interface IService {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  overview?: string;
  useCases?: string[];
  pricing?: {
    startingAt?: string;
    typicalRange?: string;
    note?: string;
  };
  faqs?: { q: string; a: string }[];
}

export interface IFact {
  icon: any;
  value: string | number;
  label: string;
  description: string;
}

export interface ISocialLink {
  icon: any;
  href: string;
  label: string;
}

export interface IProject {
  id: string;
  title: string;
  description: string;
  category?: string;
  image: any;
  technologies: string[];
  results?: string;
  type?: string;
  detail?: {
    results?: string[];
    challenge?: string;
    solution?: string;
  };
  summaryResult?: string;
}

export interface IBlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  _createdAt: string;
  category: string;
  mainImage: any;
  image: any;
  readTime: string;
}

export interface IBlogPostDetail {
  _createdAt: string;
  title: string;
  category: string;
  author: string;
  readTime?: string;
  mainImage?: any;
  image?: any;
  excerpt?: string;
  content?: string[];
  detail?: string;
  extra?: {
    tags?: string[];
    sources?: { url: string; label: string }[];
    authorInfo?: string;
    insight?: string;
    relatedTopics?: string[];
    editorsPick?: string[];
  };
}

export interface ITeamMember {
  name: string;
  role: string;
  image: any;
  bio: string;
  social?: {
    linkedin?: string;
    x?: string;
    github?: string;
  };
}

export interface IFAQ {
  question: string;
  answer: string;
}

export interface IContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
}
