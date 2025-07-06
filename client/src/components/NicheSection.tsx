import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const niches = [
  {
    title: "Insurance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/services/insurance"
  },
  {
    title: "Botox & Skin Care",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/services/botox-skin-care"
  },
  {
    title: "Clinics and Dentist",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/services/clinics-dentist"
  },
  {
    title: "Gym & Health Coach",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/services/gym-health-coach"
  },
  {
    title: "Business Consultation",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/services/business-consultation"
  },
  {
    title: "IT & SAAS Services",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/services/it-saas"
  },
  {
    title: "Salons and Spa",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/services/salons-spa"
  },
  {
    title: "Real Estate Agents",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/services/real-estate-agents"
  },
  {
    title: "Therapists and Counselors",
    image: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/services/therapists-counselors"
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
  'bg-purple-100',
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
  const navigate = useNavigate();

  const handleNicheClick = (route: string) => {
    navigate(route);
  };

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
          {niches.map((niche, index) => (
            <div
              key={index}
              className={"bg-[#f6f3ff] border-2 border-[#b9a6f6] rounded-2xl p-6 md:p-4 shadow-lg hover:shadow-xl hover:bg-purple-200 hover:border-purple-400 transition-all duration-300 ease-in-out md:static sticky top-24 mx-auto lg:max-w-xs xl:max-w-sm w-full group"}
            >
              <h3 className="text-xl md:text-lg font-bold text-gray-900 group-hover:text-purple-800 mb-4 text-center transition-all duration-300 ease-in-out">{niche.title}</h3>
              <div className="h-48 md:h-40 bg-gray-200 rounded-lg mb-4">
                <img src={niche.image} alt={niche.title} className="w-full h-full object-cover rounded-lg" />
              </div>
              <Button 
                onClick={() => handleNicheClick(niche.route)}
                className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NicheSection; 