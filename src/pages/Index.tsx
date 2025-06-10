import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FunnelAnimation from '@/components/FunnelAnimation';
import AISolutionsSection from '@/components/AISolutionsSection';
import NewAISolutionsSection from '@/components/NewAISolutionsSection';
import ResultsSection from '@/components/ResultsSection';
import DashboardSection from '@/components/DashboardSection';
import NicheSection from '@/components/NicheSection';
import ComparisonSection from '@/components/ComparisonSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FunnelAnimation />
      {/* <AISolutionsSection /> */}
      {/* <NewAISolutionsSection /> */}
      <ResultsSection />
      <DashboardSection />
      <NicheSection />
      <ComparisonSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
