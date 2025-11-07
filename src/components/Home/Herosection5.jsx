'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Herosection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 8;
      const y = (clientY / innerHeight - 0.5) * 8;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { number: "500+", label: "Global Clients" },
    { number: "10K+", label: "Successful Placements" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "25+", label: "Countries Served" }
  ];

  const floatingCards = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "AI Matching",
      description: "Smart candidate selection",
      gradient: "from-blue-500 to-cyan-500",
      position: "top-right"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      title: "Global Network",
      description: "25+ countries",
      gradient: "from-purple-500 to-pink-500",
      position: "bottom-left"
    }
  ];

  return (
    <div ref={heroRef} className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[100, 60, 120].map((size, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gradient-to-br from-blue-500/5 to-purple-600/5 backdrop-blur-sm border border-white/5"
            style={{
              width: size,
              height: size,
              left: [15, 80, 65][index] + '%',
              top: [25, 55, 20][index] + '%',
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: [6, 8, 10][index],
              delay: [0, 1, 2][index],
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl h-full flex items-center">
        <div className="w-full py-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              className="space-y-6 lg:space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-xs font-medium text-gray-300 tracking-wide">
                  Enterprise Talent Solutions
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-4">
                <motion.h1
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Build Your Future
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    With Elite Talent
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Transform your organization with our curated network of top-tier professionals. 
                  Leverage cutting-edge AI matching and global recruitment expertise.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Link
                  href="/hire"
                  className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg text-base overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Hire Top Talent
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>

                <Link
                  href="/services"
                  className="group relative px-6 py-3 border border-white/20 text-white font-semibold rounded-lg text-base overflow-hidden backdrop-blur-sm hover:border-white/40 transition-all duration-300"
                >
                  <span className="relative z-10">Explore Services</span>
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="hidden lg:flex items-center justify-center relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div 
                className="relative w-full max-w-md"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Main Gradient Orb */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl"
                  animate={{
                    scale: isHovered ? 1.2 : 1,
                    rotate: isHovered ? 180 : 0,
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut"
                  }}
                />

                {/* Floating Cards */}
                {floatingCards.map((card, index) => (
                  <motion.div
                    key={card.position}
                    className={`absolute ${
                      card.position === 'top-right' 
                        ? '-top-6 -right-6 w-36 h-36' 
                        : '-bottom-6 -left-6 w-32 h-32'
                    } bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-4 cursor-pointer group`}
                    animate={{
                      y: card.position === 'top-right' ? [0, -15, 0] : [0, 15, 0],
                      rotateZ: card.position === 'top-right' ? [0, 3, 0] : [0, -3, 0],
                    }}
                    transition={{
                      duration: card.position === 'top-right' ? 5 : 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 2
                    }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderColor: "rgba(255,255,255,0.3)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="space-y-2">
                      <motion.div 
                        className={`w-8 h-8 bg-gradient-to-r ${card.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {card.icon}
                      </motion.div>
                      <h4 className="font-semibold text-white text-sm group-hover:text-cyan-200 transition-colors duration-200">
                        {card.title}
                      </h4>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Central Element */}
                <motion.div
                  className="relative z-10 w-56 h-56 mx-auto bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 flex items-center justify-center cursor-pointer"
                  whileHover={{ 
                    scale: 1.08,
                    backgroundColor: "rgba(255,255,255,0.08)",
                    borderColor: "rgba(255,255,255,0.2)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className="text-center space-y-3"
                    animate={{
                      y: isHovered ? -5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-14 h-14 mx-auto bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center group"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                    >
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </motion.div>
                    <motion.h3 
                      className="text-lg font-bold text-white"
                      animate={{
                        background: isHovered 
                          ? "linear-gradient(to right, #60a5fa, #06b6d4)"
                          : "none",
                        backgroundClip: isHovered ? "text" : "none",
                        color: isHovered ? "transparent" : "#ffffff"
                      }}
                    >
                      Talent Excellence
                    </motion.h3>
                    <motion.p 
                      className="text-xs text-gray-400 px-3"
                      animate={{
                        color: isHovered ? "#d1d5db" : "#9ca3af"
                      }}
                    >
                      Connecting exceptional talent with visionary companies
                    </motion.p>
                  </motion.div>
                  
                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 pointer-events-none"
                    animate={{
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Interactive Particles on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-cyan-400/50 pointer-events-none"
                          initial={{ 
                            scale: 0, 
                            opacity: 0,
                            x: 0,
                            y: 0
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            x: Math.cos(i * 60) * 40,
                            y: Math.sin(i * 60) * 40
                          }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.1,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center space-y-1">
          <span className="text-xs text-gray-400 font-medium">Scroll to explore</span>
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-white rounded-full mt-1"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Herosection;