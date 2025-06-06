import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-r from-purple-100 to-blue-100 min-h-screen flex items-center relative overflow-hidden">
      {/* Floating SVG Icons */}
      <div className="absolute top-40 left-10 animate-float">
        <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
      </div>
      
      <div className="absolute bottom-32 right-10 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
          </svg>
        </div>
      </div>
      

      <div className="container mx-auto max-w-7xl px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Automate <span className="text-blue-600">Your Clinic</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          We Help To Streamline Your Entire Journey From<br />
          <span className="font-semibold text-gray-900">Lead Generation To Loyal Customers</span>
        </p>
        
        <Button 
          size="lg" 
          className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-full shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          SCHEDULE FREE MEETING
        </Button>
        
        <div className="flex items-center justify-center space-x-12 mt-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">Save Time</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">Seamless Process</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">More Appointment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
