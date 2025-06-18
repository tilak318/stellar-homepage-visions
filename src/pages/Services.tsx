import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import { Check, Sparkles, Users, Calendar, Star, MessageSquare, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: "Botox & Skin Care",
    description: "Comprehensive automation solutions for aesthetic clinics and skincare practices.",
    icon: <Sparkles className="w-8 h-8 text-purple-600" />,
    features: [
      "Smart Website + Auto Lead Gen",
      "Smart follow-ups & reminders", 
      "Appointment scheduling",
      "Before/After Tracking",
      "Client Loyalty"
    ],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Clinics and Dentist",
    description: "Complete automation platform for medical clinics and dental practices.",
    icon: <Shield className="w-8 h-8 text-purple-600" />,
    features: [
      "Smart Website + Auto Lead Gen",
      "Automated Survey & Feedback",
      "Google/Yelp Review Requests",
      "Referrals Tracking",
      "AI Chatbot"
    ],
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Gym & Health Coach",
    description: "Fitness and wellness business automation for trainers and health coaches.",
    icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
    features: [
      "Smart Website + Auto Lead Gen",
      "Smart follow-ups & reminders",
      "Appointment scheduling",
      "Referral Tracking",
      "Client Loyalty"
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Business Consultation",
    description: "Professional consulting services automation and client management.",
    icon: <Users className="w-8 h-8 text-purple-600" />,
    features: [
      "Smart Website + Auto Lead Gen",
      "Smart follow-ups & reminders",
      "Appointment scheduling",
      "Referral Tracking",
      "Client Loyalty"
    ],
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "IT & SAAS Services",
    description: "Technology service automation for IT companies and software providers.",
    icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
    features: [
      "Smart Website + Auto Lead Gen",
      "Smart follow-ups & reminders",
      "Appointment scheduling",
      "Referral Tracking",
      "Client Loyalty"
    ],
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Salons and Spa",
    description: "Beauty and wellness business automation for salons and spa services.",
    icon: <Star className="w-8 h-8 text-purple-600" />,
    features: [
      "Smart Website + Auto Lead Gen",
      "Smart follow-ups & reminders",
      "Appointment scheduling",
      "Referral Tracking",
      "Client Loyalty"
    ],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Real Estate Agents",
    description: "Property business automation for real estate professionals and agencies.",
    icon: <Calendar className="w-8 h-8 text-purple-600" />,
    features: [
      "Smart Website + Auto Lead Gen",
      "Smart follow-ups & reminders",
      "Appointment scheduling",
      "Referral Tracking",
      "Client Loyalty"
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Therapists and Counselors",
    description: "Mental health practice automation for therapists and counseling services.",
    icon: <Users className="w-8 h-8 text-purple-600" />,
    features: [
      "Smart Website + Auto Lead Gen",
      "Smart follow-ups & reminders",
      "Appointment scheduling",
      "Referral Tracking",
      "Client Loyalty"
    ],
    image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const cardColors = [
  'bg-purple-100',
  'bg-purple-200',
  'bg-purple-100',
  'bg-purple-200',
  'bg-purple-100',
  'bg-purple-200',
  'bg-purple-100',
  'bg-purple-200',
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <div id="header-sentinel" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', pointerEvents: 'none' }}></div>
      <AnimatedGradientBackground />
      <Header />
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto max-w-7xl px-6 mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              All In <span className="text-purple-600">One Platform</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Where We Help To Automate This Business - Comprehensive automation solutions for various industries and niches.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Explore Our Services
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-center">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${cardColors[index]} rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-[380px] max-w-sm flex flex-col mx-auto`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{service.title}</h3>
                <div className="space-y-3 mb-4 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-purple-500" />
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="h-24 bg-gray-200 rounded-lg overflow-hidden mt-auto">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto max-w-7xl px-6 mt-20">
          <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of businesses already using our platform to streamline operations and boost growth.
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

export default Services; 