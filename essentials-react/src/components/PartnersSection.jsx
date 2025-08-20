import React from 'react';
import SectionTitle from './SectionTitle';
import AnimatedSection from './AnimatedSection';

const PartnersSection = () => {
  const partners = [
    { 
      name: 'Amazon', 
      logo: '/images/logos/Amazon_logo.svg',
      description: 'Full integration with Amazon marketplace for seamless order fulfillment and inventory management.'
    },
    { 
      name: 'eBay', 
      logo: '/images/logos/EBay_logo.svg',
      description: 'Streamlined eBay order processing and shipping label generation for faster delivery times.'
    },
    { 
      name: 'Shopify', 
      logo: '/images/logos/Shopify_logo_2018.svg',
      description: 'Complete Shopify store integration with real-time inventory updates and order synchronization.'
    },
    { 
      name: 'Etsy', 
      logo: '/images/logos/Etsy-Logo.png',
      description: 'Specialized handling for Etsy orders with custom packaging and branding options.'
    },
    { 
      name: 'Walmart', 
      logo: '/images/logos/Walmart_logo.svg',
      description: 'Walmart Marketplace integration with SLA compliance and performance monitoring.'
    },
    { 
      name: 'WooCommerce', 
      logo: '/images/logos/WooCommerce_logo.svg',
      description: 'WooCommerce plugin support for WordPress stores with complete order lifecycle management.'
    },
    { 
      name: 'TikTok Shop', 
      logo: '/images/logos/TiktokShop.png',
      description: 'Integrated TikTok Shop fulfillment with social commerce optimization and trending product handling.'
    }
  ];

  return (
    <section className="partners-section">
      <div className="container">
        <SectionTitle 
          title="E-commerce Platforms We Support" 
          subtitle="Seamlessly integrate with all major online marketplaces and platforms"
        />
        
        <div className="text-banner">
          <div className="text-banner-content">
            <span>AMAZON</span>
            <span>•</span>
            <span>EBAY</span>
            <span>•</span>
            <span>SHOPIFY</span>
            <span>•</span>
            <span>ETSY</span>
            <span>•</span>
            <span>WALMART</span>
            <span>•</span>
            <span>WOOCOMMERCE</span>
            <span>•</span>
            <span>TIKTOK SHOP</span>
            <span>•</span>
            <span>AMAZON</span>
            <span>•</span>
            <span>EBAY</span>
            <span>•</span>
            <span>SHOPIFY</span>
            <span>•</span>
            <span>ETSY</span>
            <span>•</span>
            <span>WALMART</span>
            <span>•</span>
            <span>WOOCOMMERCE</span>
            <span>•</span>
            <span>TIKTOK SHOP</span>
          </div>
        </div>
        
        <div className="marquee-container">
          <div className="marquee">
            {[...partners, ...partners].map((partner, index) => (
              <AnimatedSection 
                key={`${partner.name}-${index}`} 
                className="partner-item"
                delay={`${index * 100}`}
              >
                <div className="partner-logo">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className={partner.name === 'TikTok Shop' ? 'tiktok-logo-animation' : ''}
                  />
                </div>
                <h3>{partner.name}</h3>
              </AnimatedSection>
            ))}
          </div>
        </div>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <AnimatedSection 
              key={partner.name} 
              className={`partner-card ${partner.name === 'TikTok Shop' ? 'new-platform' : ''}`}
              delay={`${index * 100}`}
            >
              <div className="partner-logo">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className={partner.name === 'TikTok Shop' ? 'tiktok-logo-animation' : ''}
                />
              </div>
              <h3>{partner.name}</h3>
              <p>{partner.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;