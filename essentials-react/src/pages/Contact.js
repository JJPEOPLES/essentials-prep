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
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for inquiries, quotes, or support</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <AnimatedSection className="contact-form-container" delay="100">
              <SectionTitle title="Send Us a Message" />
              <p className="contact-form-note">Your message will be sent to <strong>essentials3pl@gmail.com</strong></p>
              {isSubmitted ? (
                <div className="success-message">
                  <h3>Thank you for your message!</h3>
                  <p>Your message has been sent to <strong>essentials3pl@gmail.com</strong>.</p>
                  <p>We will contact you soon.</p>
                  <Button variant="primary" onClick={() => window.location.reload()}>Send Another Message</Button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <FormInput 
                    label="Full Name"
                    name="name"
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
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.company}
                    touched={touched.company}
                    required
                  />
                  
                  <FormInput 
                    label="Email Address"
                    name="email"
                    type="email"
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
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.phone}
                    touched={touched.phone}
                    required
                  />
                  
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
                    <option value="warehousing">Warehousing</option>
                    <option value="inventory">Inventory Management</option>
                    <option value="fulfillment">Order Fulfillment</option>
                    <option value="distribution">Distribution</option>
                    <option value="other">Other Services</option>
                  </FormInput>
                  
                  <FormInput 
                    label="Your Message"
                    name="message"
                    type="textarea"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.message}
                    touched={touched.message}
                    className="full-width"
                    required
                  />
                  
                  <div className="form-group full-width">
                    <Button 
                      type="submit" 
                      variant="primary" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </AnimatedSection>
            
            <AnimatedSection className="contact-info-container" delay="200">
              <SectionTitle title="Contact Information" />
              <div className="info-item">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="info-content">
                  <h3>Our Location</h3>
                  <p>630 Rankin Ave, Schenectady, NY 12308</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="info-content">
                  <h3>Phone Number</h3>
                  <p>518-918-2695</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="info-content">
                  <h3>Email Address</h3>
                  <p>essentials3pl@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="info-content">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;