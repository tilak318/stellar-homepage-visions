import { Button } from "@/components/ui/button";
import { FaGlobe, FaBullseye, FaRobot } from "react-icons/fa";
import ThreeLevelPyramid from "./ThreeLevelPyramid";
import React, { useRef, useEffect, useState } from "react";

const FloatingIcon = ({ imgSrc, className, delay = 0, alt }) => (
  <div
    className={`absolute block md:animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <img src={imgSrc} alt={alt} className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain" />
  </div>
);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      // Calculate progress through the section
      const start = sectionTop - windowHeight;
      const end = sectionTop + sectionHeight;
      let progress = (scrollY - start) / (end - start);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate animation for each bar based on scroll progress
  const getBarStyle = (index) => {
    const shift = 0.08; // 8% earlier for first two bars
    let start, end;
    if (index === 2) {
      // Make the third bar animate even faster
      start = 0.65;
      end = 0.75;
    } else {
      start = Math.max(0, index * (1 / 3) - shift);
      end = Math.min(1, (index + 1) * (1 / 3) + shift);
    }
    const localProgress = Math.max(0, Math.min(1, (scrollProgress - start) / (end - start)));
    return {
      opacity: localProgress,
      transform: `scaleX(${localProgress})`,
      transition: 'opacity 0.3s, transform 0.3s',
      transformOrigin: 'center',
    };
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-100 via-fuchsia-50 to-blue-50">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto max-w-7xl px-8 text-center relative z-10">
          <p className="text-xl font-semibold text-gray-700 mb-2">Get 24/7 Smart Website To</p>
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight md:leading-[1.1]">
            <span className="hidden md:inline">
              Automate Your Booking<br />
              And <span className="bg-gradient-to-br from-blue-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">Maximize</span> Your Profit
            </span>
            <span className="md:hidden">
              Automate Your Business<br />
              <span className="bg-gradient-to-br from-blue-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">Maximize Growth</span>
            </span>
          </h1>
          <p className="hidden md:block text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
            We automate the entire business journey from <span className="font-bold text-gray-800">lead generation</span> <br /> to <span className="font-bold text-gray-800">reminders</span> saving your clinic time, boosting revenue.
          </p>
          <div className="mt-8">
            <Button size="lg" className="text-lg px-8 py-6">Start Your Free Trial</Button>
          </div>
        </div>

        {/* Icons positioned after content */}
        <div className="absolute inset-0 z-0">
          <FloatingIcon imgSrc="/homeicons/1.png" alt="Followup" className="top-[60%] md:top-1/2 left-[5%] md:left-[10%]" />
          <FloatingIcon imgSrc="/homeicons/2.png" alt="Website" className="bottom-16 left-[20%] md:left-[30%]" delay={1} />
          <FloatingIcon imgSrc="/homeicons/3.png" alt="Lead Gen" className="top-[60%] md:top-1/2 right-[5%] md:right-[10%]" delay={0.5} />
          <FloatingIcon imgSrc="/homeicons/4.png" alt="Outreach" className="bottom-16 right-[20%] md:right-[30%]" delay={1.5} />
        </div>
      </section>
      {/* Empty Screen Section */}
      <section ref={sectionRef} className="relative w-full min-h-[400vh] flex flex-col items-center justify-start">
        {/* Sticky bar container for animation */}
        <div
          className={`sticky top-0 flex flex-col items-center justify-center w-full h-screen pointer-events-none`}
          style={{ zIndex: 30 }}
        >
          <div className="w-full max-w-md flex flex-col gap-4 pointer-events-auto items-center">
            <div className="h-14 flex items-center justify-center rounded-xl text-white text-lg font-bold shadow-lg bg-gradient-to-r from-blue-600 via-fuchsia-500 to-purple-600 w-[420px] md:w-[420px] sm:w-[320px] xs:w-[220px] max-w-full"
              style={getBarStyle(0)}>
              AI Automation
            </div>
            <div className="h-14 flex items-center justify-center rounded-xl text-white text-lg font-bold shadow-lg bg-gradient-to-r from-fuchsia-500 via-purple-500 to-blue-600 w-[320px] md:w-[320px] sm:w-[220px] xs:w-[160px] max-w-full"
              style={getBarStyle(1)}>
              AI Outreach Clients
            </div>
            <div className="h-14 flex items-center justify-center rounded-xl text-white text-lg font-bold shadow-lg bg-gradient-to-r from-purple-600 via-blue-500 to-fuchsia-500 w-[220px] md:w-[220px] sm:w-[140px] xs:w-[100px] max-w-full"
              style={getBarStyle(2)}>
              Send Automated Reminders
            </div>
          </div>
        </div>
        {/* Spacer to ensure sticky stays until third bar is fully visible */}
        <div style={{ height: '100vh' }} />
      </section>
    </div>
  );
};

export default HeroSection;
