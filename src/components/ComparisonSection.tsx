import { Check, X } from 'lucide-react';

const ComparisonSection = () => {
  const features = [
    {
      name: "Website + Automation",
      ourPlatform: { status: "included", text: "Built-in, no extra setup" },
      competitors: { status: "limited", text: "Needs external website + integrations" },
      agencies: { status: "expensive", text: "Custom build possible, but time + costly" }
    },
    {
      name: "24/7 Lead and Booking",
      ourPlatform: { status: "included", text: "AI agents included, fully automated" },
      competitors: { status: "limited", text: "Possible with tools, but needs setup" },
      agencies: { status: "manual", text: "Depends on human team, limited hours" }
    },
    {
      name: "AI Follow-up and chatbot",
      ourPlatform: { status: "included", text: "Native AI chatbot + automated follow-ups" },
      competitors: { status: "limited", text: "Basic bots, advanced needs extra tools" },
      agencies: { status: "manual", text: "Manual follow-up, slower" }
    },
    {
      name: "Auto Social Media Posts",
      ourPlatform: { status: "included", text: "Included auto-posting system with suggestions" },
      competitors: { status: "limited", text: "Needs separate tools like Buffer, Hootsuite" },
      agencies: { status: "manual", text: "Handled manually by social/marketing team" }
    },
    {
      name: "Smart Review Reply System",
      ourPlatform: { status: "included", text: "AI replies to reviews smartly without spend time" },
      competitors: { status: "limited", text: "Not included natively, needs manual or extra tools" },
      agencies: { status: "manual", text: "Managed manually, slower but personalized" }
    },
    {
      name: "Rescheduling Automation",
      ourPlatform: { status: "included", text: "Smart rescheduling included" },
      competitors: { status: "limited", text: "Needs third-party calendar setup + integrations" },
      agencies: { status: "manual", text: "Handled manually by staff or agency" }
    },
    {
      name: "Request for Customisation?",
      ourPlatform: { status: "included", text: "Flexible and customizable" },
      competitors: { status: "limited", text: "Mostly fixed features, low flexibility" },
      agencies: { status: "included", text: "Fully customizable, but higher cost" }
    },
    {
      name: "Pricing",
      ourPlatform: { status: "included", text: "Affordable, monthly package and Lifetime Deal" },
      competitors: { status: "limited", text: "Subscription per tool, can add up over time" },
      agencies: { status: "expensive", text: "High cost: salaries, agency fees, contracts" }
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "included":
        return <Check className="w-5 h-5 text-purple-600" />;
      case "limited":
        return <div className="w-5 h-5 bg-yellow-400 rounded-full" />;
      case "manual":
      case "expensive":
        return <X className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Compare Our <span className="text-purple-600">AI Platform</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how TRYZENIQ stacks up against traditional automation methods and agencies. 
            Get more power, flexibility, and support.
          </p>
        </div>
        <div className="rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-fuchsia-600">
                  <th className="text-left p-2 sm:p-3 md:p-4 font-semibold text-white text-xs sm:text-base md:text-lg w-20 md:w-auto">Features</th>
                  <th className="text-center p-2 sm:p-3 md:p-4 font-semibold text-white text-xs sm:text-base md:text-lg relative w-20 md:w-auto">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <div className="relative">
                      <div className="bg-purple-100 rounded-xl p-1 sm:p-2 text-purple-600 font-bold text-xs sm:text-base md:text-lg shadow-lg">
                        <span className="md:hidden">Us</span>
                        <span className="hidden md:inline">TRYZENIQ</span>
                      </div>
                    </div>
                  </th>
                  <th className="text-center p-2 sm:p-3 md:p-4 font-semibold text-white text-xs sm:text-base md:text-lg w-20 md:w-auto">
                    <span className="md:hidden">Others</span>
                    <span className="hidden md:inline">HubSpot, Apollo.io, Zapier, Reply</span>
                  </th>
                  <th className="text-center p-2 sm:p-3 md:p-4 font-semibold text-white text-xs sm:text-base md:text-lg w-20 md:w-auto">
                    <span className="md:hidden">Others</span>
                    <span className="hidden md:inline">Hiring InHouse, Agency</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="bg-transparent">
                    <td className="p-4 font-medium text-gray-900 text-base">{feature.name}</td>
                    <td className="p-4 text-center border-l-2 border-r-2 border-purple-200 bg-purple-200">
                      <div className="flex items-center justify-center mb-2">
                        {getStatusIcon(feature.ourPlatform.status)}
                      </div>
                      <p className="text-gray-700 text-base hidden md:block">{feature.ourPlatform.text}</p>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        {getStatusIcon(feature.competitors.status)}
                      </div>
                      <p className="text-gray-700 text-base hidden md:block">{feature.competitors.text}</p>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        {getStatusIcon(feature.agencies.status)}
                      </div>
                      <p className="text-gray-700 text-base hidden md:block">{feature.agencies.text}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
