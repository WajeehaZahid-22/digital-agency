import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowWeWork from "../components/HowWeWork";
import BeautifulWorks from '../components/BeautifulWorks';
import CapabilitiesSection from "../components/CapabilitiesSection";
import BenefitsSection from "../components/BenefitsSection";
import TestimonialSection from "../components/TestimonialSection";
import PricingPlans from "../components/PricingPlans";
import NewsAndArticles from "../components/NewsAnArticles";
import FAQs from '../components/FAQs'
import Footer from '../components/Footer'


const HomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <HowWeWork />
       <BeautifulWorks />
        <CapabilitiesSection />
      <BenefitsSection />
      <TestimonialSection />
      <PricingPlans/>
      <NewsAndArticles/>
      <FAQs/>
      <Footer/>
      {/* <section id="benefits" className="h-[300px]"></section>
      <section id="services" className="h-[300px]"></section>
      <section id="portfolio" className="h-[300px]"></section>
      <section id="faq" className="h-[300px]"></section>
      <section id="get-started" className="h-[300px]"></section> */}
     
    </div>
  );
};

export default HomePage;
