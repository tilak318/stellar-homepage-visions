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
      period: "/ Month",
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
      <div className="container mx-auto max-w-7xl px-8">
        <div className="text-center mt-12 mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-purple-600">Price</span>
          </h2>
          <p className="text-xl text-gray-600">
            We Provide Full Customisation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl md:rounded-3xl p-4 md:p-8 transition-all duration-300 hover:scale-105 md:hover:scale-105 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-2xl md:transform md:scale-105'
                  : 'bg-gray-50 hover:shadow-xl'
              }`}
            >
              <div className="h-32 md:h-48 bg-gray-900 rounded-xl md:rounded-2xl mb-4 md:mb-6 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-700 rounded-lg mx-auto mb-2 md:mb-4"></div>
                  <p className="text-xs md:text-sm opacity-75">Plan Preview</p>
                </div>
              </div>

              <h3 className={`text-lg md:text-2xl font-bold mb-3 md:mb-4 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>

              <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2 md:space-x-3">
                    <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center ${
                      plan.highlighted ? 'bg-white/20' : 'bg-purple-100'
                    }`}>
                      <Check className={`w-2.5 h-2.5 md:w-3 md:h-3 ${plan.highlighted ? 'text-white' : 'text-purple-600'}`} />
                    </div>
                    <span className={`text-xs md:text-sm ${plan.highlighted ? 'text-white/90' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-4 md:mb-6">
                <div className={`text-2xl md:text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                  {plan.period && (
                    <span className={`text-base md:text-lg font-normal ${plan.highlighted ? 'text-white/70' : 'text-gray-500'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <Button
                className={`w-full py-2 md:py-3 rounded-xl font-medium transition-all ${
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
