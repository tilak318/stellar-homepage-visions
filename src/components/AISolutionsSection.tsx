import { useState, useEffect } from 'react';
import { Bot, CheckCircle, Calendar } from 'lucide-react';

const AISolutionsSection = () => {
  const [currentOrb, setCurrentOrb] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOrb((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const solutions = [
    {
      icon: Bot,
      title: "AI Automation",
      description: "Streamline clinic workflows with intelligent automation",
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: CheckCircle,
      title: "AI Outreach Clients",
      description: "Intelligent lead generation and client engagement",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Calendar,
      title: "Send Automate Reminders",
      description: "Smart appointment reminders and follow-ups",
      color: "from-purple-500 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our AI Solutions
        </h2>
        <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
          Three powerful services to transform your clinic
        </p>

        {/* Animated Orb Background */}
        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 relative">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`absolute inset-0 rounded-full transition-all duration-1000 ${
                    currentOrb === index ? 'opacity-30 scale-100' : 'opacity-10 scale-75'
                  }`}
                  style={{
                    background: `conic-gradient(from ${index * 120}deg, #8b5cf6, #3b82f6, #8b5cf6)`,
                    filter: 'blur(20px)',
                  }}
                />
              ))}
              
              {/* Central Pulsing Core */}
              <div className="absolute inset-1/4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-50 animate-pulse" />
              <div className="absolute inset-1/3 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full opacity-70 animate-ping" />
              
              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full animate-bounce"
                  style={{
                    top: `${30 + (i * 10)}%`,
                    left: `${40 + (i * 5)}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                index === 1 ? 'bg-gradient-to-br from-blue-500 to-blue-700 text-white' : 
                'bg-gradient-to-br from-purple-500 to-purple-700 text-white'
              }`}
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6 mx-auto backdrop-blur-sm">
                <solution.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
              <p className="text-lg opacity-90 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;
