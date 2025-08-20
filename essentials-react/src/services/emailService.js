/**
 * Email service that sends form data to essentials3pl@gmail.com
 * This uses FormSubmit.co to send real emails without requiring a backend
 */

const FORM_ENDPOINT = 'https://formsubmit.co/essentials3pl@gmail.com';

/**
 * Sends an email using the FormSubmit.co service
 * @param {Object} formData - The form data to send
 * @returns {Promise} - A promise that resolves when the email is sent
 */
const sendEmail = async (formData) => {
  try {
    // Create form data for submission
    const data = new FormData();
    
    // Add all form fields with enhanced formatting
    data.append('name', `👤 ${formData.name}`);
    data.append('email', `📧 ${formData.email}`);
    data.append('company', `🏢 ${formData.company || 'Not provided'}`);
    data.append('phone', `📱 ${formData.phone || 'Not provided'}`);
    data.append('service', `🎯 ${formData.service || 'Not specified'}`);
    data.append('message', `💬 ${formData.message}`);
    
    // Add business info for context
    data.append('business_info', '🏢 Essentials 3PL - Owned by Hassan Nasir LLC');
    data.append('contact_info', '📍 630 Rankin Ave, Schenectady, NY 12308 | 📞 518-918-2695');
    data.append('received_time', `⏰ ${new Date().toLocaleString()}`);
    
    // Use FormSubmit's best template
    data.append('_template', 'table');
    
    // Enhanced subject line with emojis
    data.append('_subject', `🚀 NEW INQUIRY: ${formData.name} from ${formData.company || 'Individual'} - ${formData.service || 'General'}`);
    data.append('_captcha', 'false');
    data.append('_autoresponse', '✅ Thank you for contacting Essentials 3PL (Owned by Hassan Nasir LLC)! We have received your inquiry and will get back to you within 24 hours. 📞 518-918-2695');
    
    // Send the form data to FormSubmit.co
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      return { success: true, message: 'Email sent successfully' };
    } else {
      console.error('Form submission failed:', response);
      return { success: false, message: 'Failed to send email. Please try again.' };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: error.message || 'Failed to send email' };
  }
};

export { sendEmail };