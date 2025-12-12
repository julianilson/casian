import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ApplicationBlackHoleSection from '@/components/sections/ApplicationBlackHoleSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import StopGhostedSection from '@/components/sections/StopGhostedSection';
import ProductFeaturesSection from '@/components/sections/ProductFeaturesSection';
import GetBackInGameSection from '@/components/sections/GetBackInGameSection';
import MetricsSection from '@/components/sections/MetricsSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import CompanyLogosSection from '@/components/sections/CompanyLogosSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ApplicationBlackHoleSection />
        <FeaturesSection />
        <TestimonialSection />
        <StopGhostedSection />
        <ProductFeaturesSection />
        <GetBackInGameSection />
        <MetricsSection />
        <HowItWorksSection />
        <CompanyLogosSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}