# EmailJS Setup Guide

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the instructions to connect your email: info@eyregorillaadventures.com
5. Copy the **Service ID** - you'll need this later

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - {{tour_interest}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Tour Interest: {{tour_interest}}

Message:
{{message}}

---
This email was sent from the Eyre Gorilla Adventures contact form.
```

4. In the template settings:
   - Set "To Email" to: info@eyregorillaadventures.com
   - Or use: {{to_email}}
5. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (it starts with something like "user_...")
3. Copy this key

## Step 5: Configure Your Project

1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Save the file
4. Restart your development server: `npm run dev`

## Step 6: Test the Form

1. Go to your contact page
2. Fill out the form
3. Click "Send Message"
4. Check your email at info@eyregorillaadventures.com

## Important Notes

- **Free tier**: 200 emails per month
- **Security**: Never commit the `.env` file to GitHub
- **Testing**: Use EmailJS dashboard to test templates
- **Same setup works for booking forms** - just create additional templates

## Troubleshooting

1. **"Invalid service ID"**: Double-check your Service ID
2. **"Template not found"**: Verify Template ID is correct
3. **No email received**: Check spam folder
4. **CORS error**: Make sure you're using the correct Public Key

## Email Template Variables Available

- `from_name` - User's name
- `from_email` - User's email
- `phone` - User's phone number
- `tour_interest` - Selected tour/service
- `message` - User's message
- `to_email` - Your business email

## Next Steps

Once the contact form works, you can:
1. Create separate templates for different service bookings
2. Add auto-reply emails to customers
3. Set up email notifications for your team
