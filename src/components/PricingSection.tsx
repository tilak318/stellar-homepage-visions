import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$69",
      period: "/ Month",
      features: [
        "Smart Website Solution",
        "Social Media Post Automation",
        "360 Scheduling And Reminder",
        "Customise According to your need"
      ],
      highlighted: false
    },
    {
      name: "Life Time Access",
      price: "$1959",
      period: "",
      features: [
        "1,000+ React components",
        "Built with Tailwind CSS and Shadcn UI",
        "Use Personal Server",
        "Life Time To Use Access"
      ],
      highlighted: true
    },
    {
      name: "Full Source Code",
      price: "$15000",
      period: "",
      features: [
        "1,000+ React components",
        "Built with Tailwind CSS and Shadcn UI",
        "Copy as React or HTML",
        "Full Source code with full Access"
      ],
      highlighted: false
    }
  ];

  return (
    <section>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="text-center mt-8 sm:mt-10 md:mt-12 mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
            Our <span className="text-purple-600">Price</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            We Provide Full Customisation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-8 transition-all duration-300 hover:scale-105 md:hover:scale-105 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-2xl md:transform md:scale-105'
                  : 'bg-white shadow-2xl hover:shadow-2xl hover:-translate-y-2 border border-gray-200 transition-transform duration-300'
              }`}
            >
              <h3 className={`text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>

              <div className="mb-3 sm:mb-4 md:mb-6">
                <div className={`text-xl sm:text-2xl md:text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}> 
                  {plan.price}
                  {plan.period && (
                    <span className={`text-xs sm:text-base md:text-lg font-normal ${plan.highlighted ? 'text-white/70' : 'text-gray-500'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2 md:space-y-3 mb-3 sm:mb-4 md:mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                    <div className={`w-4 h-4 sm:w-4 md:w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.highlighted ? 'bg-white/20' : 'bg-purple-100'
                    }`}>
                      <Check className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 ${plan.highlighted ? 'text-white' : 'text-purple-600'}`} />
                    </div>
                    <span className={`text-xs sm:text-sm md:text-base ${plan.highlighted ? 'text-white/90' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-medium transition-all ${
                  plan.highlighted
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                }`}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
