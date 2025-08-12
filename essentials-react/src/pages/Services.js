import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWarehouse, 
  faBoxes, 
  faShippingFast, 
  faClipboardCheck, 
  faBarcode, 
  faExchangeAlt, 
  faGlobeAmericas, 
  faTruckLoading, 
  faChartLine, 
  faShieldAlt, 
  faHandshake, 
  faTools 
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive logistics solutions tailored to your business needs</p>
        </div>
      </section>

      <section className="services-main">
        <div className="container">
          <div className="service-category">
            <div className="service-intro">
              <h2>Warehousing Solutions</h2>
              <p>Our state-of-the-art warehousing facilities provide secure storage and efficient inventory management for businesses of all sizes.</p>
            </div>
            <div className="service-grid">
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faWarehouse} />
                </div>
                <h3>Storage Solutions</h3>
                <p>Flexible storage options including short-term, long-term, and seasonal storage to accommodate your changing business needs.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faBoxes} />
                </div>
                <h3>Inventory Management</h3>
                <p>Advanced inventory tracking systems to maintain optimal stock levels and reduce carrying costs.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faBarcode} />
                </div>
                <h3>Picking & Packing</h3>
                <p>Efficient order fulfillment with accurate picking and secure packing to ensure products arrive in perfect condition.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faClipboardCheck} />
                </div>
                <h3>Quality Control</h3>
                <p>Rigorous quality checks at every stage to maintain the highest standards for your products.</p>
              </div>
            </div>
          </div>

          <div className="service-category">
            <div className="service-intro">
              <h2>Distribution & Fulfillment</h2>
              <p>Streamline your order fulfillment process with our comprehensive distribution services designed to enhance customer satisfaction.</p>
            </div>
            <div className="service-grid">
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faShippingFast} />
                </div>
                <h3>Order Fulfillment</h3>
                <p>End-to-end order processing from receipt to delivery, ensuring timely and accurate fulfillment.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faExchangeAlt} />
                </div>
                <h3>Returns Management</h3>
                <p>Efficient handling of returns, exchanges, and refurbishments to minimize costs and maximize recovery value.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faGlobeAmericas} />
                </div>
                <h3>Nationwide Distribution</h3>
                <p>Extensive distribution network covering the entire country for fast and reliable delivery.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faTruckLoading} />
                </div>
                <h3>Cross-Docking</h3>
                <p>Streamlined cross-docking services to reduce handling and storage time, accelerating the distribution process.</p>
              </div>
            </div>
          </div>

          <div className="service-category">
            <div className="service-intro">
              <h2>Value-Added Services</h2>
              <p>Enhance your supply chain with our specialized value-added services designed to provide a competitive edge.</p>
            </div>
            <div className="service-grid">
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
                <h3>Supply Chain Analytics</h3>
                <p>Data-driven insights to optimize your supply chain operations and improve decision-making.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faShieldAlt} />
                </div>
                <h3>Compliance Management</h3>
                <p>Ensure adherence to industry regulations and standards with our comprehensive compliance solutions.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faHandshake} />
                </div>
                <h3>Consulting Services</h3>
                <p>Expert advice and strategic planning to optimize your logistics operations and reduce costs.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">
                  <FontAwesomeIcon icon={faTools} />
                </div>
                <h3>Custom Solutions</h3>
                <p>Tailored logistics solutions designed to address your unique business challenges and requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;