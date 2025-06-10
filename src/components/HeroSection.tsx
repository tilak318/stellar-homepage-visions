import { Button } from "@/components/ui/button";
import { FaGlobe, FaBullseye, FaRobot } from "react-icons/fa";

const FloatingIcon = ({ imgSrc, className, delay = 0, alt }) => (
  <div
    className={`absolute hidden md:block animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <img src={imgSrc} alt={alt} className="w-32 h-32 object-contain" />
  </div>
);

const HeroSection = () => {
  return (
    <div className="relative">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingIcon imgSrc="/homeicons/1.png" alt="Followup" className="top-1/2 left-[10%]" />
        <FloatingIcon imgSrc="/homeicons/2.png" alt="Website" className="bottom-16 left-[30%]" delay={1} />
        <FloatingIcon imgSrc="/homeicons/3.png" alt="Lead Gen" className="top-1/2 right-[10%]" delay={0.5} />
        <FloatingIcon imgSrc="/homeicons/4.png" alt="Outreach" className="bottom-16 right-[30%]" delay={1.5} />

        <div className="container mx-auto max-w-7xl px-8 text-center relative">
          <p className="text-xl font-semibold text-gray-700 mb-2">Get 24/7 Smart Website To</p>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight md:leading-[1.1]">
            Automate Your Booking<br />
            And <span className="bg-gradient-to-br from-blue-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">Maximize</span> Your Profit
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
            We automate the entire business journey from <span className="font-bold text-gray-800">lead generation</span> <br /> to <span className="font-bold text-gray-800">reminders</span> saving your clinic time, boosting revenue.
          </p>
          <div className="mt-8">
            <Button size="lg" className="text-lg px-8 py-6">Start Your Free Trial</Button>
          </div>
        </div>
      </section>
      {/* Reduced Size Funnel Section */}
      <section className="h-screen w-full bg-white flex items-center justify-center">
        <div className="flex flex-col items-center w-[280px]">
          {/* Funnel Mouth (Ellipse) with Icon */}
          <div className="relative w-[220px] h-[50px] z-10">
            <div className="absolute left-0 top-0 w-full h-full rounded-full bg-gradient-to-b from-blue-500 to-purple-500 shadow-2xl" style={{boxShadow:'0 8px 20px 0 #7c3aed55'}}></div>
            <div className="absolute left-0 top-0 w-full h-full rounded-full" style={{boxShadow:'inset 0 10px 24px 0 #fff8, inset 0 -8px 16px 0 #0002'}}></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-white to-purple-200 rounded-xl w-10 h-10 flex items-center justify-center shadow-lg border-4 border-white">
              <FaGlobe className="text-blue-500 text-xl" />
            </div>
          </div>
          {/* Top Funnel Section */}
          <div className="w-[260px] h-[55px] -mt-4 relative z-0" style={{clipPath:'polygon(7% 0, 93% 0, 100% 100%, 0% 100%)', background:'linear-gradient(180deg, #6D28D9 0%, #7C3AED 100%)', boxShadow:'0 8px 20px 0 #7c3aed33'}}>
            <div className="flex flex-col items-center justify-center h-full text-white font-bold text-lg drop-shadow-md">
              Visitors Land<br/>on Website
            </div>
          </div>
          {/* Middle Funnel Section */}
          <div className="w-[200px] h-[40px] -mt-3 relative z-0" style={{clipPath:'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)', background:'linear-gradient(180deg, #8B5CF6 0%, #A78BFA 100%)', boxShadow:'0 6px 16px 0 #a78bfa33'}}>
            <div className="flex flex-col items-center justify-center h-full text-white font-bold text-base drop-shadow-md">
              <span className="flex items-center gap-2"><FaBullseye className="text-lg" /> Leads Captured</span>
            </div>
          </div>
          {/* Lower Funnel Section */}
          <div className="w-[140px] h-[30px] -mt-2 relative z-0" style={{clipPath:'polygon(13% 0, 87% 0, 100% 100%, 0% 100%)', background:'linear-gradient(180deg, #C4B5FD 0%, #DDD6FE 100%)', boxShadow:'0 4px 12px 0 #c4b5fd33'}}>
            <div className="flex flex-col items-center justify-center h-full text-white font-bold text-sm drop-shadow-md">
              <span className="flex items-center gap-2"><FaRobot className="text-base" /> Auto Outreach</span>
            </div>
          </div>
          {/* Confirmed Rectangle */}
          <div className="w-[80px] h-8 bg-gray-100 rounded-b-xl flex items-center justify-center font-semibold text-gray-700 text-sm -mt-1 shadow-lg">
            Confirmed
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
