// Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import ThridSection from './ThridSection';
import ApproachSection from './Approach';
import Footer from './Footer';
// import ProcessSection from './ProcessSection';
import ProductShowcase from './ProductShowcase';
import CTASection from './CTASection';
import ProductInfiniteScroll from './ProductInfiniteScroll';
import StatsSection from './StatsSection';
import TestimonialSection from './TestimonialSection';
import WorldMapPage from './WorldMapPage';
import CustomerLogosSection from './CustomerLogosSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ThridSection />
      <ApproachSection />
      <ProductShowcase />
      <ProductInfiniteScroll />
      <StatsSection />
      <TestimonialSection />
      <WorldMapPage />
      <CustomerLogosSection />

    </>
  );
}
