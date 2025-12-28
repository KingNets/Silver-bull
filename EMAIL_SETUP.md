# Email Setup Guide

## Setup Instructions for Email Notifications

When someone submits the contact form, you'll receive an email with all the details.

### Option 1: Gmail (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password

3. **Update `.env` file** with your credentials:
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=Kaimo.rim@gmail.com
```

### Option 2: Other Email Providers

#### Outlook/Hotmail
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

#### Yahoo
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-app-password
```

#### Custom SMTP Server
```env
EMAIL_HOST=smtp.your-domain.com
EMAIL_PORT=587
EMAIL_USER=your-email@your-domain.com
EMAIL_PASS=your-password
```

### Testing Email Functionality

1. **Update the `.env` file** with your actual credentials
2. **Restart the server:**
   ```bash
   npm run dev:all
   ```
3. **Submit a test form** at http://localhost:3000
4. **Check your email** (Kaimo.rim@gmail.com)

### What You'll Receive

- **Subject:** New Contact Form: [Name] - [Service Type]
- **Content:** 
  - Personal information (name, email, phone)
  - Company details (if provided)
  - Inquiry details (service type, investment range)
  - Full message
  - Timestamp

### Troubleshooting

**If emails aren't sending:**
1. Check the console for error messages
2. Verify your email credentials in `.env`
3. For Gmail: Ensure App Password is generated (not regular password)
4. Check spam folder
5. Verify port 587 isn't blocked by firewall

**Common Errors:**
- `Invalid login` → Wrong credentials
- `Connection timeout` → Firewall/port issue
- `Self signed certificate` → Use `secure: false` for port 587

### Security Notes

- ✅ `.env` is in `.gitignore` (credentials won't be committed)
- ✅ Form data is still saved even if email fails
- ✅ Console logs email success/failure
- ⚠️ Keep your App Password secure - don't share it

### Current Configuration

Your email will be sent to: **Kaimo.rim@gmail.com**

To change the recipient, update `EMAIL_TO` in the `.env` file.
