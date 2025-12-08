# Cal.com Integration Setup

## API Key
Your Cal.com API key is stored in `.env.local`:
```
NEXT_PUBLIC_CAL_API_KEY=cal_live_63fc5c1259deecfb6639ec9abddd75ee
```

## Setup Instructions

### 1. Configure Your Cal.com Account
1. Go to https://app.cal.com
2. Log in with your account
3. Create an event type (e.g., "30min Consultation")
4. Note your username from the URL

### 2. Update the Component
In `components/Appointments.tsx`, replace `your-username/30min` with your actual Cal.com booking link:
```tsx
data-cal-link="YOUR_USERNAME/YOUR_EVENT_TYPE"
```

For example:
- If your username is "porygon"
- And your event type is "consultation"
- Use: `data-cal-link="porygon/consultation"`

### 3. Customize the Embed
You can customize the Cal.com embed with these options in the `data-cal-config` attribute:

```json
{
  "layout": "month_view",  // or "week_view", "column_view"
  "theme": "dark",         // or "light", "auto"
  "hideEventTypeDetails": false,
  "hideLandingPageDetails": false
}
```

### 4. Using the API Key
The API key can be used for:
- Creating bookings programmatically
- Fetching availability
- Managing event types
- Webhook integrations

Example API usage:
```javascript
const response = await fetch('https://api.cal.com/v1/bookings', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CAL_API_KEY}`,
    'Content-Type': 'application/json'
  }
})
```

## Features
- ✅ Automatic timezone detection
- ✅ Email notifications
- ✅ Calendar sync (Google, Outlook, etc.)
- ✅ Customizable booking forms
- ✅ Payment integration (optional)
- ✅ Reminder emails

## Documentation
- Cal.com Embed: https://cal.com/docs/integrations/embed
- Cal.com API: https://cal.com/docs/api-reference
