// Netlify function to send emails
exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  try {
    // Parse the request body
    const data = JSON.parse(event.body);
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing required fields' })
      };
    }

    // Format the email content
    const emailContent = `
      Name: ${data.name}
      Email: ${data.email}
      Company: ${data.company || 'Not provided'}
      Phone: ${data.phone || 'Not provided'}
      Service: ${data.service || 'Not provided'}
      Message: ${data.message}
    `;

    // In a real implementation, you would use a service like Nodemailer, SendGrid, etc.
    // For now, we'll just log the email content and return a success response
    console.log('Email would be sent to: essentials3pl@gmail.com');
    console.log('Email content:', emailContent);

    // Return a success response
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Email sent successfully',
        // Include a note about the implementation
        note: 'This is a mock implementation. In production, this function would send an actual email to essentials3pl@gmail.com.'
      })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' })
    };
  }
};