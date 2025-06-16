import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';
import AnimatedGradientBackground from '@/components/AnimatedGradientBackground';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <AnimatedGradientBackground />
      <Header />
      <main className="pt-20 pb-16">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
