const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Send email function
const sendEmail = async (to, subject, htmlContent) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};

// Send contact form notification email
const sendContactNotification = async (contactData) => {
  const subject = `New Contact Form Submission - ${contactData.name}`;
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
        <p><strong>Name:</strong> ${contactData.name}</p>
        <p><strong>Email:</strong> ${contactData.email}</p>
        <p><strong>Phone:</strong> ${contactData.phone}</p>
        <p><strong>Subject:</strong> ${contactData.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: white; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
          ${contactData.message}
        </div>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      </div>
      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        This email was sent from the Tryzen IQ contact form.
      </p>
    </div>
  `;

  return await sendEmail(process.env.EMAIL_USER, subject, htmlContent);
};

// Send confirmation email to user
const sendConfirmationEmail = async (contactData) => {
  const subject = 'Thank you for contacting Tryzen IQ';
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Thank you for contacting us!</h2>
      <p>Dear ${contactData.name},</p>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
        <h3>Your message details:</h3>
        <p><strong>Subject:</strong> ${contactData.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: white; padding: 15px; border-left: 4px solid #28a745;">
          ${contactData.message}
        </div>
      </div>
      <p>We typically respond within 24 hours during business days.</p>
      <p>Best regards,<br>The Tryzen IQ Team</p>
    </div>
  `;

  return await sendEmail(contactData.email, subject, htmlContent);
};

module.exports = {
  sendEmail,
  sendContactNotification,
  sendConfirmationEmail
}; 