import { Button } from "@/components/ui/button";
import { Calendar, Clock, MessageSquare, Users } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, className, delay = 0 }) => (
  <div 
    className={`absolute hidden md:block animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-16 h-16 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-100 via-purple-100 to-purple-200 min-h-screen flex items-center justify-center overflow-hidden">
      
      <FloatingIcon icon={Calendar} className="top-2/3 left-[15%]" />
      <FloatingIcon icon={MessageSquare} className="bottom-16 left-[30%]" delay={1} />
      <FloatingIcon icon={Clock} className="top-2/3 right-[15%]" delay={0.5} />
      <FloatingIcon icon={Users} className="bottom-16 right-[30%]" delay={1.5} />

      <div className="container mx-auto max-w-7xl px-8 text-center relative">
        <p className="text-lg font-semibold text-gray-700 mb-2">Get 24/7 Smart Website To</p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Automate Your Booking
          <br />
          And Maximize Your Profit
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
          We automate the entire business journey from <span className="font-bold text-gray-800">lead generation</span> to <span className="font-bold text-gray-800">reminders</span> saving your clinic time, boosting revenue.
        </p>
        <div className="mt-8">
          <Button size="lg" className="text-lg px-8 py-6">Start Your Free Trial</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
