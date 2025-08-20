import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Rocket, Star, ArrowDown } from 'lucide-react';

const AnimatedLanding = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(false);

  const steps = [
    {
      title: "Welcome to the Future",
      subtitle: "of Logistics",
      description: "Where innovation meets excellence",
      emoji: "🚀",
      color: "#667eea"
    },
    {
      title: "Essentials 3PL",
      subtitle: "Your Success Partner",
      description: "Transforming supply chains worldwide",
      emoji: "✨",
      color: "#764ba2"
    },
    {
      title: "Ready to Discover",
      subtitle: "Something Amazing?",
      description: "Let's explore what makes us different",
      emoji: "🌟",
      color: "#f093fb"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowScrollHint(true);
        setTimeout(() => {
          onComplete();
        }, 2000);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  const handleScroll = () => {
    onComplete();
  };

  return (
    <motion.div
      className="animated-landing"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
    >
      <div className="landing-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            className="landing-step"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.2, y: -50 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div
              className="step-emoji"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              {steps[currentStep].emoji}
            </motion.div>
            
            <motion.h1
              className="step-title"
              style={{ color: steps[currentStep].color }}
              animate={{ 
                textShadow: [
                  `0 0 20px ${steps[currentStep].color}40`,
                  `0 0 40px ${steps[currentStep].color}60`,
                  `0 0 20px ${steps[currentStep].color}40`
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {steps[currentStep].title}
            </motion.h1>
            
            <motion.h2
              className="step-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {steps[currentStep].subtitle}
            </motion.h2>
            
            <motion.p
              className="step-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {steps[currentStep].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {showScrollHint && (
          <motion.div
            className="scroll-hint"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onClick={handleScroll}
          >
            <motion.div
              className="scroll-text"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Sparkles size={20} />
              <span>Scroll to discover the magic</span>
              <Sparkles size={20} />
            </motion.div>
            <motion.div
              className="scroll-arrow"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <ChevronDown size={30} />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Floating particles */}
      <div className="landing-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: steps[currentStep].color,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Progress indicator */}
      <div className="progress-indicator">
        {steps.map((_, index) => (
          <motion.div
            key={index}
            className={`progress-dot ${index <= currentStep ? 'active' : ''}`}
            animate={{
              scale: index === currentStep ? 1.5 : 1,
              backgroundColor: index <= currentStep ? steps[currentStep].color : '#ffffff40'
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AnimatedLanding;