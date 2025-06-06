
import Header from '@/components/Header';
import AISolutionsSection from '@/components/AISolutionsSection';
import DashboardSection from '@/components/DashboardSection';
import Footer from '@/components/Footer';

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Solutions</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our AI-powered solutions can transform your clinic operations and boost your success.
              </p>
            </div>
          </div>
        </section>
        <AISolutionsSection />
        <DashboardSection />
      </div>
      <Footer />
    </div>
  );
};

export default Solutions;
