import { Button } from "@/components/ui/button";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingIcon imgSrc="/homeicons/1.png" alt="Followup" className="top-1/2 left-[10%]" />
      <FloatingIcon imgSrc="/homeicons/2.png" alt="Website" className="bottom-16 left-[30%]" delay={1} />
      <FloatingIcon imgSrc="/homeicons/3.png" alt="Lead Gen" className="top-1/2 right-[10%]" delay={0.5} />
      <FloatingIcon imgSrc="/homeicons/4.png" alt="Outreach" className="bottom-16 right-[30%]" delay={1.5} />

      <div className="container mx-auto max-w-7xl px-8 text-center relative">
        <p className="text-xl font-semibold text-gray-700 mb-2">Get 24/7 Smart Website To</p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
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
  );
};

export default HeroSection;
