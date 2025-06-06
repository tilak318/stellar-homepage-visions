
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AISolutionsSection from '@/components/AISolutionsSection';
import ResultsSection from '@/components/ResultsSection';
import DashboardSection from '@/components/DashboardSection';
import ComparisonSection from '@/components/ComparisonSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AISolutionsSection />
      <ResultsSection />
      <DashboardSection />
      <ComparisonSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
