
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">About TryZeniq</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're revolutionizing healthcare automation with cutting-edge AI solutions 
                that help clinics grow, operate efficiently, and provide better patient care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower healthcare providers with intelligent automation tools that streamline operations and enhance patient experiences.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become the leading AI platform for healthcare automation, helping clinics worldwide achieve operational excellence.
                </p>
              </div>

              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Innovation, reliability, and customer success drive everything we do. We're committed to delivering exceptional value.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
