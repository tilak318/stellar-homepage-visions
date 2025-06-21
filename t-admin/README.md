# Tryzen IQ Admin Panel

This is the admin panel for managing contact form submissions from the Tryzen IQ website.

## Features

- **Secure Authentication**: Three admin users with individual credentials
- **Contact Management**: View, search, filter, and manage contact form submissions
- **Status Tracking**: Update contact status (pending, read, replied)
- **Real-time Data**: Live connection to MongoDB database
- **Modern UI**: Beautiful, responsive design matching the website style

## Admin Credentials

| Username | Password | Name |
|----------|----------|------|
| tilakviradiya | aA@til123 | Tilak Viradiya |
| keyurmoradiya | aA@keyur123 | Keyur Moradiya |
| amitlakhani | aA@amit123 | Amit Lakhani |

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB database running
- Backend server running on port 5000

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

### Backend Requirements

Make sure the backend server is running with the following endpoints:

- `GET /api/contacts` - Fetch all contact submissions
- `PATCH /api/contacts/:id` - Update contact status
- `DELETE /api/contacts/:id` - Delete contact submission

## Usage

### Login
1. Navigate to the admin panel
2. Enter your username and password
3. Click "Sign In"

### Dashboard Features

#### Statistics Cards
- **Total Contacts**: Shows the total number of contact submissions
- **Pending**: Number of unread contact submissions
- **Read**: Number of read contact submissions
- **Replied**: Number of replied contact submissions

#### Search and Filter
- **Search**: Search contacts by name, email, phone, or message
- **Status Filter**: Filter by pending, read, or replied status
- **Refresh**: Manually refresh the data

#### Contact Management
- **View Details**: Click the eye icon to view full contact details
- **Update Status**: Change contact status in the detail view
- **Delete Contact**: Remove contact submissions (with confirmation)

### Contact Status Management

- **Pending**: New contact submissions that haven't been reviewed
- **Read**: Contact submissions that have been reviewed
- **Replied**: Contact submissions that have been responded to

## Security Features

- **Session Management**: Automatic logout on browser close
- **Local Storage**: Secure token-based authentication
- **Input Validation**: Server-side validation for all operations
- **CORS Protection**: Configured to allow only authorized origins

## File Structure

```
t-admin/
├── src/
│   ├── pages/
│   │   ├── LoginPage.tsx      # Authentication page
│   │   └── Dashboard.tsx      # Main admin dashboard
│   ├── components/
│   │   ├── ui/               # Reusable UI components
│   │   └── AnimatedGradientBackground.tsx
│   ├── hooks/
│   │   └── use-toast.ts      # Toast notifications
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   └── App.tsx               # Main application component
├── public/                   # Static assets
└── package.json
```

## Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **UI Framework**: Shadcn/ui components
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React hooks
- **HTTP Client**: Fetch API
- **Authentication**: Local storage with tokens

## Development

### Adding New Features

1. Create new components in `src/components/`
2. Add new pages in `src/pages/`
3. Update routing in `src/App.tsx`
4. Test thoroughly before deployment

### Styling

The admin panel uses the same design system as the main website:
- Gradient backgrounds
- Glassmorphism effects
- Consistent color scheme
- Responsive design

## Troubleshooting

### Common Issues

1. **Connection Error**: Ensure backend server is running on port 5000
2. **CORS Error**: Check if backend CORS is configured for the admin panel URL
3. **Authentication Issues**: Clear browser storage and try logging in again

### Debug Mode

Enable debug mode by opening browser developer tools and checking the console for detailed error messages.

## Support

For technical support or questions about the admin panel, contact the development team.

---

**Note**: This admin panel is designed specifically for managing Tryzen IQ contact form submissions. Do not share admin credentials with unauthorized personnel.
