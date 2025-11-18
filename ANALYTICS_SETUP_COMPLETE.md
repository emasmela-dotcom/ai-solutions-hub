# 📊 Complete Analytics Setup Guide

## Current Status

✅ Google Analytics code added to site  
⚠️ Need to add your Measurement ID (currently shows placeholder)

## Step 1: Get Your Google Analytics Measurement ID

1. Go to: https://analytics.google.com
2. Select **"AI Solutions Hub"** property (or create one if needed)
3. Click **Admin** (gear icon, bottom left)
4. Under **Property**, click **Data Streams**
5. Click on your web stream (or create one for `ai-solutions-hub.vercel.app`)
6. Copy the **Measurement ID** (looks like `G-XXXXXXXXXX`)

## Step 2: Add Measurement ID to Your Site

Once you have your Measurement ID:

1. Open: `/Users/ericmasmela/digital-hermit/projects/ai-solutions-hub/index.html`
2. Find lines 9 and 14 (Google Analytics code)
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID (both places)
4. Save the file
5. Deploy: `vercel --prod`

## Step 3: Set Up Conversion Tracking

### Track Form Submissions

Add event tracking to contact forms:

```javascript
// Track "Get Started" button clicks
gtag('event', 'conversion', {
  'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
  'value': 949.00,
  'currency': 'USD'
});
```

### Track Button Clicks

Track important actions:
- "Get Started" buttons
- "Contact" buttons
- "Get Free Audit" clicks
- ROI Calculator usage

## Step 4: Set Up Goals in Google Analytics

1. Go to **Admin** → **Goals**
2. Create new goal:
   - **Goal Type:** Event
   - **Category:** Contact
   - **Action:** Form Submit
   - **Value:** $949 (or appropriate value)

3. Create goals for:
   - Contact form submissions
   - "Get Started" button clicks
   - ROI Calculator completions
   - Lead magnet downloads

## Step 5: Set Up Custom Reports

### Key Metrics to Track:

1. **Traffic Sources**
   - Where visitors come from
   - Which marketing channels work best

2. **User Behavior**
   - Pages visited
   - Time on site
   - Bounce rate

3. **Conversions**
   - Form submissions
   - Button clicks
   - ROI calculator usage

4. **Device/Browser**
   - Mobile vs desktop
   - Browser types

## Step 6: Connect Google Search Console

1. Go to: https://search.google.com/search-console
2. Add property: `ai-solutions-hub.vercel.app`
3. Verify ownership
4. Link to Google Analytics

This shows:
- Search queries bringing traffic
- Click-through rates
- Search rankings

## Step 7: Set Up Email Reports

1. In Google Analytics, go to **Admin** → **Custom Reports**
2. Create reports for:
   - Weekly traffic summary
   - Conversion tracking
   - Top pages
3. Schedule email delivery

## Quick Actions Needed

**Right Now:**
1. [ ] Get your Google Analytics Measurement ID
2. [ ] Replace `G-XXXXXXXXXX` in index.html
3. [ ] Deploy to Vercel
4. [ ] Test in Realtime reports

**This Week:**
1. [ ] Set up conversion goals
2. [ ] Connect Google Search Console
3. [ ] Set up email reports
4. [ ] Review analytics data weekly

---

**Need help?** Share your Measurement ID and I'll update the code for you!

