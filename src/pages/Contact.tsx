import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <AnimatedGradientBackground />
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact <span className="text-purple-600">Us</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or want to schedule a demo? We'd love to hear from you.
            </p>
          </div>
            <div className="mt-16 grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <Input id="name" type="text" placeholder="Your name" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:shadow-lg text-white font-bold py-3 px-6 rounded-lg">
                    Send Message
                  </Button>
              </form>
            </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-purple-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">hello@tryzeniq.com</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-purple-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-purple-600" />
                    <div>
                      <h3 className="font-medium text-gray-900">Address</h3>
                      <p className="text-gray-600">123 Healthcare Ave, NY</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
