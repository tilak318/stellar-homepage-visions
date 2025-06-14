import { TrendingUp, Phone, Users } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const results = [
    {
      icon: Users,
      title: "Interested Leads",
      number: "1080",
      description: "Send Auto Reminders To Your Customers At Right Time",
      increase: "+42% increase",
      subtext: "More engaged potential patients today",
      color: "from-purple-400 to-fuchsia-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Phone,
      title: "Book Consultation",
      number: "360",
      description: "Send Auto Reminders To Your Customers At Right Time",
      increase: "+42% increase",
      subtext: "Higher consultation booking rate today",
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: TrendingUp,
      title: "Clinic Visitors",
      number: "240",
      description: "Send Auto Reminders To Your Customers At Right Time",
      increase: "+30% increase",
      subtext: "More patients showing up to clinic today",
      color: "from-fuchsia-500 to-purple-400",
      bgColor: "bg-fuchsia-50"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white relative">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-purple-100 via-fuchsia-50 to-white"
        initial={isMobile ? false : { opacity: 0 }}
        animate={isMobile ? false : { opacity: inView ? 1 : 0 }}
        transition={isMobile ? undefined : { duration: 1.5, ease: 'easeOut' }}
      />
      <div className="container mx-auto max-w-7xl px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={isMobile ? false : { opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={isMobile ? undefined : { duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proven Results That <span className="text-purple-600">Speak For Themselves</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See the transformative impact our clinic automation brings to healthcare practices worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={isMobile ? false : (typeof window !== 'undefined' && window.innerWidth < 768 ? false : { opacity: 0, y: 20 })}
              animate={isMobile ? false : (typeof window !== 'undefined' && window.innerWidth < 768 ? false : { opacity: inView ? 1 : 0, y: inView ? 0 : 20 })}
              transition={isMobile ? undefined : (typeof window !== 'undefined' && window.innerWidth < 768 ? undefined : { duration: 0.6, ease: 'easeOut', delay: 0.4 + index * 0.2 })}
              className={
                index === 0
                  ? 'md:static sticky top-24 z-10'
                  : index === 1
                  ? 'md:static sticky top-24 z-20'
                  : 'md:static sticky top-24 z-30'
              }
            >
              <div
                className={`${result.bgColor} p-4 md:p-8 rounded-2xl md:rounded-3xl hover:shadow-xl shadow-lg border border-gray-200 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col`}
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${result.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg flex-shrink-0`}>
                  <result.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">{result.title}</h3>
                
                <div className={`text-3xl md:text-5xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent mb-2 md:mb-4`}>
                  {result.number}
                </div>
                
                <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed flex-grow text-sm md:text-base">{result.description}</p>
                
                <div className="border-t border-gray-200 pt-3 md:pt-4">
                  <div className="text-xs md:text-sm font-semibold text-fuchsia-600 mb-1">{result.increase}</div>
                  <div className="text-xs md:text-sm text-gray-500">{result.subtext}</div>
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
