
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// 3D Hover Card Component
const Card3D = ({ children, className = '', accentColor }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate rotation based on mouse position
    const rotateY = (mouseX / (rect.width / 2)) * 4;
    const rotateX = (mouseY / (rect.height / 2)) * -4;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
        scale: isHovering ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 15,
        mass: 0.5
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Background layers for depth */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 transform rotate-3 transition-all duration-300" />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 transform -rotate-3 transition-all duration-300" />
      
      {/* Main card content */}
      <div 
        className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/70 rounded-3xl backdrop-blur-md border border-white/20 p-8 h-full flex items-center justify-center"
        style={{
          transform: 'translateZ(20px)',
        }}
      >
        {/* Shine effect */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${(rotate.y + 10) * 5 + 50}% ${(rotate.x + 10) * 5 + 50}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
            opacity: isHovering ? 1 : 0,
          }}
        />
        
        {children}
      </div>
    </motion.div>
  );
};

const NovotionHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const totalSlides = 3;

  const slides = [
    {
      title: "Transform Your Workforce",
      subtitle: "Elite Recruitment Solutions",
      description:
        "Connect with exceptional talent across UK & USA markets through our AI-powered recruitment platform. Where innovation meets human expertise.",
      buttonText: "Discover Excellence",
      buttonLink: "/services",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop",
      accentColor: "from-blue-400 to-cyan-300",
      icon: (
        <svg className="w-10 h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Global Talent Gateway",
      subtitle: "Borderless Recruitment", 
      description:
        "Break geographical barriers with our multi-region operational support. Access premium talent pools across UK, USA, and emerging markets.",
      buttonText: "Expand Globally",
      buttonLink: "/about",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2940&auto=format&fit=crop",
      accentColor: "from-purple-400 to-pink-300",
      icon: (
        <svg className="w-10 h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Future-Ready Teams", 
      subtitle: "Strategic Workforce Planning",
      description:
        "Build resilient, innovative teams with our comprehensive recruitment process outsourcing and career support ecosystem.",
      buttonText: "Build Tomorrow",
      buttonLink: "/hire",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop", 
      accentColor: "from-emerald-400 to-teal-300",
      icon: (
        <svg className="w-10 h-10 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const autoPlay = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(autoPlay);
  }, [currentSlide]);

  const currentSlideData = slides[currentSlide];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gray-950 text-white select-none"
    >
      {/* Animated Background Layers */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <Image
              src={slide.image}
              alt={`Hero background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-gray-900/90"></div>
          </div>
        ))}
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center h-full">
            
            {/* Left Content */}
            <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Badge */}
                <div
                  className={`inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transform transition-all duration-700 ${
                    isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
                  }`}
                  style={{ transitionDelay: '100ms' }}
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentSlideData.accentColor} mr-3 animate-pulse`}></div>
                  <span className="text-sm md:text-base font-medium text-gray-200 tracking-wide">
                    {currentSlideData.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h1
                  className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight transform transition-all duration-700 ${
                    isAnimating ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    {currentSlideData.title.split(' ').slice(0, 2).join(' ')}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                    {currentSlideData.title.split(' ').slice(2).join(' ')}
                  </span>
                </h1>

                {/* Description */}
                <p
                  className={`text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 transform transition-all duration-700 ${
                    isAnimating ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
                  }`}
                  style={{ transitionDelay: '300ms' }}
                >
                  {currentSlideData.description}
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transform transition-all duration-700 ${
                  isAnimating ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <Link 
                  href={currentSlideData.buttonLink}
                  className={`group relative px-8 py-4 bg-gradient-to-r ${currentSlideData.accentColor} text-gray-900 font-semibold rounded-xl text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {currentSlideData.buttonText}
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
                
                <button className="group relative px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:border-white/50 backdrop-blur-sm">
                  <span className="relative z-10">Watch Demo</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Stats */}
              <div
                className={`flex flex-wrap gap-6 lg:gap-8 justify-center lg:justify-start pt-6 border-t border-white/10 transform transition-all duration-700 ${
                  isAnimating ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                {[
                  { number: '500+', label: 'Organizations' },
                  { number: '10K+', label: 'Professionals' },
                  { number: '98%', label: 'Success Rate' }
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${currentSlideData.accentColor} bg-clip-text text-transparent`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual with 3D Hover */}
            <div className="hidden lg:flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-md"
              >
                <Card3D 
                  className="aspect-square" 
                  accentColor={currentSlideData.accentColor}
                >
                  <div className="text-center space-y-6">
                    {/* Icon */}
                    <motion.div 
                      className={`w-20 h-20 mx-auto bg-gradient-to-r ${currentSlideData.accentColor} rounded-2xl flex items-center justify-center`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                    >
                      {currentSlideData.icon}
                    </motion.div>

                    {/* Text Content */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Global Excellence</h3>
                      <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto">
                        Premium talent solutions with seamless cross-border execution and support
                      </p>
                    </div>

                    {/* Animated Dots */}
                    <div className="flex justify-center space-x-2">
                      {[0, 1, 2].map((index) => (
                        <motion.div
                          key={index}
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentSlideData.accentColor}`}
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: index * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === currentSlide
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Side Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default NovotionHero;
