import { TrendingUp, Phone, Users } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ResultsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

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
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <motion.div 
          className="text-center mb-16 md:mb-10 xl:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proven Results That <span className="text-purple-600">Speak For Themselves</span>
          </h2>
          <p className="text-xl text-gray-600">
            See the transformative impact our clinic automation brings to healthcare practices worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-center">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 + index * 0.2 }}
              className={`${result.bgColor} text-gray-900 rounded-2xl p-6 md:p-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-300 md:static sticky top-24 z-[${10 + index * 10}] mx-auto lg:max-w-xs xl:max-w-sm w-full md:min-h-[320px]`}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${result.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                <result.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{result.title}</h3>
              <div className={`text-4xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent mb-3`}>
                {result.number}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">{result.description}</p>
              <div className="border-t border-gray-200 pt-3">
                <div className="text-sm md:text-lg font-semibold text-fuchsia-600 mb-1">{result.increase}</div>
                <div className="text-sm md:text-base text-gray-500">{result.subtext}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;