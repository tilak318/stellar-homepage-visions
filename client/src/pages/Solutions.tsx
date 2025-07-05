import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import { Zap, Users, Send, Shield, BarChart, Clock, MessageSquare, Settings, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const solutions = [
  {
    title: "AI-Powered Automation",
    description: "Streamline your operations with intelligent automation that learns and adapts to your business needs.",
    icon: <Zap className="w-8 h-8 text-purple-600" />,
    features: [
      "Smart workflow automation",
      "Customizable automation rules",
      "Real-time process optimization",
      "Automated task scheduling"
    ]
  },
  {
    title: "Client Management",
    description: "Build stronger relationships with your clients through personalized engagement and automated follow-ups.",
    icon: <Users className="w-8 h-8 text-purple-600" />,
    features: [
      "Client profile management",
      "Automated follow-up system",
      "Client feedback collection",
      "Loyalty program integration"
    ]
  },
  {
    title: "Smart Communication",
    description: "Enhance your communication with AI-driven messaging and automated response systems.",
    icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
    features: [
      "AI chatbot integration",
      "Multi-channel messaging",
      "Automated response templates",
      "Communication analytics"
    ]
  },
  {
    title: "Analytics & Insights",
    description: "Make data-driven decisions with comprehensive analytics and real-time insights.",
    icon: <BarChart className="w-8 h-8 text-purple-600" />,
    features: [
      "Real-time performance metrics",
      "Custom reporting dashboards",
      "Predictive analytics",
      "Business intelligence tools"
    ]
  },
  {
    title: "Security & Compliance",
    description: "Keep your business secure and compliant with enterprise-grade security features.",
    icon: <Shield className="w-8 h-8 text-purple-600" />,
    features: [
      "End-to-end encryption",
      "Compliance monitoring",
      "Data protection tools",
      "Security analytics"
    ]
  },
  {
    title: "Time Management",
    description: "Optimize your schedule and boost productivity with smart time management tools.",
    icon: <Clock className="w-8 h-8 text-purple-600" />,
    features: [
      "Smart scheduling system",
      "Resource optimization",
      "Time tracking analytics",
      "Automated reminders"
    ]
  }
];

const cardColors = [
  'bg-purple-100',
  'bg-purple-200',
  'bg-purple-100',
  'bg-purple-200',
  'bg-purple-100',
  'bg-purple-200',
];

const Solutions = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>AI Solutions for Business Growth | TryzenIQ</title>
        <meta name="description" content="Discover AI solutions for business growth, automation, and efficiency with TryzenIQ." />
      </Helmet>
      <div id="header-sentinel" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', pointerEvents: 'none' }}></div>
      <AnimatedGradientBackground />
      <Header />
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto max-w-7xl px-6 mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              Transform Your Business with <span className="text-purple-600">Smart Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our comprehensive suite of AI-powered tools designed to streamline your operations, 
              enhance client relationships, and drive growth.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700">
              Start Your Journey
            </Button>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`${cardColors[index]} hover:bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-sm flex flex-col mx-auto`}
              >
                <div className="flex items-center justify-center mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{solution.title}</h3>
                <p className="text-gray-600 mb-4 text-center">{solution.description}</p>
                <div className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto max-w-7xl px-6 mt-20">
          <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of businesses already using our solutions to drive growth and efficiency.
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
              Get Started Today
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
