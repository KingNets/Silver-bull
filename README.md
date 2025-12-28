# Silver Selling Website

A modern, full-stack web application for Rim Invest - a precious metals trading company.

## Features

- ✅ Responsive React/TypeScript frontend with Tailwind CSS
- ✅ Node.js/Express backend API
- ✅ Working contact form with validation
- ✅ Form submissions saved to JSON file (easily upgradable to database)
- ✅ Real-time form validation and error handling
- ✅ Success/error notifications

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the Application

**Option 1: Run both frontend and backend together**
```bash
npm run dev:all
```

**Option 2: Run separately**

Terminal 1 - Frontend (Vite):
```bash
npm run dev
```

Terminal 2 - Backend (Express):
```bash
npm run server
```

### Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Health Check: http://localhost:5000/api/health

## Project Structure

```
silveerSd/
├── backend/
│   ├── server.ts          # Express server with API endpoints
│   ├── data/              # Form submissions storage
│   └── tsconfig.json
├── src/
│   ├── components/        # React components
│   │   ├── Contact.tsx    # Contact form with validation
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   └── ui/           # Reusable UI components
│   ├── App.tsx
│   ├── main.tsx
│   └── globals.css
├── index.html
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## API Endpoints

### POST /api/contact
Submit a contact form
- Required fields: title, firstName, lastName, email, phone, serviceType, message, terms
- Response: JSON with success status and message

### GET /api/submissions
Get all form submissions (for admin purposes)
- Returns: Array of all submissions

### GET /api/health
Health check endpoint
- Returns: Server status

## Form Data Storage

Form submissions are currently saved to `backend/data/submissions.json`. To upgrade to a database:

1. Install database client (e.g., `npm install pg` for PostgreSQL)
2. Replace file operations in `backend/server.ts` with database queries
3. Update the interface and schema as needed

## Technologies Used

**Frontend:**
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI components
- Lucide React icons

**Backend:**
- Node.js
- Express
- TypeScript
- CORS

## Next Steps

To enhance the application:

1. **Database Integration**: Replace JSON file storage with PostgreSQL/MongoDB
2. **Email Notifications**: Add nodemailer for email alerts
3. **Authentication**: Add admin dashboard with authentication
4. **File Uploads**: Allow document uploads for quotes
5. **Payment Integration**: Add payment gateway for transactions
6. **Deployment**: Deploy to Vercel (frontend) + Railway/Render (backend)

## Contributing

This is a private project for Rim Invest.

## License

Proprietary - All rights reserved
