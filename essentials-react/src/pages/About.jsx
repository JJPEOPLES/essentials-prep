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
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Learn more about Essentials 3PL and our commitment to excellence in logistics
            </p>
            <div className="mt-8 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-sm font-medium">🏢 Owned by Hassan Nasir LLC</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Story
              </span>
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Essentials 3PL was founded with a simple mission: to provide businesses with reliable, efficient, and cost-effective logistics solutions. Since our inception, we have grown to become a trusted partner for companies across various industries, helping them streamline their supply chains and focus on their core business activities.
              </p>
              <p>
                With decades of combined experience in logistics and supply chain management, our team brings expertise and innovation to every partnership. We understand the unique challenges businesses face in today's fast-paced market, and we're committed to delivering solutions that drive growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="absolute inset-[1px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl z-0"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FontAwesomeIcon icon={faFlag} className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To empower businesses through innovative logistics solutions that optimize supply chains, reduce costs, and enhance customer satisfaction.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              <div className="absolute inset-[1px] bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl z-0"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <FontAwesomeIcon icon={faEye} className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors">
                  Our Vision
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be the leading provider of integrated logistics services, recognized for excellence, reliability, and continuous innovation in the industry.
                </p>
              </div>
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