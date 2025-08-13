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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            src="/gemini_generated_video_A29B7B16.MP4" 
            className="w-full h-full object-cover opacity-30" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-blue-800/80"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-blue-300/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-300/10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <AnimatedSection className="text-center text-white max-w-5xl mx-auto">
            {/* Main Heading */}
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <Sparkles size={50} className="text-yellow-400 animate-pulse mr-4" />
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-white font-bold text-2xl">E3</span>
                </div>
                <Rocket size={50} className="text-yellow-400 animate-pulse ml-4" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Your Logistics Partner
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  for Success
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
              🚀 Essentials 3PL provides comprehensive logistics solutions to streamline your supply chain and boost your business growth! ✨
            </p>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-green-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-semibold mb-2">99.9% On-Time Delivery</h3>
                <p className="text-blue-100 text-sm">Reliable and punctual service you can count on</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center mb-4">
                  <Star size={32} className="text-yellow-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Award-Winning Service</h3>
                <p className="text-blue-100 text-sm">Recognized excellence in logistics solutions</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-center mb-4">
                  <Users size={32} className="text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-semibold mb-2">500+ Happy Clients</h3>
                <p className="text-blue-100 text-sm">Trusted by businesses across industries</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button to="/services" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-3xl flex items-center space-x-3">
                <Rocket size={20} />
                <span>Our Services</span>
              </Button>
              
              <Button to="/contact" className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center space-x-3">
                <span>Get a Quote</span>
                <ArrowRight size={20} />
              </Button>
            </div>

            {/* Company Badge */}
            <div className="mt-12 inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">HN</span>
              </div>
              <span className="text-sm font-medium text-blue-100">Owned by Hassan Nasir LLC</span>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Why Choose Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the advantages of partnering with Essentials 3PL for your logistics needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay="100">
              <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="absolute inset-[1px] bg-white rounded-3xl z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FontAwesomeIcon icon={faWarehouse} className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    Strategic Locations
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our facilities are strategically located to ensure efficient distribution and reduced shipping times across all major markets.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay="200">
              <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="absolute inset-[1px] bg-white rounded-3xl z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FontAwesomeIcon icon={faBoxOpen} className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                    Inventory Management
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Advanced inventory tracking systems to maintain optimal stock levels and reduce carrying costs with real-time visibility.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay="300">
              <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="absolute inset-[1px] bg-white rounded-3xl z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FontAwesomeIcon icon={faTruck} className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    Reliable Shipping
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dependable transportation solutions with real-time tracking and delivery confirmation for complete peace of mind.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay="400" className="md:col-span-2 lg:col-span-1">
              <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                <div className="absolute inset-[1px] bg-white rounded-3xl z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FontAwesomeIcon icon={faChartLine} className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    Data-Driven Insights
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive analytics to optimize your supply chain and improve operational efficiency with actionable insights.
                  </p>
                </div>
              </div>
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

      {/* E-commerce Partners Section */}
      <PartnersSection />
      
      {/* Shipping Carriers Section */}
      <ShippingCarriersSection />
      
      {/* Retail Pickup Services Section */}
      <PickupServicesSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-white/5 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Partner with Essentials 3PL for seamless logistics solutions that drive growth and efficiency.
            </p>
            
            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <CheckCircle size={32} className="text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-blue-100 text-sm">Round-the-clock assistance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Star size={32} className="text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Premium Service</h3>
                <p className="text-blue-100 text-sm">Excellence in every detail</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Users size={32} className="text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Dedicated Team</h3>
                <p className="text-blue-100 text-sm">Your success is our priority</p>
              </div>
            </div>

            <Button to="/contact" className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center space-x-3 mx-auto">
              <span>Contact Us Today</span>
              <ArrowRight size={20} />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="What Our Clients Say" />
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay="100">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative">
                <div className="absolute top-6 left-6 text-6xl text-blue-200 font-serif">"</div>
                <div className="pt-8">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Essentials 3PL has transformed our logistics operations. Their attention to detail and commitment to excellence has helped us reduce costs and improve customer satisfaction.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">JS</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">John Smith</h4>
                      <p className="text-gray-500">CEO, TechGadgets Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay="200">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative">
                <div className="absolute top-6 left-6 text-6xl text-purple-200 font-serif">"</div>
                <div className="pt-8">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    We've been working with Essentials 3PL for over three years, and they've consistently delivered exceptional service. Their team is responsive, professional, and always goes the extra mile.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">SJ</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                      <p className="text-gray-500">Operations Director, Global Retail</p>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* E-commerce Partners Section */}
      <PartnersSection />
      
      {/* Shipping Carriers Section */}
      <ShippingCarriersSection />
      
      {/* Retail Pickup Services Section */}
      <PickupServicesSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-white/5 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center text-white max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Partner with Essentials 3PL for seamless logistics solutions that drive growth and efficiency.
            </p>
            
            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <CheckCircle size={32} className="text-green-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-blue-100 text-sm">Round-the-clock assistance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Star size={32} className="text-yellow-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Premium Service</h3>
                <p className="text-blue-100 text-sm">Excellence in every detail</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Users size={32} className="text-blue-400 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Dedicated Team</h3>
                <p className="text-blue-100 text-sm">Your success is our priority</p>
              </div>
            </div>

            <Button to="/contact" className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-white/30 hover:bg-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center space-x-3 mx-auto">
              <span>Contact Us Today</span>
              <ArrowRight size={20} />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="What Our Clients Say" />
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <AnimatedSection delay="100">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative">
                <div className="absolute top-6 left-6 text-6xl text-blue-200 font-serif">"</div>
                <div className="pt-8">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Essentials 3PL has transformed our logistics operations. Their attention to detail and commitment to excellence has helped us reduce costs and improve customer satisfaction.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">JS</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">John Smith</h4>
                      <p className="text-gray-500">CEO, TechGadgets Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay="200">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative">
                <div className="absolute top-6 left-6 text-6xl text-purple-200 font-serif">"</div>
                <div className="pt-8">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    We've been working with Essentials 3PL for over three years, and they've consistently delivered exceptional service. Their team is responsive, professional, and always goes the extra mile.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">SJ</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                      <p className="text-gray-500">Operations Director, Global Retail</p>
                    </div>
                  </div>
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