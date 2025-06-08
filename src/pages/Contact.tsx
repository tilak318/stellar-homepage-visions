import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact <span className="text-purple-600">Us</span></h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or want to schedule a demo? We'd love to hear from you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 mt-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="font-medium text-gray-800">Full Name</label>
                  <Input id="name" placeholder="John Doe" className="mt-2"/>
                </div>
                <div>
                  <label htmlFor="email" className="font-medium text-gray-800">Email</label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" className="mt-2"/>
                </div>
                <div>
                  <label htmlFor="message" className="font-medium text-gray-800">Message</label>
                  <Textarea id="message" placeholder="How can we help you?" className="mt-2" rows={5}/>
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">Send Message</Button>
              </form>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-purple-600"/>
                  <span className="text-gray-700">hello@tryzeniq.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-purple-600"/>
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-purple-600"/>
                  <span className="text-gray-700">123 Healthcare Ave, New York, USA</span>
                </div>
              </div>
              <div className="mt-8">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6229533317823!2d-73.98567288459383!3d40.74844097932824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1628 Empire State Building" 
                  width="100%" 
                  height="250" 
                  style={{border:0}} 
                  allowFullScreen={true}
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
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
