import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedSection from './AnimatedSection';
import { ShoppingCart, Clock, Star, Users, Package2, Zap } from 'lucide-react';

const PickupServicesSection = () => {
  const pickupServices = [
    {
      name: 'Walmart',
      logo: '/images/logos/Walmart_logo.svg',
      description: 'Efficient pickup services from Walmart stores with optimized routing and scheduling.',
      features: [
        { icon: <ShoppingCart size={16} />, text: 'Grocery Pickup' },
        { icon: <Clock size={16} />, text: 'Same Day Service' },
        { icon: <Star size={16} />, text: 'Everyday Low Prices' }
      ]
    },
    {
      name: 'Target',
      logo: '/images/logos/Target.png',
      description: 'Streamlined Target store pickup with real-time inventory verification and quick turnaround.',
      features: [
        { icon: <Package2 size={16} />, text: 'Order Pickup' },
        { icon: <Zap size={16} />, text: 'Drive Up Service' },
        { icon: <Users size={16} />, text: 'RedCard Benefits' }
      ]
    },
    {
      name: 'Sam\'s Club',
      logo: '/images/logos/samsclub.png',
      description: 'Bulk order pickup from Sam\'s Club with specialized handling for large and heavy items.',
      features: [
        { icon: <Package2 size={16} />, text: 'Bulk Orders' },
        { icon: <Users size={16} />, text: 'Member Pricing' },
        { icon: <Clock size={16} />, text: 'Curbside Pickup' }
      ]
    },
    {
      name: 'BJ\'s',
      logo: '/images/logos/bjs.png',
      description: 'Comprehensive BJ\'s Wholesale Club pickup services with temperature-controlled transport options.',
      features: [
        { icon: <ShoppingCart size={16} />, text: 'Wholesale Club' },
        { icon: <Star size={16} />, text: 'Member Exclusive' },
        { icon: <Zap size={16} />, text: 'Express Pickup' }
      ]
    }
  ];

  return (
    <section className="pickup-services">
      <div className="container">
        <SectionTitle 
          title="Retail Pickup Services" 
          subtitle="Fast and reliable pickup from major retailers" 
        />
        
        <div className="text-banner">
          <div className="text-banner-content">
            <span>WALMART</span>
            <span>•</span>
            <span>TARGET</span>
            <span>•</span>
            <span>SAM'S CLUB</span>
            <span>•</span>
            <span>BJ'S</span>
            <span>•</span>
            <span>WALMART</span>
            <span>•</span>
            <span>TARGET</span>
            <span>•</span>
            <span>SAM'S CLUB</span>
            <span>•</span>
            <span>BJ'S</span>
          </div>
        </div>
        
        <div className="marquee-container">
          <div className="marquee">
            {[...pickupServices, ...pickupServices].map((service, index) => (
              <AnimatedSection 
                key={`${service.name}-${index}`} 
                className="pickup-item"
                delay={`${index * 100}`}
              >
                <div className="pickup-logo-small">
                  <img 
                    src={service.logo} 
                    alt={`${service.name} logo`} 
                  />
                </div>
                <h3>{service.name}</h3>
              </AnimatedSection>
            ))}
          </div>
        </div>
        
        <div className="pickup-grid">
          {pickupServices.map((service, index) => (
            <AnimatedSection 
              key={service.name} 
              className="pickup-card"
              delay={`${index * 150}`}
            >
              <div className="pickup-logo">
                <img src={service.logo} alt={`${service.name} logo`} className="animated-pickup-logo" />
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="pickup-features">
                {service.features.map((feature, featureIndex) => (
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

export default PickupServicesSection;