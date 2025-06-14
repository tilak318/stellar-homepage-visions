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
    const shift = 0.12;
    let start, end;
    if (index === 2) {
      // Adjust timing for third bar to appear later and stay longer
      start = 0.7;
      end = 0.9;
    } else {
      start = Math.max(0, index * (1 / 3) - shift);
      end = Math.min(1, (index + 1) * (1 / 3) + shift);
    }
    const localProgress = Math.max(0, Math.min(1, (scrollProgress - start) / (end - start)));
    return {
      opacity: localProgress,
      transform: `scaleX(${localProgress})`,
      transition: 'opacity 0.2s, transform 0.2s',
      transformOrigin: 'center',
    };
  };

  const getCardAnim = (index) => {
    const shift = 0.12;
    let start, end;
    if (index === 2) {
      // Match timing with bar style
      start = 0.7;
      end = 0.9;
    } else {
      start = Math.max(0, index * (1 / 3) - shift);
      end = Math.min(1, (index + 1) * (1 / 3) + shift);
    }
    const localProgress = Math.max(0, Math.min(1, (scrollProgress - start) / (end - start)));
    return {
      opacity: localProgress,
      translateY: 30 * (1 - localProgress),
    };
  };

  const getStepAnim = (index) => {
    const shift = 0.12;
    let start, end;
    if (index === 2) {
      // Match timing with other animations
      start = 0.7;
      end = 0.9;
    } else {
      start = Math.max(0, index * (1 / 3) - shift);
      end = Math.min(1, (index + 1) * (1 / 3) + shift);
    }
    let localProgress = Math.max(0, Math.min(1, (scrollProgress - start) / (end - start)));
    let scale = 0.8 + 0.4 * localProgress;
    if (localProgress > 0.85) {
      scale = 1.05 - 0.05 * ((localProgress - 0.85) / 0.15);
      if (localProgress >= 1) scale = 1;
    }
    let rotate = -8 * (1 - localProgress);
    let translateY = 60 * (1 - localProgress);
    return {
      opacity: localProgress,
      translateY,
      scale,
      rotate,
    };
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-100 via-fuchsia-50 to-blue-50">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto max-w-7xl px-8 text-center relative z-10">
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

        {/* Icons positioned after content */}
        <div className="absolute inset-0 z-0">
          <FloatingIcon imgSrc="/homeicons/1.png" alt="Followup" className="top-[60%] md:top-1/2 left-[5%] md:left-[10%]" />
          <FloatingIcon imgSrc="/homeicons/2.png" alt="Website" className="bottom-16 left-[20%] md:left-[30%]" delay={1} />
          <FloatingIcon imgSrc="/homeicons/3.png" alt="Lead Gen" className="top-[60%] md:top-1/2 right-[5%] md:right-[10%]" delay={0.5} />
          <FloatingIcon imgSrc="/homeicons/4.png" alt="Outreach" className="bottom-16 right-[20%] md:right-[30%]" delay={1.5} />
        </div>
      </section>
      {/* Empty Screen Section */}
      <section ref={sectionRef} className="relative w-full min-h-[350vh] flex flex-col items-center justify-start">
        {/* Sticky bar container for animation */}
        <div
          className={`sticky top-0 flex flex-col items-center justify-center w-full h-screen pointer-events-none`}
          style={{ zIndex: 30 }}
        >
          <div className="w-full h-full flex flex-col justify-center items-center gap-8 pointer-events-auto">
            {/* First step: full width, bold gradient, huge text */}
            <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl h-[16vh] min-h-[72px] sm:h-[18vh] sm:min-h-[90px] md:h-[20vh] md:min-h-[100px] flex items-center justify-center rounded-3xl shadow-2xl bg-gradient-to-r from-blue-700 via-cyan-400 to-blue-700 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center px-2 sm:px-6 md:px-8 transition-all duration-500"
              style={{
                opacity: getStepAnim(0).opacity,
                transform: `translateY(${getStepAnim(0).translateY}px) scale(${getStepAnim(0).scale}) rotate(${getStepAnim(0).rotate}deg)`,
                filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.18))',
              }}>
              AI Automation
            </div>
            {/* Second step: full width, bold gradient, huge text */}
            <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl h-[16vh] min-h-[72px] sm:h-[18vh] sm:min-h-[90px] md:h-[20vh] md:min-h-[100px] flex items-center justify-center rounded-3xl shadow-2xl bg-gradient-to-r from-fuchsia-600 via-purple-400 to-fuchsia-600 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center px-2 sm:px-6 md:px-8 transition-all duration-500"
              style={{
                opacity: getStepAnim(1).opacity,
                transform: `translateY(${getStepAnim(1).translateY}px) scale(${getStepAnim(1).scale}) rotate(${getStepAnim(1).rotate}deg)`,
                filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.18))',
              }}>
              AI Outreach Clients
            </div>
            {/* Third step: full width, bold gradient, huge text */}
            <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl h-[16vh] min-h-[72px] sm:h-[18vh] sm:min-h-[90px] md:h-[20vh] md:min-h-[100px] flex items-center justify-center rounded-3xl shadow-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center px-2 sm:px-6 md:px-8 transition-all duration-500"
              style={{
                opacity: getStepAnim(2).opacity,
                transform: `translateY(${getStepAnim(2).translateY}px) scale(${getStepAnim(2).scale}) rotate(${getStepAnim(2).rotate}deg)`,
                filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.18))',
              }}>
              Send Automated Reminders
            </div>
          </div>
        </div>
        {/* Spacer to ensure sticky stays until third bar is fully visible */}
        <div style={{ height: '250vh' }} />
      </section>
    </div>
  );
};

export default HeroSection;
