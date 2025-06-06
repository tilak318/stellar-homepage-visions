
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Price
          </h2>
          <p className="text-xl text-gray-600">
            We Provide Full Customisation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl transform scale-105'
                  : 'bg-gray-50 hover:shadow-xl'
              }`}
            >
              <div className="h-48 bg-gray-900 rounded-2xl mb-6 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-4"></div>
                  <p className="text-sm opacity-75">Plan Preview</p>
                </div>
              </div>

              <h3 className={`text-2xl font-bold mb-4 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.highlighted ? 'bg-white/20' : 'bg-green-100'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-green-600'}`} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <div className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                  {plan.period && (
                    <span className={`text-lg font-normal ${plan.highlighted ? 'text-white/70' : 'text-gray-500'}`}>
                      {plan.period}
                    </span>
                  )}
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
