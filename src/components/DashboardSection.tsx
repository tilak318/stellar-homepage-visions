import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardSection = () => {
  const [currentDashboard, setCurrentDashboard] = useState(0);
  
  const dashboards = [
    {
      title: "Botox & Skin Care",
      image: "/lovable-uploads/646df6b8-ae48-46b4-a265-ab8491737013.png",
      features: ["Smart Website + Auto Lead Gen", "Smart follow-ups & reminders", "Appointment scheduling", "Before/After Tracking", "Client Loyalty"]
    },
    {
      title: "Clinics and Detist",
      image: "/lovable-uploads/649a19e7-2cbc-4fed-9908-2053a363be90.png",
      features: ["Smart Website + Auto Lead Gen", "Automated Survey & Feedback", "Google/Yelp Review requests", "Referrals Tracking", "AI Chatbot"]
    },
    {
      title: "Gym & Health Coach",
      image: "/lovable-uploads/5cd9d473-ebf1-4658-9ac6-429b86c8213b.png",
      features: ["Smart Website + Auto Lead Gen", "Smart follow-ups & reminders", "Appointment scheduling", "Referral Tracking", "Client Loyalty"]
    },
    {
      title: "Business Consultation",
      image: "/lovable-uploads/540af2f8-1ab8-4bec-86d0-c94e9823d227.png",
      features: ["Smart Website + Auto Lead Gen", "Smart follow-ups & reminders", "Appointment scheduling", "Referral Tracking", "Client Loyalty"]
    },
    {
      title: "IT & SAAS Services",
      image: "/lovable-uploads/83ff062d-8064-41d9-a52a-da032dcca867.png",
      features: ["Smart Website + Auto Lead Gen", "Smart follow-ups & reminders", "Appointment scheduling", "Referral Tracking", "Client Loyalty"]
    }
  ];

  const nextDashboard = () => {
    setCurrentDashboard((prev) => (prev + 1) % dashboards.length);
  };

  const prevDashboard = () => {
    setCurrentDashboard((prev) => (prev - 1 + dashboards.length) % dashboards.length);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All In <span className="text-purple-600">One Platform</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
            Where We Help To Automate This Business
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm font-medium text-gray-700">Documents</span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm font-medium text-gray-700">Telehealth</span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-medium">Lead Generation</span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm font-medium text-gray-700">Chat</span>
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm font-medium text-gray-700">Automations</span>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevDashboard}
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-lg hover:shadow-xl transition-all order-2 lg:order-1"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            <div className="flex-1 w-full mx-0 sm:mx-8 order-1 lg:order-2">
              <div className="bg-gradient-to-br from-purple-100 to-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {dashboards[currentDashboard].title}
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      {dashboards[currentDashboard].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-fuchsia-500 rounded-full flex items-center justify-center">
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium text-xs sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base">
                      View Demo
                    </Button>
                  </div>
                  <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg">
                    <div className="bg-gray-900 rounded-lg sm:rounded-xl h-40 sm:h-64 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-10 h-10 sm:w-16 sm:h-16 bg-gray-700 rounded-lg mx-auto mb-2 sm:mb-4"></div>
                        <p className="text-xs sm:text-sm opacity-75">Dashboard Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextDashboard}
              className="rounded-full w-10 h-10 sm:w-12 sm:h-12 shadow-lg hover:shadow-xl transition-all order-3"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            {dashboards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDashboard(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === currentDashboard ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
