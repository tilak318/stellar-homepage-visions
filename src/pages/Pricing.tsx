
import Header from '@/components/Header';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Pricing Plans</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the perfect plan for your clinic. Start automating your operations today.
              </p>
            </div>
          </div>
        </section>
        <PricingSection />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
