import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Solutions from "./pages/Solutions";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Insurance from "./pages/Insurance";
import BotoxSkinCare from "./pages/BotoxSkinCare";
import ClinicsDentist from "./pages/ClinicsDentist";
import GymHealthCoach from "./pages/GymHealthCoach";
import BusinessConsultation from "./pages/BusinessConsultation";
import ITSaaS from "./pages/ITSaaS";
import SalonsSpa from "./pages/SalonsSpa";
import RealEstateAgents from "./pages/RealEstateAgents";
import TherapistsCounselors from "./pages/TherapistsCounselors";
import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll both the window and the overflow container
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
    
    // Also scroll the overflow container
    const container = document.querySelector('.overflow-auto');
    if (container) {
      container.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
    }
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner theme="dark" richColors />
      <AnimatedGradientBackground />
      <div className="relative h-screen overflow-auto">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/botox-skin-care" element={<BotoxSkinCare />} />
            <Route path="/clinics-dentist" element={<ClinicsDentist />} />
            <Route path="/gym-health-coach" element={<GymHealthCoach />} />
            <Route path="/business-consultation" element={<BusinessConsultation />} />
            <Route path="/it-saas" element={<ITSaaS />} />
            <Route path="/salons-spa" element={<SalonsSpa />} />
            <Route path="/real-estate-agents" element={<RealEstateAgents />} />
            <Route path="/therapists-counselors" element={<TherapistsCounselors />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
