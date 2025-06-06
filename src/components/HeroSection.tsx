import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-100 via-purple-100 to-purple-200 py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-8 text-center">
        <p className="text-lg font-semibold text-gray-700 mb-2">Get 24/7 Smart Website To</p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Automate Your Booking
          <br />
          And Maximize Your Booking
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
          We automate the entire business journey from <span className="font-bold text-gray-800">lead generation</span> to <span className="font-bold text-gray-800">reminders</span> saving your clinic time, boosting revenue.
        </p>
        <div className="mt-8">
          <Button size="lg" className="text-lg px-8 py-6">Start Your Free Trial</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
