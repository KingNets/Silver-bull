import express, { Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Interface for form data
interface ContactFormData {
  title: string;
  firstName: string;
  lastName: string;
  companyName?: string;
  registrationNumber?: string;
  countryOfRegistration?: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  country?: string;
  postalCode?: string;
  serviceType: string;
  transactionType?: string;
  estimatedQuantity?: string;
  preferredDelivery?: string;
  message?: string;
  createdAt: string;
}

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Function to send email notification
async function sendEmailNotification(formData: ContactFormData) {
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #030213; border-bottom: 2px solid #030213; padding-bottom: 10px;">
        🔔 New Contact Form Submission - SilverStock
      </h2>
      
      <div style="background-color: #f3f3f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #030213;">Personal Information</h3>
        <p><strong>Name:</strong> ${formData.title} ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        ${formData.companyName ? `<p><strong>Company:</strong> ${formData.companyName}</p>` : ''}
        ${formData.registrationNumber ? `<p><strong>Registration:</strong> ${formData.registrationNumber}</p>` : ''}
      </div>

      <div style="background-color: #f3f3f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="margin-top: 0; color: #030213;">Service Details</h3>
        <p><strong>Service Type:</strong> ${formData.serviceType}</p>
        ${formData.estimatedQuantity ? `<p><strong>Estimated Quantity:</strong> ${formData.estimatedQuantity}</p>` : ''}
        ${formData.message ? `<p><strong>Message:</strong> ${formData.message}</p>` : ''}
      </div>

      <p style="color: #666; font-size: 12px;">Submitted on: ${new Date(formData.createdAt).toLocaleString()}</p>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || 'noreply@silverstock.com',
    to: process.env.EMAIL_TO || 'lyy.rim@gmail.com',
    subject: `New Quote Request from ${formData.firstName} ${formData.lastName}`,
    html: emailHtml,
  });
}

// Route to handle contact form submissions
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const formData: ContactFormData = req.body;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address',
      });
    }

    // Save to JSON file (you can replace this with database logic)
    const filePath = path.join(dataDir, 'submissions.json');
    let submissions: ContactFormData[] = [];

    // Read existing submissions if file exists
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      submissions = JSON.parse(fileContent);
    }

    // Add new submission
    submissions.push(formData);

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));

    // Send email notification
    try {
      await sendEmailNotification(formData);
      console.log('✅ Email sent successfully for submission:', formData.email);
    } catch (emailError) {
      console.error('⚠️ Failed to send email, but form was saved:', emailError);
      // Continue even if email fails - form is already saved
    }

    console.log('New form submission received:', formData);

    res.status(200).json({
      success: true,
      message: 'Your request has been submitted successfully. We will contact you within 24 hours.',
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.',
    });
  }
});

// Route to get all submissions (for admin purposes - you should add authentication)
app.get('/api/submissions', (req: Request, res: Response) => {
  try {
    const filePath = path.join(dataDir, 'submissions.json');

    if (!fs.existsSync(filePath)) {
      return res.status(200).json([]);
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const submissions = JSON.parse(fileContent);

    res.status(200).json(submissions);
  } catch (error) {
    console.error('Error reading submissions:', error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving submissions',
    });
  }
});

// Health check route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log('Backend server is running on http://localhost:' + PORT);
  console.log('Form submissions will be saved to: ' + dataDir);
});
