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
    
    // Add all form fields
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('company', formData.company || 'Not provided');
    data.append('phone', formData.phone || 'Not provided');
    data.append('service', formData.service || 'Not provided');
    data.append('message', formData.message);
    
    // FormSubmit specific fields
    data.append('_subject', `New inquiry from ${formData.name} - ${formData.company || 'Not provided'}`);
    data.append('_captcha', 'false');
    
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