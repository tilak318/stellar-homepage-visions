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
        <div className="text-center pt-8 mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
            Our <span className="text-purple-600">Price</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            We Provide Full Customisation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-0">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`md:static sticky top-24 z-[${10 + index * 10}] mx-auto w-full max-w-[340px] sm:max-w-sm min-h-[420px] flex flex-col justify-between ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-2xl md:transform md:scale-105'
                  : 'bg-white shadow-lg hover:shadow-xl hover:-translate-y-2 border border-gray-200 transition-transform duration-300'
              } rounded-3xl p-8 sm:p-10 transition-all duration-300`}
            >
              <div className="flex-1 flex flex-col">
                <h3 className={`text-xl sm:text-2xl font-bold mb-6 sm:mb-8 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-6 sm:mb-8">
                  <div className={`text-4xl sm:text-5xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}> 
                    {plan.price}
                    {plan.period && (
                      <span className={`text-base sm:text-lg font-normal ${plan.highlighted ? 'text-white/70' : 'text-gray-500'}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>
                <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-10">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center ${
                        plan.highlighted ? 'bg-white/20' : 'bg-purple-100'
                      }`}>
                        <Check className={`w-4 h-4 sm:w-5 sm:h-5 ${plan.highlighted ? 'text-white' : 'text-purple-600'}`} />
                      </div>
                      <span className={`text-base sm:text-lg ${plan.highlighted ? 'text-white/90' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                className={`w-full py-3 rounded-xl font-medium transition-all ${
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
