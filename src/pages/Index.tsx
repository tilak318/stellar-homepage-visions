import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
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
      <div className="bg-gradient-to-r from-purple-600 via-white to-purple-600">
        <HeroSection />
      </div>
      {/* <AISolutionsSection /> */}
      {/* <NewAISolutionsSection /> */}
      <div className="bg-gradient-to-r from-purple-600 via-white to-purple-600">
        <ResultsSection />
      </div>
      <div className="bg-gradient-to-r from-purple-600 via-white to-purple-600">
        <DashboardSection />
      </div>
      <div className="bg-gradient-to-r from-purple-600 via-white to-purple-600">
        <NicheSection />
      </div>
      <div className="bg-gradient-to-r from-purple-600 via-white to-purple-600">
        <ComparisonSection />
      </div>
      <div className="bg-gradient-to-r from-purple-600 via-white to-purple-600">
        <PricingSection />
      </div>
      <div className="bg-gradient-to-r from-purple-600 via-white to-purple-600">
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
