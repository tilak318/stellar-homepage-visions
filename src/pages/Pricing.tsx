import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';

const Pricing = () => {
  return (
    <div className="bg-white">
      <Header />
      <main className="py-24">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
