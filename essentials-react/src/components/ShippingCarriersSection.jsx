import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedSection from './AnimatedSection';
import { Truck, Package, Clock, Shield, MapPin, CheckCircle } from 'lucide-react';

const ShippingCarriersSection = () => {
  const carriers = [
    {
      name: 'USPS',
      logo: '/images/carriers/usps.png',
      description: 'Reliable nationwide delivery with competitive rates and comprehensive tracking.',
      features: [
        { icon: <Package size={16} />, text: 'Priority Mail' },
        { icon: <Clock size={16} />, text: '1-3 Business Days' },
        { icon: <Shield size={16} />, text: 'Insurance Available' }
      ]
    },
    {
      name: 'UPS',
      logo: '/images/carriers/ups.png',
      description: 'Premium shipping services with guaranteed delivery times and advanced logistics.',
      features: [
        { icon: <Truck size={16} />, text: 'Ground & Air' },
        { icon: <MapPin size={16} />, text: 'Real-time Tracking' },
        { icon: <CheckCircle size={16} />, text: 'Guaranteed Delivery' }
      ]
    },
    {
      name: 'FedEx',
      logo: '/images/carriers/fedex.png',
      description: 'Express delivery solutions with real-time tracking and signature confirmation.',
      features: [
        { icon: <Clock size={16} />, text: 'Overnight Available' },
        { icon: <Shield size={16} />, text: 'Signature Required' },
        { icon: <Package size={16} />, text: 'Express Services' }
      ]
    },
    {
      name: 'DHL',
      logo: '/images/carriers/dhl.png',
      description: 'International shipping expertise with global reach and customs handling.',
      features: [
        { icon: <MapPin size={16} />, text: 'Global Network' },
        { icon: <Truck size={16} />, text: 'Customs Handling' },
        { icon: <CheckCircle size={16} />, text: 'International Express' }
      ]
    }
  ];

  return (
    <section className="shipping-carriers">
      <div className="container">
        <SectionTitle 
          title="Shipping Carriers We Support" 
          subtitle="Reliable delivery through trusted partners" 
        />
        
        <div className="text-banner">
          <div className="text-banner-content">
            <span>USPS</span>
            <span>•</span>
            <span>UPS</span>
            <span>•</span>
            <span>FEDEX</span>
            <span>•</span>
            <span>DHL</span>
            <span>•</span>
            <span>USPS</span>
            <span>•</span>
            <span>UPS</span>
            <span>•</span>
            <span>FEDEX</span>
            <span>•</span>
            <span>DHL</span>
          </div>
        </div>
        
        <div className="marquee-container">
          <div className="marquee">
            {[...carriers, ...carriers].map((carrier, index) => (
              <AnimatedSection 
                key={`${carrier.name}-${index}`} 
                className="carrier-item"
                delay={`${index * 100}`}
              >
                <div className="carrier-logo-small">
                  <img 
                    src={carrier.logo} 
                    alt={`${carrier.name} logo`} 
                  />
                </div>
                <h3>{carrier.name}</h3>
              </AnimatedSection>
            ))}
          </div>
        </div>
        
        <div className="carriers-grid">
          {carriers.map((carrier, index) => (
            <AnimatedSection 
              key={carrier.name} 
              className="carrier-card"
              delay={`${index * 150}`}
            >
              <div className="carrier-logo">
                <img src={carrier.logo} alt={`${carrier.name} logo`} className="animated-carrier-logo" />
              </div>
              <h3>{carrier.name}</h3>
              <p>{carrier.description}</p>
              <div className="carrier-features">
                {carrier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <span className="feature-icon">{feature.icon}</span>
                    <span className="feature-text">{feature.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShippingCarriersSection;