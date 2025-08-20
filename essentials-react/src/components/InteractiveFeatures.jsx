import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Warehouse, 
  Truck, 
  Package, 
  BarChart3, 
  Zap, 
  Shield,
  Clock,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Sparkles
} from 'lucide-react';

const InteractiveFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: '🏭 Smart Warehousing',
      icon: <Warehouse size={60} />,
      description: 'AI-powered inventory management with real-time tracking and automated optimization.',
      details: [
        'Automated inventory tracking',
        'Smart space optimization',
        'Real-time stock alerts',
        'Climate-controlled storage'
      ],
      color: '#2196f3',
      gradient: 'linear-gradient(135deg, #2196f3, #21cbf3)'
    },
    {
      id: 1,
      title: '⚡ Lightning Delivery',
      icon: <Truck size={60} />,
      description: 'Ultra-fast delivery network with GPS tracking and predictive routing algorithms.',
      details: [
        'Same-day delivery options',
        'Real-time GPS tracking',
        'Predictive route optimization',
        'Multi-carrier integration'
      ],
      color: '#4caf50',
      gradient: 'linear-gradient(135deg, #4caf50, #8bc34a)'
    },
    {
      id: 2,
      title: '📦 Package Intelligence',
      icon: <Package size={60} />,
      description: 'Advanced package handling with damage prevention and smart sorting systems.',
      details: [
        'Automated sorting systems',
        'Damage prevention protocols',
        'Smart packaging solutions',
        'Quality assurance checks'
      ],
      color: '#ff9800',
      gradient: 'linear-gradient(135deg, #ff9800, #ffc107)'
    },
    {
      id: 3,
      title: '📊 Analytics Dashboard',
      icon: <BarChart3 size={60} />,
      description: 'Comprehensive analytics with predictive insights and performance metrics.',
      details: [
        'Real-time performance metrics',
        'Predictive analytics',
        'Custom reporting tools',
        'Business intelligence insights'
      ],
      color: '#9c27b0',
      gradient: 'linear-gradient(135deg, #9c27b0, #e91e63)'
    }
  ];

  const benefits = [
    { icon: <Zap size={24} />, text: '⚡ 99.9% Uptime Guarantee' },
    { icon: <Shield size={24} />, text: '🛡️ Military-Grade Security' },
    { icon: <Clock size={24} />, text: '🕐 24/7 Expert Support' },
    { icon: <Globe size={24} />, text: '🌍 Global Network Coverage' }
  ];

  return (
    <section className="interactive-features">
      <div className="container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2><Sparkles size={40} style={{ display: 'inline', marginRight: '10px' }} />Revolutionary Logistics Solutions<Sparkles size={40} style={{ display: 'inline', marginLeft: '10px' }} /></h2>
          <p>Experience the future of supply chain management with our cutting-edge technology! 🚀</p>
        </motion.div>

        <div className="features-container">
          <div className="features-tabs">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className={`feature-tab ${activeFeature === index ? 'active' : ''}`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: activeFeature === index ? feature.gradient : 'transparent'
                }}
              >
                <div className="tab-icon" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="features-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                className="feature-display"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="feature-visual">
                  <motion.div
                    className="feature-icon-large"
                    style={{ 
                      background: features[activeFeature].gradient,
                      color: 'white'
                    }}
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    {features[activeFeature].icon}
                  </motion.div>
                  
                  <div className="feature-particles">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="particle"
                        style={{ backgroundColor: features[activeFeature].color }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0.3, 1, 0.3],
                          scale: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="feature-info">
                  <h3>{features[activeFeature].title}</h3>
                  <p>{features[activeFeature].description}</p>
                  
                  <div className="feature-details">
                    {features[activeFeature].details.map((detail, index) => (
                      <motion.div
                        key={index}
                        className="detail-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle size={16} style={{ color: features[activeFeature].color }} />
                        <span>{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className="feature-cta"
                    style={{ 
                      background: features[activeFeature].gradient 
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          className="benefits-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-item"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
              }}
            >
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              <span>{benefit.text}</span>
              <div className="benefit-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveFeatures;