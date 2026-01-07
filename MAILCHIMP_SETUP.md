# Mailchimp Integration Setup Guide

This guide will help you connect the giveaway form to your Mailchimp account.

## Step 1: Get Your Mailchimp API Key

1. Log in to your Mailchimp account
2. Click on your profile icon (top right) → **Account & Billing**
3. Go to **Extras** → **API keys**
4. Click **Create A Key**
5. Copy the API key (it will look like: `abc123def456ghi789-us1`)

## Step 2: Find Your Server Prefix

The server prefix is part of your API key or can be found in your Mailchimp dashboard URL:

- Look at the end of your API key (e.g., `-us1`, `-us2`, `-us6`)
- Or check your Mailchimp dashboard URL (e.g., `https://us1.admin.mailchimp.com`)
- Common prefixes: `us1`, `us2`, `us6`, `us13`, `us17`, `us18`, `us19`, `us20`, `us21`

## Step 3: Get Your List/Audience ID

1. Go to **Audience** → **All contacts**
2. Click **Settings** → **Audience name and defaults**
3. Scroll down to find your **Audience ID** (it will look like: `a1b2c3d4e5`)
4. Copy this ID

## Step 4: Set Up Environment Variables

1. Create a `.env.local` file in the root of your project (same level as `package.json`)
2. Add the following variables:

```env
MAILCHIMP_API_KEY=your_api_key_here
MAILCHIMP_SERVER_PREFIX=us1
MAILCHIMP_LIST_ID=your_list_id_here
```

Replace the placeholder values with your actual credentials.

## Step 5: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to `/giveaway`
3. Fill out the form and submit
4. Check your Mailchimp audience to verify the contact was added

## Important Notes

- **Never commit `.env.local` to git** - it's already in `.gitignore`
- The form will add contacts with the tag "giveaway-entry" and "adult-family-home"
- Contacts will be subscribed immediately (change `status: "subscribed"` to `"pending"` in the API route if you want double opt-in)
- The form maps fields as follows:
  - Email → Email Address
  - Owner Name → First Name / Last Name
  - Phone → Phone Number
  - Address → Address
  - City → City
  - State → State
  - ZIP → ZIP Code
  - Business Name → Company

## Troubleshooting

### Error: "Server configuration error"

- Make sure all three environment variables are set in `.env.local`
- Restart your development server after adding environment variables

### Error: "Member Exists"

- The email is already in your Mailchimp list
- This is expected behavior - duplicate entries are prevented

### Error: "Invalid API Key"

- Double-check your API key is correct
- Make sure you copied the entire key including the server prefix

### Contacts not appearing in Mailchimp

- Check the browser console and server logs for errors
- Verify your List ID is correct
- Make sure your Mailchimp account is active

## Production Deployment on Vercel

### Step-by-Step Instructions:

1. **Go to your Vercel Dashboard**

   - Visit [vercel.com](https://vercel.com) and log in
   - Select your project (or create a new one if you haven't deployed yet)

2. **Navigate to Project Settings**

   - Click on your project
   - Go to **Settings** tab (top navigation)
   - Click **Environment Variables** in the left sidebar

3. **Add Each Environment Variable**
   Click "Add New" for each variable:

   **Variable 1:**

   - Key: `MAILCHIMP_API_KEY`
   - Value: Your Mailchimp API key (e.g., `abc123def456ghi789-us1`)
   - Environments: ✅ Production, ✅ Preview, ✅ Development

   **Variable 2:**

   - Key: `MAILCHIMP_SERVER_PREFIX`
   - Value: Your server prefix (e.g., `us1`)
   - Environments: ✅ Production, ✅ Preview, ✅ Development

   **Variable 3:**

   - Key: `MAILCHIMP_LIST_ID`
   - Value: Your Mailchimp list/audience ID (e.g., `a1b2c3d4e5`)
   - Environments: ✅ Production, ✅ Preview, ✅ Development

4. **Save and Redeploy**
   - Click **Save** after adding each variable
   - Go to the **Deployments** tab
   - Click the three dots (⋯) on your latest deployment
   - Select **Redeploy** (or push new code to trigger a new deployment)

### Quick Deploy via CLI (Alternative)

If you prefer using the Vercel CLI:

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Link your project (if not already linked)
vercel link

# Set environment variables
vercel env add MAILCHIMP_API_KEY
vercel env add MAILCHIMP_SERVER_PREFIX
vercel env add MAILCHIMP_LIST_ID

# Deploy
vercel --prod
```

### Important Notes:

- **Environment variables are encrypted** and only visible to you
- **Changes take effect** after redeployment
- **Use the same values** as your `.env.local` file
- **Don't commit** `.env.local` to git (it's already in `.gitignore`)
