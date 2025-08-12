import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFlag, 
  faEye, 
  faHandshake, 
  faAward, 
  faUsers, 
  faLeaf, 
  faLightbulb 
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about Essentials 3PL and our commitment to excellence in logistics</p>
        </div>
      </section>

      <section className="about-blank">
        <div className="container">
          <div className="about-content-placeholder">
            <h2>Our Story</h2>
            <p>Essentials 3PL was founded with a simple mission: to provide businesses with reliable, efficient, and cost-effective logistics solutions. Since our inception, we have grown to become a trusted partner for companies across various industries, helping them streamline their supply chains and focus on their core business activities.</p>
            <p>With decades of combined experience in logistics and supply chain management, our team brings expertise and innovation to every partnership. We understand the unique challenges businesses face in today's fast-paced market, and we're committed to delivering solutions that drive growth and success.</p>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-box">
              <div className="icon">
                <FontAwesomeIcon icon={faFlag} />
              </div>
              <h2>Our Mission</h2>
              <p>To empower businesses through innovative logistics solutions that optimize supply chains, reduce costs, and enhance customer satisfaction.</p>
            </div>
            <div className="vision-box">
              <div className="icon">
                <FontAwesomeIcon icon={faEye} />
              </div>
              <h2>Our Vision</h2>
              <p>To be the leading provider of integrated logistics services, recognized for excellence, reliability, and continuous innovation in the industry.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h3>Integrity</h3>
              <p>We conduct our business with honesty, transparency, and ethical standards that build trust with our clients and partners.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FontAwesomeIcon icon={faAward} />
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every aspect of our operations, continuously improving our processes and services.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <h3>Collaboration</h3>
              <p>We believe in the power of teamwork and partnership, working closely with our clients to achieve shared goals.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <h3>Sustainability</h3>
              <p>We are committed to environmentally responsible practices that minimize our ecological footprint.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
              <h3>Innovation</h3>
              <p>We embrace new technologies and creative solutions to address evolving logistics challenges.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;