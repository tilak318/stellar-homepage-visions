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

  const getStatusIcon = (status: string) => {
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
    <section className="py-20 bg-gradient-to-br from-purple-50 via-fuchsia-50 to-blue-50">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Compare Our <span className="text-purple-600">AI Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            See how TRYZENIQ stacks up against traditional automation methods and agencies. 
            Get more power, flexibility, and support.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
                  <th className="text-left p-6 font-semibold">Features</th>
                  <th className="text-center p-6 font-semibold bg-white/10 backdrop-blur-sm">
                    <div className="bg-gray-200 rounded-lg p-4 text-gray-800">
                      Our AI Platform
                    </div>
                  </th>
                  <th className="text-center p-6 font-semibold">HubSpot, Apollo.io, Zapier, Reply</th>
                  <th className="text-center p-6 font-semibold">Hiring InHouse, Agency</th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="p-6 font-medium text-gray-900">{feature.name}</td>
                    <td className="p-6 text-center bg-green-50">
                      <div className="flex items-center justify-center mb-2">
                        {getStatusIcon(feature.ourPlatform.status)}
                      </div>
                      <p className="text-sm text-gray-700">{feature.ourPlatform.text}</p>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center mb-2">
                        {getStatusIcon(feature.competitors.status)}
                      </div>
                      <p className="text-sm text-gray-700">{feature.competitors.text}</p>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center mb-2">
                        {getStatusIcon(feature.agencies.status)}
                      </div>
                      <p className="text-sm text-gray-700">{feature.agencies.text}</p>
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
