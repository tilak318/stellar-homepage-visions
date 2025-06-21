const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { sendContactNotification, sendConfirmationEmail } = require('../utils/emailService');

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message, subject = 'Contact Form Submission' } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required: name, email, phone, message'
      });
    }

    // Validate email format
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Create new contact entry
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message.trim(),
      subject: subject.trim()
    };

    const newContact = new Contact(contactData);
    await newContact.save();

    // Send notification email to admin
    const notificationResult = await sendContactNotification(contactData);
    
    // Send confirmation email to user
    const confirmationResult = await sendConfirmationEmail(contactData);

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: newContact._id,
        name: newContact.name,
        email: newContact.email,
        subject: newContact.subject,
        submittedAt: newContact.createdAt
      },
      emailStatus: {
        notificationSent: notificationResult.success,
        confirmationSent: confirmationResult.success
      }
    });

  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.'
    });
  }
});

// GET /api/contact - Get all contact submissions (for admin purposes)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .select('-__v');

    res.json(contacts); // Return just the array for admin panel
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// GET /api/contact/:id - Get specific contact submission
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id).select('-__v');
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// PATCH /api/contact/:id - Update contact status
router.patch('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!status || !['pending', 'read', 'replied'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Valid status is required: pending, read, or replied'
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    ).select('-__v');

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact status updated successfully',
      data: contact
    });
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// PUT /api/contact/:id - Update contact status (alternative method)
router.put('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!status || !['pending', 'read', 'replied'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Valid status is required: pending, read, or replied'
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    ).select('-__v');

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact status updated successfully',
      data: contact
    });
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// DELETE /api/contact/:id - Delete contact submission
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact submission deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

module.exports = router; 