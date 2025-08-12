import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWarehouse, 
  faBoxOpen, 
  faTruck, 
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { ArrowRight, CheckCircle, Star, Users, Sparkles, Rocket } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import AnimatedSection from '../components/AnimatedSection';
import PartnersSection from '../components/PartnersSection';
import ShippingCarriersSection from '../components/ShippingCarriersSection';
import PickupServicesSection from '../components/PickupServicesSection';
import StatsSection from '../components/StatsSection';
import InteractiveFeatures from '../components/InteractiveFeatures';
import ComparisonSection from '../components/ComparisonSection';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-video">
            <video 
              src="/gemini_generated_video_A29B7B16.MP4" 
              alt="Logistics Warehouse Video" 
              className="video-fluid animated-hero" 
              autoPlay 
              loop 
              muted 
              playsInline
            />
          </div>
          <AnimatedSection className="hero-content">
            <h1>
              <Sparkles size={40} style={{ display: 'inline', marginRight: '10px' }} />
              Your Logistics Partner for Success
              <Rocket size={40} style={{ display: 'inline', marginLeft: '10px' }} />
            </h1>
            <p>🚀 Essentials 3PL provides comprehensive logistics solutions to streamline your supply chain and boost your business growth! ✨</p>
            <div className="hero-features">
              <div className="hero-feature">
                <CheckCircle size={20} />
                <span>99.9% On-Time Delivery</span>
              </div>
              <div className="hero-feature">
                <Star size={20} />
                <span>Award-Winning Service</span>
              </div>
              <div className="hero-feature">
                <Users size={20} />
                <span>500+ Happy Clients</span>
              </div>
            </div>
            <div className="cta-buttons">
              <Button to="/services" variant="primary">
                <Rocket size={16} style={{ marginRight: '8px' }} />
                Our Services
              </Button>
              <Button to="/contact" variant="secondary">
                Get a Quote
                <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <SectionTitle 
            title="Why Choose Us" 
            subtitle="Discover the advantages of partnering with Essentials 3PL" 
          />
          <div className="feature-grid">
            <AnimatedSection className="feature-card" delay="100">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faWarehouse} />
              </div>
              <h3>Strategic Locations</h3>
              <p>Our facilities are strategically located to ensure efficient distribution and reduced shipping times.</p>
            </AnimatedSection>
            
            <AnimatedSection className="feature-card" delay="200">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faBoxOpen} />
              </div>
              <h3>Inventory Management</h3>
              <p>Advanced inventory tracking systems to maintain optimal stock levels and reduce carrying costs.</p>
            </AnimatedSection>
            
            <AnimatedSection className="feature-card" delay="300">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faTruck} />
              </div>
              <h3>Reliable Shipping</h3>
              <p>Dependable transportation solutions with real-time tracking and delivery confirmation.</p>
            </AnimatedSection>
            
            <AnimatedSection className="feature-card" delay="400">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
              <h3>Data-Driven Insights</h3>
              <p>Comprehensive analytics to optimize your supply chain and improve operational efficiency.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Amazing Stats Section */}
      <StatsSection />

      {/* Interactive Features Section */}
      <InteractiveFeatures />

      {/* Comparison Section */}
      <ComparisonSection />

      {/* E-commerce Partners Section */}}
      <PartnersSection />
      
      {/* Shipping Carriers Section */}
      <ShippingCarriersSection />
      
      {/* Retail Pickup Services Section */}
      <PickupServicesSection />

      <AnimatedSection className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Optimize Your Supply Chain?</h2>
            <p>Partner with Essentials 3PL for seamless logistics solutions that drive growth and efficiency.</p>
            <div className="cta-features">
              <div className="cta-feature">
                <CheckCircle size={20} />
                <span>24/7 Support</span>
              </div>
              <div className="cta-feature">
                <Star size={20} />
                <span>Premium Service</span>
              </div>
              <div className="cta-feature">
                <Users size={20} />
                <span>Dedicated Team</span>
              </div>
            </div>
            <Button to="/contact" variant="secondary">
              Contact Us Today <ArrowRight size={16} style={{ marginLeft: '8px' }} />
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <section className="testimonials">
        <div className="container">
          <SectionTitle title="What Our Clients Say" />
          <div className="testimonial-slider">
            <AnimatedSection className="testimonial" delay="100">
              <div className="testimonial-content">
                <p>Essentials 3PL has transformed our logistics operations. Their attention to detail and commitment to excellence has helped us reduce costs and improve customer satisfaction.</p>
                <div className="testimonial-author">
                  <h4>John Smith</h4>
                  <p>CEO, TechGadgets Inc.</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="testimonial" delay="200">
              <div className="testimonial-content">
                <p>We've been working with Essentials 3PL for over three years, and they've consistently delivered exceptional service. Their team is responsive, professional, and always goes the extra mile.</p>
                <div className="testimonial-author">
                  <h4>Sarah Johnson</h4>
                  <p>Operations Director, Global Retail</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;