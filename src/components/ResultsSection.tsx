import { TrendingUp, Phone, Users } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const results = [
    {
      icon: Users,
      title: "Interested Leads",
      number: "1080",
      description: "Send Auto Reminders To Your Customers At Right Time",
      increase: "+42% increase",
      subtext: "More engaged potential patients today",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Phone,
      title: "Book Consultation",
      number: "360",
      description: "Send Auto Reminders To Your Customers At Right Time",
      increase: "+42% increase",
      subtext: "Higher consultation booking rate today",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: TrendingUp,
      title: "Clinic Visitors",
      number: "240",
      description: "Send Auto Reminders To Your Customers At Right Time",
      increase: "+30% increase",
      subtext: "More patients showing up to clinic today",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50"
    }
  ];

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section ref={ref} className="py-20 bg-white relative">
      <motion.div
        variants={variants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="absolute inset-0 bg-gradient-to-b from-gray-900 to-white"
      />
      <div className="container mx-auto max-w-7xl px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            animate={{ color: inView ? '#ffffff' : '#111827' }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Proven Results That <motion.span animate={{ color: inView ? '#60a5fa' : '#2563eb' }} transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}>Speak For Themselves</motion.span>
          </motion.h2>
          <motion.p
            animate={{ color: inView ? '#d1d5db' : '#4b5563' }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
            className="text-xl max-w-4xl mx-auto leading-relaxed"
          >
            See the transformative impact our clinic automation brings to healthcare practices worldwide
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className={`${result.bgColor} p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${result.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <result.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{result.title}</h3>
              
              <div className={`text-5xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent mb-4`}>
                {result.number}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{result.description}</p>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="text-sm font-semibold text-green-600 mb-1">{result.increase}</div>
                <div className="text-sm text-gray-500">{result.subtext}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
