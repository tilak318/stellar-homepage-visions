import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';
import { Button } from '@/components/ui/button';
import { 
  Zap, 
  Users, 
  Target, 
  MessageSquare, 
  BarChart, 
  Calendar,
  Shield,
  Rocket
} from 'lucide-react';

const stats = [
  { number: "500+", label: "Active Clients" },
  { number: "95%", label: "Client Retention" },
  { number: "24/7", label: "Support" },
  { number: "10k+", label: "Automated Tasks" }
];

const features = [
  {
    icon: <Zap className="w-8 h-8 text-purple-600" />,
    title: "Complete Automation",
    description: "From appointment booking to follow-ups, we automate your entire business workflow, saving you time and reducing errors."
  },
  {
    icon: <Target className="w-8 h-8 text-purple-600" />,
    title: "Smart Lead Generation",
    description: "Our AI-powered system identifies and qualifies potential clients, ensuring you focus on high-value prospects."
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
    title: "Automated Marketing",
    description: "Engage your audience with personalized marketing campaigns that run automatically, keeping your brand top of mind."
  },
  {
    icon: <Calendar className="w-8 h-8 text-purple-600" />,
    title: "Intelligent Booking",
    description: "Smart scheduling system that optimizes your calendar, reduces no-shows, and maximizes your revenue."
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <AnimatedGradientBackground />
      <Header />
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <div className="container mx-auto px-6 mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The One-Stop Solution for <span className="text-purple-600">Healthcare & Beauty Entrepreneurs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We empower physiotherapy clinics, botox centers, and clinical product businesses with 
              comprehensive automation solutions that drive growth and maximize profits.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Transform Your Business
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-6 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="container mx-auto px-6 mb-20">
          <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose Our Automation Solution?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Rocket className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Startup Friendly</h3>
                <p className="text-white/90">Perfect for new entrepreneurs launching their healthcare or beauty business</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Compliance Ready</h3>
                <p className="text-white/90">Built-in compliance features for healthcare and beauty industry standards</p>
              </div>
              <div className="text-center">
                <BarChart className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Profit Focused</h3>
                <p className="text-white/90">Tools designed to maximize your revenue and business growth</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Automate Your Success?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of successful healthcare and beauty entrepreneurs who have transformed their businesses with our automation solutions.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started Today
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
