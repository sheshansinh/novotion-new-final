import NovotionFooter from "@/components/Footer";
import PerfectParallax, { StickyScroll } from "@/components/Home/3dherocarosal";
import CarouselSection from "@/components/Home/CarouselSection";
import FaqSection from "@/components/Home/FaqSection";
import NovotionFeatures from "@/components/Home/Features";
import GlobalTalentGateway from "@/components/Home/GlobalTalentGateway";

import NovotionHero from "@/components/Home/Herosection";
import NovotionHero1 from "@/components/Home/Herosection1";
import NovotionHero2 from "@/components/Home/Herosection2";
import NovotionHero3 from "@/components/Home/Herosection3";
import NovotionHero4 from "@/components/Home/Herosection4";
import NovotionHero5 from "@/components/Home/Herosection5";

import OysterCta from "@/components/Home/HomeCtaSection";
import CtaSection from "@/components/Home/HomeCtaSection";
import IndustrySlider from "@/components/Home/IndustrySlider";
import KeyStatistics from "@/components/Home/KeyStatistics";
import NovotionAbout from "@/components/Home/NovotionAbout";
import NovotionTestimonials from "@/components/Home/NovotionTestimonials";
import PlacementSection from "@/components/Home/PlacementSection";
import ServicesCarousel from "@/components/Home/ServicesCarousel";
import TestimonialSlider from "@/components/Home/Testimonial";
import NovotionNavbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <NovotionNavbar/>
      
   
      <NovotionHero1 />


      <NovotionAbout/>
  
      <CarouselSection/>
      
      <NovotionFeatures/>

      <PlacementSection/>

      <IndustrySlider/>

      <KeyStatistics/>

      <GlobalTalentGateway/>

      <TestimonialSlider/>

      <FaqSection/>

      <OysterCta/>

      

    <NovotionFooter/>

    </>
  );
}
