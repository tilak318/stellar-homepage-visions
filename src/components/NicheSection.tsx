import { Check } from 'lucide-react';

const niches = [
  {
    title: "Botox & Skin Care",
    features: ["Smart Website + Auto Lead Gen", "Smart follow-ups & reminders", "Appointment scheduling", "Before/After Tracking", "Client Loyalty"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Clinics and Detist",
    features: ["Smart Website + Auto Lead Gens", "Automated Survey & Feedback", "Google/Yelp Review Requests", "Referrals Tracking", "AI Chatbot"],
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Gym & Health Couch",
    features: ["Smart Website + Auto Lead Gen", "Smart follow-ups & reminders", "Appointment scheduling", "Referral Tracking", "Client Loyalty"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Business Consultation",
    features: ["Smart Website + Auto Lead Gen", "Smart follow-ups & reminders", "Appointment scheduling", "Referral Tracking", "Client Loyalty"],
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "IT & SAAS Services",
    features: ["Smart Website + Auto Lead Gen", "Smart follow-ups & reminders", "Appointment scheduling", "Referral Tracking", "Client Loyalty"],
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Salons and Spa",
    features: ["Smart Website + Auto Lead Gen", "Smart follow-ups & reminders", "Appointment scheduling", "Referral Tracking", "Client Loyalty"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Real estate agents",
    features: ["Smart Website + Auto Lead Gen", "Smart follow-ups & reminders", "Appointment scheduling", "Referral Tracking", "Client Loyalty"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Therapists and Counselors",
    features: ["Smart Website + Auto Lead Gen", "Smart follow-ups & reminders", "Appointment scheduling", "Referral Tracking", "Client Loyalty"],
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
];

// Fixed random arrangement of colors
const randomColors = [
  'bg-cyan-200',
  'bg-emerald-200',
  'bg-rose-200',
  'bg-teal-100',
  'bg-orange-200',
  'bg-blue-100',
];

const NicheSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-screen-xl">
        <div className="text-center mb-16 md:mb-10 xl:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All In <span className="text-purple-600">One Platform</span>
          </h2>
          <p className="text-xl text-gray-600">
            Where We Help To Automate This Business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 justify-center">
          {niches.slice(0, 6).map((niche, index) => (
            <div
              key={index}
              className={`${cardColors[index]} text-gray-900 rounded-2xl p-6 md:p-4 shadow-lg transform hover:-translate-y-2 transition-transform duration-300 md:static sticky top-24 z-[${10 + index * 10}] mx-auto lg:max-w-xs xl:max-w-sm w-full`}
            >
              <h3 className="text-xl md:text-lg font-bold text-gray-900 mb-4 md:mb-2">{niche.title}</h3>
              <div className="space-y-3 md:space-y-2 mb-6 md:mb-3">
                {niche.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2 md:space-x-3 xl:space-x-4">
                    <Check className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 text-purple-500" />
                    <span className="text-gray-700 text-xs md:text-sm xl:text-base">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="h-40 md:h-28 bg-gray-200 rounded-lg">
                <img src={niche.image} alt={niche.title} className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NicheSection; 