import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About <span className="text-purple-600">TryZeniq</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a team of innovators dedicated to revolutionizing the healthcare industry with cutting-edge AI solutions.
            </p>
          </div>
          <div className="mt-16">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Our Team" 
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-12 mt-16 text-center">
            <div className="p-8">
              <Users className="w-12 h-12 mx-auto text-purple-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h2>
              <p className="text-gray-700">To empower clinics with intelligent automation, freeing up professionals to focus on what matters most: patient care.</p>
            </div>
            <div className="p-8">
              <Target className="w-12 h-12 mx-auto text-fuchsia-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h2>
              <p className="text-gray-700">To be the leading provider of AI-driven solutions that transform the healthcare landscape for the better.</p>
            </div>
            <div className="p-8">
              <Eye className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Values</h2>
              <p className="text-gray-700">Innovation, integrity, and a deep commitment to our clients' success are at the core of everything we do.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
