# CareerAIce Setup Guide

This guide will help you set up the CareerAIce project to be fully functional.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

## Step 1: Install Dependencies

First, install the missing dependencies that are required but not in package.json:

```bash
npm install @google/generative-ai react-hook-form @hookform/resolvers zod @uiw/react-md-editor html2pdf.js recharts date-fns react-spinners
```

## Step 2: Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database (PostgreSQL)
DATABASE_URL="postgresql://username:password@localhost:5432/careeraice"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_your_clerk_publishable_key"
CLERK_SECRET_KEY="sk_test_your_clerk_secret_key"

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

# Google Gemini AI
GEMINI_API_KEY="your_gemini_api_key_here"
```

## Step 3: Database Setup

### Option A: Neon (Recommended for Production)
1. Go to https://neon.tech
2. Create a new project
3. Copy the connection string
4. Update DATABASE_URL in your .env file

### Option B: Supabase
1. Go to https://supabase.com
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string
5. Update DATABASE_URL in your .env file

### Option C: Local PostgreSQL
1. Install PostgreSQL locally
2. Create a database named "careeraice"
3. Update DATABASE_URL in your .env file

## Step 4: Clerk Authentication Setup

1. Go to https://clerk.com
2. Create a new application
3. Go to API Keys in the dashboard
4. Copy your Publishable Key and Secret Key
5. Update the .env file with your keys

## Step 5: Google Gemini AI Setup

1. Go to https://makersuite.google.com/app/apikey
2. Create a new API key
3. Copy the API key
4. Update GEMINI_API_KEY in your .env file

## Step 6: Database Migration

Run the following commands to set up your database:

```bash
# Generate Prisma client
npx prisma generate

# Push the schema to your database
npx prisma db push
```

## Step 7: Start Development Server

```bash
npm run dev
```

The application should now be running at http://localhost:3000

## Step 8: First Time Setup

1. Visit http://localhost:3000
2. Sign up for a new account
3. Complete the onboarding process
4. You'll be redirected to the dashboard

## Troubleshooting

### Common Issues:

1. **Database Connection Error**
   - Verify your DATABASE_URL is correct
   - Ensure your database is running
   - Check if the database exists

2. **Clerk Authentication Issues**
   - Verify your Clerk keys are correct
   - Check that the URLs in .env match your Clerk app settings

3. **Gemini AI Errors**
   - Verify your GEMINI_API_KEY is correct
   - Check if you have sufficient API quota

4. **Missing Dependencies**
   - Run `npm install` again
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## Project Structure

```
careerAIce/
├── actions/           # Server actions
├── app/              # Next.js app router
│   ├── (auth)/       # Authentication pages
│   ├── (main)/       # Main application pages
│   └── api/          # API routes
├── components/        # Reusable UI components
├── data/             # Static data files
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── prisma/           # Database schema
└── public/           # Static assets
```

## Features

- **AI-Powered Cover Letter Generation**: Create tailored cover letters
- **Resume Builder**: Build and export professional resumes
- **Interview Preparation**: Practice with industry-specific questions
- **Industry Insights**: Get real-time market data and trends
- **User Authentication**: Secure login with Clerk
- **Database Storage**: PostgreSQL with Prisma ORM

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js API Routes, Server Actions
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **AI**: Google Gemini
- **UI Components**: Shadcn/ui, Radix UI
- **Charts**: Recharts
- **PDF Generation**: html2pdf.js
- **Markdown Editor**: @uiw/react-md-editor

## Deployment

For production deployment, consider:
- Vercel (recommended for Next.js)
- Railway
- Render
- DigitalOcean App Platform

Make sure to set up all environment variables in your production environment. 