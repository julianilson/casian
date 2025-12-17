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

import Vapi from '@vapi-ai/web';

const vapi = new Vapi('051655b6-fb3c-48fa-82c6-83c8bb17becc');

export default function Home() {
  // 1. Define a variable to store the location
  const [userLocation, setUserLocation] = useState("Unknown Location");
  const [isCallActive, setIsCallActive] = useState(false);

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

  useEffect(() => {
    vapi.on('call-start', () => setIsCallActive(true));
    vapi.on('call-end', () => setIsCallActive(false));
    return () => {
      vapi.removeAllListeners();
    };
  }, []);

  const startVapi = () => {
    vapi.start('879d1198-2cc3-47d1-bf85-c5ec8a6b0223', {
      variableValues: {
        location: userLocation,
      },
    });
  };

  const endVapi = () => {
    vapi.stop();
  };

  return (
    <>
      <Header />
      <main>
        <HeroSection
          onStartVapi={startVapi}
          isCallActive={isCallActive}
          onEndCall={endVapi}
        />
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