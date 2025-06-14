import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const solutions = [
  {
    title: 'AI-Powered Diagnostics',
    description: 'Leverage our advanced AI to analyze medical images and data with incredible accuracy, providing faster and more reliable diagnostics.',
    features: ['Real-time analysis', '99% accuracy rate', 'Supports various imaging formats', 'Integrates with existing systems'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'AI Patient Communication',
    description: 'Our system automates appointment reminders, follow-ups, and patient queries, freeing up your staff to focus on providing care.',
    features: ['24/7 AI chatbot', 'Personalized messaging', 'Multi-channel support (SMS, email)', 'Reduces no-shows by 40%'],
    image: 'https://images.unsplash.com/photo-1584515933487-779824d27bfb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Intelligent Clinic Management',
    description: 'Streamline your daily operations, from staff scheduling to inventory management, with our all-in-one AI-powered platform.',
    features: ['Optimized scheduling', 'Automated inventory tracking', 'Performance analytics', 'HIPAA compliant'],
    image: 'https://images.unsplash.com/photo-1551884856-0c933999965b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Personalized Treatment Plans',
    description: 'Our AI analyzes patient data to help you create personalized and more effective treatment plans, improving patient outcomes.',
    features: ['Data-driven recommendations', 'Tracks patient progress', 'Predictive modeling', 'Enhances patient satisfaction'],
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 sm:px-12 md:px-20">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
            Our <span className="text-purple-600">Solutions</span>
          </h1>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            We offer a suite of AI-powered tools designed to revolutionize your clinic's efficiency and patient care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-2xl shadow-lg border border-gray-200 p-6 bg-purple-200"
              >
                <h2 className="text-2xl font-bold mb-2 text-center text-gray-900 mt-0">{solution.title}</h2>
                <ul className="space-y-2 w-full mx-auto text-left">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-fuchsia-500" />
                      <span className="text-lg text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
