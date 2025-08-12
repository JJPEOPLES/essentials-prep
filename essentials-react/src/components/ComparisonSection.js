import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  Crown, 
  Zap, 
  Shield, 
  Clock, 
  Award,
  TrendingUp,
  Users,
  Sparkles,
  Rocket
} from 'lucide-react';

const ComparisonSection = () => {
  const [activeTab, setActiveTab] = useState('features');

  const comparisonData = {
    features: [
      {
        feature: '24/7 Customer Support',
        us: true,
        competitor1: true, // FedEx has 24/7 support
        competitor2: true, // UPS has 24/7 support
        competitor3: true, // DHL has 24/7 support
        icon: <Clock size={20} />
      },
      {
        feature: 'Real-time Tracking',
        us: true,
        competitor1: true, // FedEx has tracking
        competitor2: true, // UPS has tracking
        competitor3: true, // DHL has tracking
        icon: <Zap size={20} />
      },
      {
        feature: 'AI-Powered Analytics',
        us: true,
        competitor1: false, // FedEx limited AI analytics
        competitor2: false, // UPS limited AI analytics
        competitor3: false, // DHL limited AI analytics
        icon: <TrendingUp size={20} />
      },
      {
        feature: 'Same-Day Delivery',
        us: true,
        competitor1: true, // FedEx SameDay
        competitor2: false, // UPS limited same-day
        competitor3: false, // DHL limited same-day domestic
        icon: <Zap size={20} />
      },
      {
        feature: 'Climate-Controlled Storage',
        us: true,
        competitor1: true, // FedEx has cold chain
        competitor2: true, // UPS has healthcare logistics
        competitor3: true, // DHL has temperature control
        icon: <Shield size={20} />
      },
      {
        feature: 'Custom Integration APIs',
        us: true,
        competitor1: false, // FedEx limited API customization
        competitor2: false, // UPS limited API customization
        competitor3: false, // DHL limited API customization
        icon: <Award size={20} />
      },
      {
        feature: 'Dedicated Account Manager',
        us: true,
        competitor1: false, // FedEx only for enterprise
        competitor2: false, // UPS only for enterprise
        competitor3: false, // DHL only for enterprise
        icon: <Users size={20} />
      },
      {
        feature: 'Small Business Friendly',
        us: true,
        competitor1: false, // FedEx focuses on enterprise
        competitor2: false, // UPS focuses on enterprise
        competitor3: false, // DHL focuses on enterprise
        icon: <Star size={20} />
      }
    ],
    pricing: [
      {
        feature: 'Setup Fee',
        us: '$0',
        competitor1: '$2,500', // FedEx enterprise setup
        competitor2: '$1,500', // UPS setup fees
        competitor3: '$3,000'  // DHL international setup
      },
      {
        feature: 'Monthly Base Fee',
        us: '$199',
        competitor1: '$500+', // FedEx minimum monthly
        competitor2: '$400+', // UPS minimum monthly
        competitor3: '$600+'  // DHL minimum monthly
      },
      {
        feature: 'Pick & Pack Fee',
        us: '$2.50',
        competitor1: '$4.50', // FedEx fulfillment
        competitor2: '$3.75', // UPS fulfillment
        competitor3: '$5.25'  // DHL fulfillment
      },
      {
        feature: 'Storage (per sq ft)',
        us: '$0.85',
        competitor1: '$1.25', // FedEx warehouse rates
        competitor2: '$1.10', // UPS warehouse rates
        competitor3: '$1.45'  // DHL warehouse rates
      },
      {
        feature: 'Minimum Volume',
        us: '100 orders/mo',
        competitor1: '1,000+', // FedEx minimum
        competitor2: '500+',   // UPS minimum
        competitor3: '2,000+'  // DHL minimum
      }
    ]
  };

  const companies = [
    { 
      name: 'Essentials 3PL', 
      logo: '🚀', 
      color: '#667eea',
      highlight: true,
      badge: 'BEST VALUE'
    },
    { 
      name: 'FedEx Supply Chain', 
      logo: '📦', 
      color: '#4B0082',
      highlight: false 
    },
    { 
      name: 'UPS Supply Chain', 
      logo: '🚛', 
      color: '#8B4513',
      highlight: false 
    },
    { 
      name: 'DHL Supply Chain', 
      logo: '✈️', 
      color: '#FFD700',
      highlight: false 
    }
  ];

  const tabs = [
    { id: 'features', label: '✨ Features', icon: <Star size={20} /> },
    { id: 'pricing', label: '💰 Pricing', icon: <TrendingUp size={20} /> }
  ];

  return (
    <section className="comparison-section">
      <div className="container">
        <motion.div
          className="comparison-header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>
            <Crown size={40} style={{ display: 'inline', marginRight: '10px', color: '#ffd700' }} />
            Why Choose Essentials 3PL?
            <Crown size={40} style={{ display: 'inline', marginLeft: '10px', color: '#ffd700' }} />
          </h2>
          <p>See how we compare against industry giants like FedEx, UPS, and DHL! 🏆</p>
        </motion.div>

        <div className="comparison-tabs">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              className={`comparison-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="comparison-table"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header Row */}
          <div className="comparison-header-row">
            <div className="feature-column">
              <h3>{activeTab === 'features' ? '🎯 Features' : '💵 Pricing'}</h3>
            </div>
            {companies.map((company, index) => (
              <motion.div
                key={index}
                className={`company-column ${company.highlight ? 'highlight' : ''}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="company-logo">{company.logo}</div>
                <h4>{company.name}</h4>
                {company.badge && (
                  <motion.div
                    className="company-badge"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity
                    }}
                  >
                    <Sparkles size={12} />
                    {company.badge}
                    <Sparkles size={12} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Data Rows */}
          {comparisonData[activeTab].map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="comparison-row"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: rowIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            >
              <div className="feature-column">
                <div className="feature-info">
                  {row.icon && <span className="feature-icon">{row.icon}</span>}
                  <span>{row.feature}</span>
                </div>
              </div>
              
              {/* Desktop View */}
              <div className="desktop-comparison">
                {activeTab === 'features' ? (
                  <>
                    <div className="company-column highlight">
                      <motion.div
                        className="feature-value"
                        animate={row.us ? { scale: [1, 1.2, 1] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {row.us ? (
                          <Check size={24} className="check-icon" />
                        ) : (
                          <X size={24} className="x-icon" />
                        )}
                      </motion.div>
                    </div>
                    <div className="company-column">
                      <div className="feature-value">
                        {row.competitor1 ? (
                          <Check size={24} className="check-icon-gray" />
                        ) : (
                          <X size={24} className="x-icon" />
                        )}
                      </div>
                    </div>
                    <div className="company-column">
                      <div className="feature-value">
                        {row.competitor2 ? (
                          <Check size={24} className="check-icon-gray" />
                        ) : (
                          <X size={24} className="x-icon" />
                        )}
                      </div>
                    </div>
                    <div className="company-column">
                      <div className="feature-value">
                        {row.competitor3 ? (
                          <Check size={24} className="check-icon-gray" />
                        ) : (
                          <X size={24} className="x-icon" />
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="company-column highlight">
                      <motion.div
                        className="price-value best-price"
                        whileHover={{ scale: 1.1 }}
                      >
                        {row.us}
                      </motion.div>
                    </div>
                    <div className="company-column">
                      <div className="price-value">{row.competitor1}</div>
                    </div>
                    <div className="company-column">
                      <div className="price-value">{row.competitor2}</div>
                    </div>
                    <div className="company-column">
                      <div className="price-value">{row.competitor3}</div>
                    </div>
                  </>
                )}
              </div>

              {/* Mobile View */}
              <div className="mobile-comparison-grid">
                <div className="mobile-company-item highlight">
                  <div className="mobile-company-name">
                    <span>🚀</span>
                    <span>Essentials 3PL</span>
                  </div>
                  <div className="mobile-company-value">
                    {activeTab === 'features' ? (
                      row.us ? (
                        <Check size={20} className="check-icon" />
                      ) : (
                        <X size={20} className="x-icon" />
                      )
                    ) : (
                      <span className="best-price">{row.us}</span>
                    )}
                  </div>
                </div>
                
                <div className="mobile-company-item">
                  <div className="mobile-company-name">
                    <span>📦</span>
                    <span>FedEx</span>
                  </div>
                  <div className="mobile-company-value">
                    {activeTab === 'features' ? (
                      row.competitor1 ? (
                        <Check size={20} className="check-icon-gray" />
                      ) : (
                        <X size={20} className="x-icon" />
                      )
                    ) : (
                      <span>{row.competitor1}</span>
                    )}
                  </div>
                </div>
                
                <div className="mobile-company-item">
                  <div className="mobile-company-name">
                    <span>🚛</span>
                    <span>UPS</span>
                  </div>
                  <div className="mobile-company-value">
                    {activeTab === 'features' ? (
                      row.competitor2 ? (
                        <Check size={20} className="check-icon-gray" />
                      ) : (
                        <X size={20} className="x-icon" />
                      )
                    ) : (
                      <span>{row.competitor2}</span>
                    )}
                  </div>
                </div>
                
                <div className="mobile-company-item">
                  <div className="mobile-company-name">
                    <span>✈️</span>
                    <span>DHL</span>
                  </div>
                  <div className="mobile-company-value">
                    {activeTab === 'features' ? (
                      row.competitor3 ? (
                        <Check size={20} className="check-icon-gray" />
                      ) : (
                        <X size={20} className="x-icon" />
                      )
                    ) : (
                      <span>{row.competitor3}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="comparison-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>🎉 Ready to Experience the Difference?</h3>
          <p>Join thousands of satisfied customers who chose the best! 🌟</p>
          <motion.button
            className="comparison-cta-button"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(102, 126, 234, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket size={20} />
            Get Started Today - FREE Setup!
            <Sparkles size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;