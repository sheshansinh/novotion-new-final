'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const NovotionHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Elite Talent",
      subtitle: "Global Recruitment",
      description: "Connecting exceptional talent with visionary companies across UK, USA, and emerging markets through AI-powered precision.",
      cta: "Hire Talent",
      link: "/hire",
      gradient: "from-blue-500 to-cyan-400",
      badge: "98% Success Rate"
    },
    {
      title: "Strategic Workforce",
      subtitle: "Future-Ready Solutions",
      description: "Build resilient, innovative teams with our comprehensive recruitment process outsourcing and career support ecosystem.",
      cta: "Explore Services",
      link: "/services",
      gradient: "from-purple-500 to-pink-400",
      badge: "500+ Partners"
    },
    {
      title: "Borderless Excellence",
      subtitle: "Global Operations",
      description: "Break geographical barriers with our multi-region operational support and premium talent acquisition strategies.",
      cta: "Learn More",
      link: "/about",
      gradient: "from-emerald-500 to-teal-400",
      badge: "10K+ Placements"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-gray-950 to-gray-950"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 bg-gradient-to-r ${currentSlideData.gradient}`}
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 25}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8 lg:space-y-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentSlideData.gradient}`}></div>
                    <span className="text-sm font-medium text-gray-300 tracking-wide">
                      {currentSlideData.badge}
                    </span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {currentSlideData.title}
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
                      {currentSlideData.subtitle}
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {currentSlideData.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href={currentSlideData.link}
                  className={`group relative px-8 py-4 bg-gradient-to-r ${currentSlideData.gradient} text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {currentSlideData.cta}
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="group relative px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-gray-400 hover:text-white hover:scale-105"
                >
                  <span className="relative z-10">Schedule Call</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800 max-w-md mx-auto lg:mx-0">
                {[
                  { value: '24h', label: 'Response Time' },
                  { value: '15+', label: 'Industries' },
                  { value: '95%', label: 'Retention' }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${currentSlideData.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl backdrop-blur-xl border border-gray-700/50 p-8 aspect-square flex items-center justify-center">
                  
                  {/* Floating Elements */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-4 h-4 rounded-full bg-gradient-to-r ${currentSlideData.gradient}`}
                        animate={{
                          y: [0, -30, 0],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                        style={{
                          left: `${20 + (i * 15)}%`,
                          top: `${10 + (i * 12)}%`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Central Icon */}
                  <motion.div
                    className={`w-32 h-32 rounded-2xl bg-gradient-to-r ${currentSlideData.gradient} flex items-center justify-center`}
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </motion.div>

                  {/* Orbiting Elements */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-6 h-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        x: Math.cos((i * Math.PI) / 2) * 120,
                        y: Math.sin((i * Math.PI) / 2) * 120,
                      }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentSlideData.gradient}`} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? `bg-gradient-to-r ${currentSlideData.gradient} w-6` 
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-sm text-gray-500 rotate-90 origin-bottom-left whitespace-nowrap mb-20">
          Scroll to explore
        </div>
      </motion.div>
    </div>
  );
};

export default NovotionHero;