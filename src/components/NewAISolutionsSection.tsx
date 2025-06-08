import { Zap, Users, Send } from 'lucide-react';

const solutions = [
  {
    title: 'AI Automation',
    icon: <Zap size={26} className="text-purple-600" />,
    color: 'bg-purple-50',
  },
  {
    title: 'AI Outreach Clients',
    icon: <Users size={26} className="text-blue-600" />,
    color: 'bg-blue-50',
  },
  {
    title: 'Send Automated Reminders',
    icon: <Send size={26} className="text-fuchsia-600" />,
    color: 'bg-fuchsia-50',
  },
];

const stepOffsets = [
  'ml-[30%] md:ml-[40%]', // First step: right
  'ml-[15%] md:ml-[20%]', // Second step: center
  'ml-0', // Third step: left
];

const NewAISolutionsSection = () => {
  return (
    <section id="new-ai-solutions" className="py-16 bg-gradient-to-br from-slate-100 via-purple-50 to-fuchsia-50">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Our <span className="text-purple-600">AI Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful services to transform your clinic
          </p>
        </div>
        {/* Mac App Window - Wider, with staircase steps */}
        <div className="w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 bg-white overflow-hidden">
          {/* Top bar with tagline */}
          <div className="flex items-center justify-between px-5 py-2.5 bg-slate-900 rounded-t-2xl border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-300 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-white font-medium tracking-wide text-base">Automated Client Journey</span>
            </div>
            <div className="w-12" /> {/* Spacer for symmetry */}
          </div>
          {/* Dashboard content - Reverse staircase */}
          <div className="p-8 flex flex-col gap-0 bg-white min-h-[360px] justify-center">
            {solutions.map((sol, idx) => (
              <div key={sol.title} className={`relative flex items-center gap-5 py-5 transition-all duration-300 ${stepOffsets[idx]}`}>
                {/* Step number */}
                <div className="flex flex-col items-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-base ${idx === 0 ? 'bg-purple-200 text-purple-700' : idx === 1 ? 'bg-blue-200 text-blue-700' : 'bg-fuchsia-200 text-fuchsia-700'}`}>{idx + 1}</div>
                  {idx < solutions.length - 1 && (
                    <div className="w-1 h-10 bg-gradient-to-b from-gray-300 to-gray-100" />
                  )}
                </div>
                {/* Card */}
                <div className={`flex items-center gap-4 ${sol.color} rounded-xl px-6 py-4 shadow-sm w-full`}> 
                  <div className="flex-shrink-0">{sol.icon}</div>
                  <div className="text-lg md:text-xl font-semibold text-gray-800">{sol.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAISolutionsSection; 