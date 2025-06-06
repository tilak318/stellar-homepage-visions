import { Zap, Users, Send } from 'lucide-react';

const funnelData = [
  {
    title: 'AI Automation',
    icon: <Zap size={20} className="text-white" />,
    bgColor: 'bg-purple-400',
    width: 'w-full md:w-4/12',
    height: 'h-16',
  },
  {
    title: 'AI Outreach Clients',
    icon: <Users size={20} className="text-white" />,
    bgColor: 'bg-indigo-500',
    width: 'w-full md:w-5/12',
    height: 'h-16',
  },
  {
    title: 'Send Automated Reminders',
    icon: <Send size={20} className="text-white" />,
    bgColor: 'bg-blue-600',
    width: 'w-full md:w-6/12',
    height: 'h-16',
  },
];

const NewAISolutionsSection = () => {
  return (
    <section id="new-ai-solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-blue-600">AI Solutions</span>
        </h2>
        <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
           powerful services to transform your clinic
        </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          {funnelData.map((item) => (
            <div
              key={item.title}
              className={`${item.bgColor} ${item.width} ${item.height} flex items-center justify-center text-center rounded-md`}
            >
              <div className="flex items-center gap-3 px-4">
                {item.icon}
                <span className="text-white font-semibold text-base md:text-lg">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewAISolutionsSection; 