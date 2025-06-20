# Tryzen IQ Backend Server

A Node.js backend server for the Tryzen IQ application that handles contact form submissions, stores data in MongoDB, and sends email notifications.

## Features

- Contact form submission handling
- MongoDB data storage
- Email notifications (admin notification + user confirmation)
- RESTful API endpoints
- Input validation
- Error handling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Gmail account with App Password

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Configuration:**
   - Copy `env.example` to `.env`
   - Update the following variables in `.env`:
     ```
     MONGODB_URI=mongodb+srv://tryzeniq:1YT6hVT5C5Tkc0By@cluster0.awv5h27.mongodb.net/
     EMAIL_USER=your_gmail@gmail.com
     EMAIL_PASS=your_gmail_app_password
     PORT=5000
     NODE_ENV=development
     ```

3. **Gmail App Password Setup:**
   - Go to your Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password for this application
   - Use the generated password in `EMAIL_PASS`

## Running the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Contact Form

**POST** `/api/contact`
Submit a new contact form

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "Hello, I'm interested in your services.",
  "subject": "General Inquiry"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "id": "contact_id",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "General Inquiry",
    "submittedAt": "2024-01-01T00:00:00.000Z"
  },
  "emailStatus": {
    "notificationSent": true,
    "confirmationSent": true
  }
}
```

**GET** `/api/contact`
Get all contact submissions (for admin)

**GET** `/api/contact/:id`
Get specific contact submission

**PUT** `/api/contact/:id`
Update contact status

**Request Body:**
```json
{
  "status": "read"
}
```

## Database Schema

### Contact Model
```javascript
{
  name: String (required),
  email: String (required, validated),
  phone: String (required),
  message: String (required),
  subject: String (default: "Contact Form Submission"),
  status: String (enum: ["pending", "read", "replied"], default: "pending"),
  createdAt: Date,
  updatedAt: Date
}
```

## Email Features

- **Admin Notification:** Sends detailed email to admin when form is submitted
- **User Confirmation:** Sends confirmation email to user with their message details
- **HTML Templates:** Professional email templates with styling

## Error Handling

The API includes comprehensive error handling for:
- Missing required fields
- Invalid email format
- Database connection issues
- Email sending failures
- Invalid status updates

## CORS Configuration

The server is configured to accept requests from any origin (CORS enabled) for development. For production, you should configure specific origins.

## Security Notes

- Environment variables are used for sensitive data
- Input validation and sanitization
- Email validation
- Error messages don't expose internal details 