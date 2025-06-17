// Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import ThridSection from './ThridSection';
import ApproachSection from './Approach';
import Footer from './Footer';
import ProcessSection from './ProcessSection';
import ProductShowcase from './ProductShowcase';
import CTASection from './CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ThridSection />
      <ApproachSection />
      <ProductShowcase />
      <CTASection />
      
    </>
  );
}
