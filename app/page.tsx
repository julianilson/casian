'use client';

import { useState, useEffect } from 'react';
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
  // 1. Define a variable to store the location
  const [userLocation, setUserLocation] = useState("Unknown Location");

  // 2. Fetch location after the page has successfully loaded
  useEffect(() => {
    const fetchLocation = () => {
      fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
          // Construct a readable location string, e.g., "Texas, United States"
          const location = `${data.region}, ${data.country_name}`;
          setUserLocation(location);
          console.log("User location detected:", location);
        })
        .catch(error => {
          console.error("Error fetching location:", error);
          // Fallback if the API fails
          setUserLocation("Unknown Location");
        });
    };

    if (document.readyState === 'complete') {
      fetchLocation();
    } else {
      window.addEventListener('load', fetchLocation);
      return () => window.removeEventListener('load', fetchLocation);
    }
  }, []);

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