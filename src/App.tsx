import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import ServicesHub from "./pages/ServicesHub.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import ServiceAreasHub from "./pages/ServiceAreasHub.tsx";
import CityPage from "./pages/CityPage.tsx";
import OurWork from "./pages/OurWork.tsx";
import ReviewsPage from "./pages/ReviewsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import LegalPage from "./pages/LegalPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import { privacyPolicy, termsOfService } from "@/content/legal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/service-areas" element={<ServiceAreasHub />} />
          <Route path="/service-areas/:slug" element={<CityPage />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<LegalPage doc={privacyPolicy} />} />
          <Route path="/terms" element={<LegalPage doc={termsOfService} />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
