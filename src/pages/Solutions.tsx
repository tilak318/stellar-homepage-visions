
import Header from '@/components/Header';
import AISolutionsSection from '@/components/AISolutionsSection';
import DashboardSection from '@/components/DashboardSection';

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <AISolutionsSection />
        <DashboardSection />
      </div>
    </div>
  );
};

export default Solutions;
