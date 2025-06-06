import { TrendingUp, Phone, Users } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

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

  const leftPaneVariants = {
    hidden: { x: 0 },
    visible: { x: '-100%' },
  };

  const rightPaneVariants = {
    hidden: { x: 0 },
    visible: { x: '100%' },
  };

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      <motion.div
        variants={leftPaneVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white to-black z-20"
      />
      <motion.div
        variants={rightPaneVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-black to-white z-20"
      />

      <div className="container mx-auto max-w-7xl px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proven Results That <span className="text-blue-600">Speak For Themselves</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See the transformative impact our clinic automation brings to healthcare practices worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 + index * 0.2 }}
            >
              <div
                className={`${result.bgColor} p-8 rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${result.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg flex-shrink-0`}>
                  <result.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4">{result.title}</h3>
                
                <div className={`text-5xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent mb-4`}>
                  {result.number}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{result.description}</p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm font-semibold text-green-600 mb-1">{result.increase}</div>
                  <div className="text-sm text-gray-500">{result.subtext}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
