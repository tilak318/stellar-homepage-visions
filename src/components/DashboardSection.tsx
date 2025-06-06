
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All In One Platform
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Where We Help To Automate This Business
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Documents</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Telehealth</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Lead Generation</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Chat</span>
            <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">Automations</span>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevDashboard}
              className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <div className="flex-1 mx-8">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">
                      {dashboards[currentDashboard].title}
                    </h3>
                    <div className="space-y-3">
                      {dashboards[currentDashboard].features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
                      View Demo
                    </Button>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <div className="bg-gray-900 rounded-xl h-64 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-4"></div>
                        <p className="text-sm opacity-75">Dashboard Preview</p>
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
              className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="flex justify-center space-x-2">
            {dashboards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDashboard(index)}
                className={`w-3 h-3 rounded-full transition-all ${
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
