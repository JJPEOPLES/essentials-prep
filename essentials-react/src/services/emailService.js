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
    // Create fancy HTML email template
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Inquiry - Essentials 3PL</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: 20px auto; background: white; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center;">
                <h1 style="font-size: 2.2rem; margin-bottom: 10px; font-weight: 800; margin: 0 0 10px 0;">🚀 Essentials 3PL</h1>
                <p style="font-size: 1.1rem; opacity: 0.9; margin: 0 0 15px 0;">Professional Logistics & Supply Chain Solutions</p>
                <div style="background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px; display: inline-block; font-size: 0.9rem; font-weight: 600;">Owned by Hassan Nasir LLC</div>
            </div>
            
            <div style="padding: 40px 30px;">
                <div style="background: linear-gradient(45deg, #4CAF50, #8BC34A); color: white; padding: 12px 24px; border-radius: 25px; display: inline-block; font-weight: 700; margin-bottom: 30px; font-size: 1.1rem;">
                    📧 New Customer Inquiry
                </div>
                
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                    <tr>
                        <td style="width: 50%; padding: 10px; vertical-align: top;">
                            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; border-left: 4px solid #667eea; height: 100%;">
                                <div style="font-weight: 700; color: #667eea; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">👤 Customer Name</div>
                                <div style="font-size: 1.1rem; color: #333; font-weight: 600;">${formData.name}</div>
                            </div>
                        </td>
                        <td style="width: 50%; padding: 10px; vertical-align: top;">
                            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; border-left: 4px solid #667eea; height: 100%;">
                                <div style="font-weight: 700; color: #667eea; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">🏢 Company</div>
                                <div style="font-size: 1.1rem; color: #333; font-weight: 600;">${formData.company || 'Not provided'}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; vertical-align: top;">
                            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; border-left: 4px solid #667eea; height: 100%;">
                                <div style="font-weight: 700; color: #667eea; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">📧 Email Address</div>
                                <div style="font-size: 1.1rem; color: #333; font-weight: 600;">${formData.email}</div>
                            </div>
                        </td>
                        <td style="padding: 10px; vertical-align: top;">
                            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; border-left: 4px solid #667eea; height: 100%;">
                                <div style="font-weight: 700; color: #667eea; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">📱 Phone Number</div>
                                <div style="font-size: 1.1rem; color: #333; font-weight: 600;">${formData.phone || 'Not provided'}</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; vertical-align: top;">
                            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; border-left: 4px solid #e74c3c; height: 100%;">
                                <div style="font-weight: 700; color: #e74c3c; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">🎯 Service Interest</div>
                                <div style="font-size: 1.1rem; color: #333; font-weight: 600;">${formData.service || 'Not specified'}</div>
                            </div>
                        </td>
                        <td style="padding: 10px; vertical-align: top;">
                            <div style="background: #f8f9fa; padding: 20px; border-radius: 12px; border-left: 4px solid #667eea; height: 100%;">
                                <div style="font-weight: 700; color: #667eea; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">⏰ Received</div>
                                <div style="font-size: 1.1rem; color: #333; font-weight: 600;">${new Date().toLocaleString()}</div>
                            </div>
                        </td>
                    </tr>
                </table>
                
                <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 12px; margin-top: 20px;">
                    <div style="font-weight: 700; color: #667eea; font-size: 1.1rem; margin-bottom: 15px;">💬 Customer Message</div>
                    <div style="font-size: 1rem; line-height: 1.7; color: #444; background: white; padding: 20px; border-radius: 8px; border: 1px solid #dee2e6;">${formData.message}</div>
                </div>
            </div>
            
            <div style="background: #2c3e50; color: white; padding: 25px; text-align: center;">
                <div style="font-size: 1.5rem; font-weight: 800; margin-bottom: 10px;">Essentials 3PL</div>
                <div style="opacity: 0.8; font-size: 0.9rem; line-height: 1.5;">
                    📍 630 Rankin Ave, Schenectady, NY 12308<br>
                    📞 518-918-2695 | 📧 essentials3pl@gmail.com<br>
                    🏢 Owned by Hassan Nasir LLC
                </div>
            </div>
        </div>
    </body>
    </html>`;

    // Create form data for submission
    const data = new FormData();
    
    // Add all form fields
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('company', formData.company || 'Not provided');
    data.append('phone', formData.phone || 'Not provided');
    data.append('service', formData.service || 'Not provided');
    data.append('message', formData.message);
    
    // Add the fancy HTML template
    data.append('_template', 'table');
    data.append('_format', 'html');
    
    // FormSubmit specific fields for fancy emails
    data.append('_subject', `🚀 NEW INQUIRY: ${formData.name} from ${formData.company || 'Individual'} - ${formData.service || 'General'}`);
    data.append('_captcha', 'false');
    data.append('_autoresponse', 'Thank you for contacting Essentials 3PL! We have received your inquiry and will get back to you within 24 hours.');
    
    // Add HTML content
    data.append('_html', htmlTemplate);
    
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