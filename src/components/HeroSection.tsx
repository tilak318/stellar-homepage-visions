import { Button } from "@/components/ui/button";
import { FaGlobe, FaBullseye, FaRobot } from "react-icons/fa";
import ThreeLevelPyramid from "./ThreeLevelPyramid";
import React from "react";

const FloatingIcon = ({ imgSrc, className, delay = 0, alt }) => (
  <div
    className={`absolute block md:animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <img src={imgSrc} alt={alt} className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain" />
  </div>
);

const HeroSection = () => {
  return (
    <div className="relative">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto max-w-7xl px-8 text-center relative z-10 flex flex-col justify-center min-h-[70vh]">
          {/* Desktop Content */}
          <div className="hidden md:block">
            <p className="text-xl font-semibold text-gray-700 mb-2">Get 24/7 Smart Website To</p>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight md:leading-[1.1]">
                Automate Your Booking<br />
                And <span className="bg-gradient-to-br from-blue-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">Maximize</span> Your Profit
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
              We automate the entire business journey from <span className="font-bold text-gray-800">lead generation</span> <br /> to <span className="font-bold text-gray-800">reminders</span> saving your clinic time, boosting revenue.
            </p>
            <div className="mt-8 flex justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-bold">SCHEDULE FREE MEETING</Button>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="md:hidden flex flex-col items-center justify-center flex-1">
            <p className="text-xl font-semibold text-gray-700 mb-2 mt-8">Lead to Loyal Client</p>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Automate<br />
              <span className="whitespace-nowrap">Your Business</span><br />
              <span className="bg-gradient-to-br from-blue-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">Profits</span>
            </h1>
            <div className="mt-4 w-full flex justify-center">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-bold">FREE MEETING</Button>
            </div>
          </div>
        </div>

        {/* Icons positioned after content (original absolute positioning) */}
        <div className="absolute inset-0 z-0">
          <FloatingIcon imgSrc="/homeicons/1.png" alt="Followup" className="top-[60%] md:top-1/2 left-[5%] md:left-[10%]" />
          <FloatingIcon imgSrc="/homeicons/2.png" alt="Website" className="bottom-16 left-[20%] md:left-[30%]" delay={1} />
          <FloatingIcon imgSrc="/homeicons/3.png" alt="Lead Gen" className="top-[60%] md:top-1/2 right-[5%] md:right-[10%]" delay={0.5} />
          <FloatingIcon imgSrc="/homeicons/4.png" alt="Outreach" className="bottom-16 right-[20%] md:right-[30%]" delay={1.5} />
        </div>
      </section>
      {/* 3-Step Journey Section - Seamless Background */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Help You <span className="text-purple-600">Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We automate your business journey from lead generation to reminders, saving your clinic time and boosting revenue.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl mb-12">
          {/* Step 1 */}
          <div className="bg-purple-50 p-4 md:p-8 rounded-2xl md:rounded-3xl hover:shadow-xl shadow-lg border border-gray-200 transition-all duration-300 flex flex-col items-center w-72 h-64">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-400 to-fuchsia-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
              <span className="text-3xl md:text-4xl">🤖</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">AI Automation</h3>
            <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed flex-grow">Let AI handle bookings and tasks, freeing you to focus on growth.</p>
          </div>
          {/* Step 2 */}
          <div className="bg-fuchsia-50 p-4 md:p-8 rounded-2xl md:rounded-3xl hover:shadow-xl shadow-lg border border-gray-200 transition-all duration-300 flex flex-col items-center w-72 h-64">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
              <span className="text-3xl md:text-4xl">🎯</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">AI Outreach</h3>
            <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed flex-grow">Reach more clients automatically and expand your business.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-fuchsia-50 p-4 md:p-8 rounded-2xl md:rounded-3xl hover:shadow-xl shadow-lg border border-gray-200 transition-all duration-300 flex flex-col items-center w-72 h-64">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-fuchsia-500 to-purple-400 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg">
              <span className="text-3xl md:text-4xl">⏰</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4">Automated Reminders</h3>
            <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed flex-grow">Never miss an appointment—reminders keep everyone on track.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
