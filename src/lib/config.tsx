import { Icons } from "@/components/icons";
import {
  BrainIcon,
  CodeIcon,
  GlobeIcon,
  PlugIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "EngineDock",
  description:
    "Simplify finance and banking integrations with a single, powerful API.",
  cta: "Get Started",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "EngineDock",
    "Banking Integration",
    "Financial API",
    "Workflow Automation",
    "AI-Powered Finance",
  ],
  links: {
    email: "support@enginedock.com",
    twitter: "https://twitter.com/codehagen",
    discord: "https://discord.gg/codehagen",
    github: "https://github.com/codehagen",
    instagram: "https://instagram.com/codehagen",
  },
  hero: {
    title: "EngineDock",
    description:
      "Build powerful financial automation with just a few lines of code. Connect to multiple providers, automate complex tasks, and unify data formats seamlessly",
    cta: "Get Started",
    ctaDescription: "Available for all major programming languages",
  },
  features: [
    {
      name: "Unlimited Bank Connections",
      description:
        "Effortlessly expand your market reach. Enable connections to multiple banking providers with a single click.",
      icon: <BrainIcon className="h-6 w-6" />,
    },
    {
      name: "One SDK, Minutes to Integrate",
      description:
        "Implement banking and financial integrations in minutes using the EngineDock SDK.",
      icon: <ZapIcon className="h-6 w-6" />,
    },
    {
      name: "Unified Financial Tools",
      description:
        "Simplify invoicing, time tracking, file reconciliation, data storage, and financial overviews—all in one intuitive interface.",
      icon: <PlugIcon className="h-6 w-6" />,
    },
    {
      name: "Your Financial Assistant",
      description:
        "Leverage AI agents to streamline decision-making and automate financial operations.",
      icon: <UsersIcon className="h-6 w-6" />,
    },
    {
      name: "One API for All",
      description:
        "Simplify banking and account service integrations with a single, unified API.",
      icon: <CodeIcon className="h-6 w-6" />,
    },
    {
      name: "Future-Ready Platform",
      description:
        "Scale effortlessly as we continue adding providers and enhancing capabilities.",
      icon: <GlobeIcon className="h-6 w-6" />,
    },
  ],
  pricing: [
    {
      name: "Free",
      price: { monthly: "$0", yearly: "$0" },
      frequency: { monthly: "month", yearly: "year" },
      description: "Perfect for startups and individual developers.",
      features: [
        "Up to 100 API calls per month",
        "2 banking provider connections",
        "Basic invoice processing",
        "Community support",
        "Public API access",
      ],
      cta: "Get Started",
    },
    {
      name: "Growth",
      price: { monthly: "$99", yearly: "$990" },
      frequency: { monthly: "month", yearly: "year" },
      description: "Ideal for growing businesses.",
      features: [
        "Up to 5,000 API calls per month",
        "10 banking provider connections",
        "Advanced AI automation",
        "Priority email support",
        "Advanced analytics",
        "Custom integrations",
      ],
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      price: { monthly: "Custom", yearly: "Custom" },
      frequency: { monthly: "month", yearly: "year" },
      description: "Tailored solutions for large organizations.",
      features: [
        "Unlimited API calls",
        "Unlimited banking connections",
        "Custom AI model development",
        "24/7 premium support",
        "On-premises deployment",
        "SLA guarantees",
      ],
      popular: true,
      cta: "Contact Sales",
    },
  ],
  footer: {
    socialLinks: [
      {
        icon: <Icons.github className="h-5 w-5" />,
        url: "#",
      },
      {
        icon: <Icons.twitter className="h-5 w-5" />,
        url: "#",
      },
    ],
    links: [
      { text: "Pricing", url: "#" },
      { text: "Contact", url: "#" },
    ],
    bottomText: "All rights reserved.",
    brandText: "EngineDock",
  },

  testimonials: [
    {
      id: 1,
      text: "EngineDock simplified our entire banking integration process. What used to take months now takes days to implement.",
      name: "Sarah Chen",
      company: "PayFlow Solutions",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 2,
      text: "The automated reconciliation feature has saved our accounting team countless hours. It's a game-changer for our daily operations.",
      name: "Michael Rodriguez",
      company: "AccuBooks",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 3,
      text: "Starting with the free tier allowed us to test the waters. The seamless scaling options made it easy to grow with our needs.",
      name: "Emma Thompson",
      company: "StartupPay",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 4,
      text: "The AI-powered anomaly detection has helped us prevent several fraudulent transactions. It's like having an extra security team.",
      name: "David Park",
      company: "SecureFinance",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 5,
      text: "We integrated EngineDock's invoice processing in our accounting software. Our clients love how fast we process payments now.",
      name: "Lisa Martinez",
      company: "InvoicePro",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 6,
      text: "The unified API approach means we only need to integrate once to connect with multiple banks. It's brilliant!",
      name: "James Wilson",
      company: "BankConnect",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 7,
      text: "Their free tier gave us everything we needed to launch our MVP. Scaling up was smooth as our customer base grew.",
      name: "Nina Patel",
      company: "FinStartup",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 8,
      text: "The real-time transaction monitoring has transformed how we handle our clients' accounts. It's incredibly powerful.",
      name: "Robert Chang",
      company: "WealthTech",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 9,
      text: "We switched from multiple banking APIs to EngineDock. The time and cost savings have been substantial. The support team is also helpful.",
      name: "Sophie Anderson",
      company: "PaymentFlow",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      id: 10,
      text: "The documentation is excellent, and their support team is always ready to help. Made our integration process smooth.",
      name: "Alex Kumar",
      company: "TechFin",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
