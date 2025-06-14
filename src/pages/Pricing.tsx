import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-white to-purple-600">
      <Header />
      <main className="pt-20 pb-16">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
