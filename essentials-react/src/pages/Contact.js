import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock 
} from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../components/SectionTitle';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import AnimatedSection from '../components/AnimatedSection';
import useForm from '../hooks/useForm';

const Contact = () => {
  const initialValues = {
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };
  
  const validateForm = (values) => {
    const errors = {};
    
    if (!values.name?.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!values.company?.trim()) {
      errors.company = 'Company name is required';
    }
    
    if (!values.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!values.phone?.trim()) {
      errors.phone = 'Phone number is required';
    }
    
    if (!values.service) {
      errors.service = 'Please select a service';
    }
    
    if (!values.message?.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };

  const { 
    values, 
    errors, 
    touched, 
    isSubmitting, 
    isSubmitted, 
    handleChange, 
    handleBlur, 
    handleSubmit 
  } = useForm(initialValues, validateForm);

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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team for inquiries, quotes, or support
            </p>
            <div className="mt-8 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <span className="text-sm font-medium">🏢 Owned by Hassan Nasir LLC</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <AnimatedSection className="lg:col-span-2" delay="100">
              <div className="bg-white rounded-3xl shadow-2xl shadow-blue-500/10 p-8 md:p-12 border border-gray-100 relative overflow-hidden">
                {/* Decorative gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="absolute inset-[1px] bg-white rounded-3xl z-0"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600 text-lg">
                      Your message will be sent to <span className="font-semibold text-blue-600">essentials3pl@gmail.com</span>
                    </p>
                  </div>
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank you for your message!</h3>
                        <p className="text-gray-600 mb-2">Your message has been sent to <span className="font-semibold text-blue-600">essentials3pl@gmail.com</span>.</p>
                        <p className="text-gray-600 mb-6">We will contact you soon.</p>
                        <button 
                          onClick={() => window.location.reload()}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      {/* Name and Company Row */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormInput 
                          label="Full Name"
                          name="name"
                          placeholder="Enter your full name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.name}
                          touched={touched.name}
                          required
                        />
                        
                        <FormInput 
                          label="Company Name"
                          name="company"
                          placeholder="Enter your company name"
                          value={values.company}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.company}
                          touched={touched.company}
                          required
                        />
                      </div>
                      
                      {/* Email and Phone Row */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormInput 
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="your.email@company.com"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.email}
                          touched={touched.email}
                          required
                        />
                        
                        <FormInput 
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.phone}
                          touched={touched.phone}
                          required
                        />
                      </div>
                      
                      {/* Service Selection */}
                      <FormInput 
                        label="Service of Interest"
                        name="service"
                        type="select"
                        value={values.service}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.service}
                        touched={touched.service}
                        required
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="warehousing">🏭 Warehousing</option>
                        <option value="inventory">📦 Inventory Management</option>
                        <option value="fulfillment">🚚 Order Fulfillment</option>
                        <option value="distribution">🌐 Distribution</option>
                        <option value="other">💼 Other Services</option>
                      </FormInput>
                      
                      {/* Message */}
                      <FormInput 
                        label="Your Message"
                        name="message"
                        type="textarea"
                        placeholder="Tell us about your logistics needs, volume expectations, and any specific requirements..."
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.message}
                        touched={touched.message}
                        required
                      />
                      
                      {/* Submit Button */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center space-x-2">
                              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                              </svg>
                              <span>Sending Message...</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center space-x-2">
                              <span>Send Message</span>
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                              </svg>
                            </div>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="space-y-8" delay="200">
              {/* Contact Information Card */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Our Location</h3>
                      <p className="text-gray-600">630 Rankin Ave, Schenectady, NY 12308</p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <FontAwesomeIcon icon={faPhone} className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone Number</h3>
                      <a href="tel:518-918-2695" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                        518-918-2695
                      </a>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                      <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Address</h3>
                      <a href="mailto:essentials3pl@gmail.com" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                        essentials3pl@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  {/* Business Hours */}
                  <div className="flex items-start space-x-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <FontAwesomeIcon icon={faClock} className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 1:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Company Info Card */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200 shadow-lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-2xl font-bold text-white">E3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Essentials 3PL</h3>
                  <p className="text-gray-600 mb-4">Owned by Hassan Nasir LLC</p>
                  <div className="bg-white/60 rounded-2xl p-4 backdrop-blur-sm">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Professional third-party logistics services providing warehousing, inventory management, 
                      order fulfillment, and distribution solutions for businesses of all sizes.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="tel:518-918-2695"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl text-center font-semibold hover:from-green-600 hover:to-emerald-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <FontAwesomeIcon icon={faPhone} className="text-xl" />
                    <span className="text-sm">Call Now</span>
                  </div>
                </a>
                <a 
                  href="mailto:essentials3pl@gmail.com"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-2xl text-center font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                    <span className="text-sm">Email Us</span>
                  </div>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;