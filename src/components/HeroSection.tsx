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
      {/* 3-Step Journey Section - Seamless Background */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20">
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-gray-900 mb-12 text-center leading-tight md:leading-[1.1]">
          How We Help You <span className="bg-gradient-to-br from-blue-600 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">Succeed</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl mb-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center rounded-2xl shadow-md p-8 w-72 h-64 bg-gradient-to-br from-purple-50 via-blue-50 to-fuchsia-100 border border-gray-100">
            <span className="text-4xl mb-3">🤖</span>
            <h3 className="text-xl font-semibold mb-1 text-gray-900">AI Automation</h3>
            <p className="text-gray-600 text-center text-base">Let AI handle bookings and tasks, freeing you to focus on growth.</p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center rounded-2xl shadow-md p-8 w-72 h-64 bg-gradient-to-br from-pink-50 via-fuchsia-50 to-blue-100 border border-gray-100">
            <span className="text-4xl mb-3">🎯</span>
            <h3 className="text-xl font-semibold mb-1 text-gray-900">AI Outreach</h3>
            <p className="text-gray-600 text-center text-base">Reach more clients automatically and expand your business.</p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center rounded-2xl shadow-md p-8 w-72 h-64 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 border border-gray-100">
            <span className="text-4xl mb-3">⏰</span>
            <h3 className="text-xl font-semibold mb-1 text-gray-900">Automated Reminders</h3>
            <p className="text-gray-600 text-center text-base">Never miss an appointment—reminders keep everyone on track.</p>
          </div>
        </div>
        {/* Profit/Success Message - No Card, Just Text */}
        <div className="flex flex-col items-center mt-2">
          <span className="text-4xl md:text-5xl mb-2">🚀</span>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2 text-center">Profit & Success</h3>
          <p className="text-lg md:text-xl font-semibold text-gray-800 text-center max-w-2xl">Celebrate your growth as our system brings you more revenue, effortlessly.</p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
