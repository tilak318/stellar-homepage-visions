const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// CORS configuration - Allow requests from frontend and admin panel
app.use(cors({
  origin: [
    'http://localhost:8080',
    'http://127.0.0.1:8080',
    'http://localhost:8081', // Admin panel
    'http://127.0.0.1:8081', // Admin panel
    'http://localhost:5173', // Vite dev server
    'http://127.0.0.1:5173', // Vite dev server
    'http://localhost:3000', // Alternative dev server
    'http://127.0.0.1:3000', // Alternative dev server
    'https://tryzeniqfinal.onrender.com'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('Connected to MongoDB successfully');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Import routes
const contactRoutes = require('./routes/contact');

// Use routes
app.use('/api/contacts', contactRoutes); // Changed to /api/contacts for admin panel
app.use('/api/contact', contactRoutes); // Keep original route for website

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Tryzen IQ Backend Server is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 