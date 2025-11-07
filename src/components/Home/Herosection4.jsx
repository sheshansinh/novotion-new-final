'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const NovotionHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef(null);

  const slides = [
    {
      title: "Transform Your",
      highlight: "Workforce",
      subtitle: "Elite Recruitment Solutions",
      description: "Connect with exceptional talent across UK & USA markets through our AI-powered recruitment platform. Where innovation meets human expertise.",
      buttonText: "Discover Excellence",
      buttonLink: "/services",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      stats: ["500+ Organizations", "98% Success Rate", "24/7 Support"]
    },
    {
      title: "Global Talent",
      highlight: "Gateway", 
      subtitle: "Borderless Recruitment",
      description: "Break geographical barriers with our multi-region operational support. Access premium talent pools across UK, USA, and emerging markets.",
      buttonText: "Expand Globally",
      buttonLink: "/about",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2940&auto=format&fit=crop",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      stats: ["10K+ Professionals", "15+ Industries", "Global Reach"]
    },
    {
      title: "Future-Ready",
      highlight: "Teams",
      subtitle: "Strategic Workforce Planning",
      description: "Build resilient, innovative teams with our comprehensive recruitment process outsourcing and career support ecosystem.",
      buttonText: "Build Tomorrow",
      buttonLink: "/hire",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop",
      gradient: "from-emerald-500 via-teal-500 to-emerald-600",
      stats: ["95% Retention", "Fast Deployment", "End-to-End Support"]
    }
  ];

  const nextSlide = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsVisible(false);
    
    await new Promise(resolve => setTimeout(resolve, 400));
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    
    setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(false);
    }, 100);
  };

  const prevSlide = async () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsVisible(false);
    
    await new Promise(resolve => setTimeout(resolve, 400));
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    
    setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(false);
    }, 100);
  };

  const goToSlide = async (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setIsVisible(false);
    
    await new Promise(resolve => setTimeout(resolve, 400));
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(false);
    }, 100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  const currentSlideData = slides[currentSlide];

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gray-950 text-white"
    >
      {/* Background Images with Smooth Transitions */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentSlideData.image}
              alt={currentSlideData.title}
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
            />
            {/* Enhanced Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient} opacity-70 mix-blend-multiply`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-gray-900/90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-transparent to-gray-900/80"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            backgroundPosition: 'center center'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            initial={{ 
              opacity: 0,
              scale: 0 
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              {isVisible && (
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="space-y-8 md:space-y-12"
                >
                  
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                  >
                    <div className="flex space-x-1">
                      {[0, 1, 2].map(i => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            delay: i * 0.2 
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-white tracking-wider">
                      {currentSlideData.subtitle}
                    </span>
                  </motion.div>

                  {/* Main Title */}
                  <div className="space-y-4">
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                    >
                      <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {currentSlideData.title}
                      </span>
                      <br />
                      <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {currentSlideData.highlight}
                      </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl"
                    >
                      {currentSlideData.description}
                    </motion.p>
                  </div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link
                      href={currentSlideData.buttonLink}
                      className="group relative px-8 py-4 bg-white text-gray-900 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        {currentSlideData.buttonText}
                        <motion.svg
                          className="w-5 h-5"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </motion.svg>
                      </span>
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.gradient} opacity-0 group-hover:opacity-100`}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>

                    <button className="group px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105">
                      <span className="flex items-center gap-3">
                        Watch Demo
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </button>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-wrap gap-8 pt-8 border-t border-white/20"
                  >
                    {currentSlideData.stats.map((stat, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentSlideData.gradient}`} />
                        <span className="text-gray-200 font-semibold">{stat}</span>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group relative transition-all duration-300 rounded-full cursor-pointer ${
              index === currentSlide
                ? 'w-8 h-2 bg-white shadow-lg'
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <motion.div
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentSlideData.gradient}`}
                layoutId="activeDot"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-lg"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-white/20">
        <motion.div
          key={currentSlide}
          className="h-full bg-gradient-to-r from-white to-gray-300"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default NovotionHero;