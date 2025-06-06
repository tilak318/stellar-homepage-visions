
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ready to transform your clinic with AI automation? Get in touch with our team today.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" className="h-12" />
                    <Input placeholder="Last Name" className="h-12" />
                  </div>
                  <Input placeholder="Email Address" type="email" className="h-12" />
                  <Input placeholder="Phone Number" type="tel" className="h-12" />
                  <Textarea placeholder="Tell us about your clinic and automation needs..." className="h-32" />
                  <Button className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">hello@clinicai.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Office</p>
                        <p className="text-gray-600">123 Healthcare Ave, Medical District, NY 10001</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Schedule a Free Demo</h3>
                  <p className="mb-6 opacity-90">
                    See how our AI platform can transform your clinic operations in just 30 minutes.
                  </p>
                  <Button className="bg-white text-purple-600 hover:bg-gray-100">
                    Book Demo Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
