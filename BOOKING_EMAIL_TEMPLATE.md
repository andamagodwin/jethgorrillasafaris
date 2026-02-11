# Booking Email Template for EmailJS

## Overview

This template is specifically for safari booking requests from the ServiceDetail pages. It includes additional booking-specific information like number of travelers and preferred dates.

## Option 1: Use Same Template (Simpler)

You can use the same EmailJS template for both contact forms and booking forms. The template you created for the contact form already supports all the necessary variables.

**Pros:**
- No additional setup needed
- Both forms send to the same template
- Easier to manage

**Cons:**
- Less specialized for booking vs. general inquiries

## Option 2: Create Separate Booking Template (Recommended)

Create a dedicated template for booking requests to provide a more specialized experience.

### Step 1: Create New Template in EmailJS Dashboard

1. Go to https://www.emailjs.com/ and log in
2. Navigate to "Email Templates"
3. Click "Create New Template"
4. Name it: "Safari Booking Request"

### Step 2: Template Content

**Subject Line:**
```
New Booking Request: {{tour_interest}} - {{from_name}}
```

**Email Body (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .header {
            background: linear-gradient(135deg, #EAB308 0%, #DC2626 100%);
            color: white;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 20px;
            background-color: #f9f9f9;
        }
        .booking-details {
            background-color: white;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .detail-row {
            margin: 10px 0;
            padding: 8px 0;
            border-bottom: 1px solid #eee;
        }
        .detail-label {
            font-weight: bold;
            color: #EAB308;
            display: inline-block;
            width: 150px;
        }
        .footer {
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🦍 New Safari Booking Request</h1>
        <p>Eyre Gorilla Adventures Ltd</p>
    </div>

    <div class="content">
        <h2>Booking Details</h2>

        <div class="booking-details">
            <div class="detail-row">
                <span class="detail-label">Safari Tour:</span>
                <span>{{tour_interest}}</span>
            </div>

            <div class="detail-row">
                <span class="detail-label">Customer Name:</span>
                <span>{{from_name}}</span>
            </div>

            <div class="detail-row">
                <span class="detail-label">Email:</span>
                <span>{{from_email}}</span>
            </div>

            <div class="detail-row">
                <span class="detail-label">Phone:</span>
                <span>{{phone}}</span>
            </div>

            <div class="detail-row">
                <span class="detail-label">Number of Travelers:</span>
                <span>{{travelers}} people</span>
            </div>

            <div class="detail-row">
                <span class="detail-label">Preferred Date:</span>
                <span>{{preferred_date}}</span>
            </div>
        </div>

        <h3>Special Requests:</h3>
        <div class="booking-details">
            <p>{{message}}</p>
        </div>
    </div>

    <div class="footer">
        <p>This booking request was submitted via the Eyre Gorilla Adventures website.</p>
        <p>Please respond within 24 hours.</p>
    </div>
</body>
</html>
```

**Plain Text Version:**
```
New Safari Booking Request
━━━━━━━━━━━━━━━━━━━━━━━━━━━

Safari Tour: {{tour_interest}}
Customer Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Number of Travelers: {{travelers}} people
Preferred Date: {{preferred_date}}

Special Requests:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
This booking request was submitted via the Eyre Gorilla Adventures website.
Please respond within 24 hours.
```

### Step 3: Configure Template Settings

1. **To Email:** Set to `info@eyregorillaadventures.com` or use `{{to_email}}`
2. **From Name:** Set to "Eyre Gorilla Adventures Booking System"
3. **Reply To:** Set to `{{from_email}}` (so you can reply directly to the customer)
4. **BCC:** (Optional) Add additional team members who should receive booking notifications

### Step 4: Save and Get Template ID

1. Click "Save" on your template
2. Copy the **Template ID** (e.g., "template_xyz123")
3. You have two options:

#### Option A: Use Same Template for All Forms
Keep using `VITE_EMAILJS_TEMPLATE_ID` in your `.env` file - both forms will use the same template.

#### Option B: Use Different Templates
Add a second template ID to your `.env` file:

```env
# Contact form template
VITE_EMAILJS_TEMPLATE_ID=your_contact_template_id_here

# Booking form template (optional - for booking-specific template)
VITE_EMAILJS_BOOKING_TEMPLATE_ID=your_booking_template_id_here
```

Then update `ServiceDetail.tsx` line 52 to use:
```typescript
import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
```

## Template Variables Reference

All variables sent from the booking form:

| Variable | Description | Example |
|----------|-------------|---------|
| `from_name` | Customer's full name | "John Smith" |
| `from_email` | Customer's email address | "john@example.com" |
| `phone` | Customer's phone number | "+256 750 537 127" |
| `tour_interest` | Safari tour being booked | "Gorilla Trekking Safari" |
| `travelers` | Number of people | "4" |
| `preferred_date` | Requested tour date | "2024-06-15" |
| `message` | Special requests/questions | "We prefer morning tours" |
| `to_email` | Your business email | "info@eyregorillaadventures.com" |

## Testing Your Template

1. In EmailJS dashboard, go to your template
2. Click "Test it" button
3. Fill in sample data for all variables
4. Send test email to verify formatting
5. Check your inbox at info@eyregorillaadventures.com

## Troubleshooting

**Missing data in emails:**
- Verify all variable names in template match the code (case-sensitive)
- Check that variables are wrapped in double curly braces: `{{variable_name}}`

**Emails not arriving:**
- Check spam/junk folder
- Verify "To Email" is set correctly in template settings
- Test the template in EmailJS dashboard first

**Wrong template being used:**
- Double-check the Template ID in your `.env` file
- Restart development server after changing `.env`

## Current Status

✅ Booking form code is ready and integrated with EmailJS
✅ Form includes: name, email, phone, travelers, date, message
✅ Success/error handling implemented
✅ Form reset after successful submission

⏳ You need to: Create the booking template in EmailJS dashboard (or use the existing contact template)

## Next Steps

1. Log into EmailJS dashboard
2. Either use your existing contact template OR create a new booking-specific template
3. If you created a new template, update your `.env` file with the booking template ID
4. Test a booking on your website
5. Check that you receive the email at info@eyregorillaadventures.com
