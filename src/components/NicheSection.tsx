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
    image: "https://images.unsplash.com/photo-1629424536968-965d4153316b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028269?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

const NicheSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-fuchsia-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All In <span className="text-purple-600">One Platform</span>
          </h2>
          <p className="text-xl text-gray-600">
            Where We Help To Automate This Business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {niches.map((niche, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{niche.title}</h3>
              <div className="space-y-3 mb-6">
                {niche.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="h-40 bg-gray-200 rounded-lg">
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