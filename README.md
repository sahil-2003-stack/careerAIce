# CareerAIce - AI-Powered Career Development Platform

A comprehensive career development platform that combines AI-powered tools with industry-specific insights to help professionals advance their careers.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd careerAIce
   ```

2. **Run the setup script**
   ```bash
   npm run setup
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up your environment variables**
   - Update the `.env` file with your actual credentials
   - See [Environment Setup](#environment-setup) for detailed instructions

5. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **Visit the application**
   - Open http://localhost:3000
   - Sign up and complete onboarding

## 🔧 Environment Setup

### Required Environment Variables

Create a `.env` file in the root directory:

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

### Getting Your API Keys

#### Database (PostgreSQL)
- **Neon** (Recommended): https://neon.tech
- **Supabase**: https://supabase.com
- **Local**: Install PostgreSQL locally

#### Clerk Authentication
1. Go to https://clerk.com
2. Create a new application
3. Copy your Publishable Key and Secret Key
4. Update the `.env` file

#### Google Gemini AI
1. Go to https://makersuite.google.com/app/apikey
2. Create a new API key
3. Copy the API key
4. Update the `.env` file

## 📚 Features

- **🤖 AI-Powered Cover Letter Generation**: Create tailored cover letters for specific job applications
- **📄 Smart Resume Builder**: Build ATS-optimized resumes with AI assistance
- **🎯 Interview Preparation**: Practice with industry-specific questions and get feedback
- **📊 Industry Insights**: Real-time market data, salary trends, and growth analysis
- **🔐 Secure Authentication**: User management with Clerk
- **📈 Progress Tracking**: Monitor your career development journey

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Next.js API Routes, Server Actions
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **AI**: Google Gemini
- **UI Components**: Shadcn/ui, Radix UI
- **Charts**: Recharts
- **PDF Generation**: html2pdf.js
- **Markdown Editor**: @uiw/react-md-editor

## 📁 Project Structure

```
careerAIce/
├── actions/           # Server actions for data operations
├── app/              # Next.js app router
│   ├── (auth)/       # Authentication pages
│   ├── (main)/       # Main application pages
│   └── api/          # API routes
├── components/        # Reusable UI components
├── data/             # Static data files
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and configurations
├── prisma/           # Database schema and migrations
└── public/           # Static assets
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically

### Other Platforms
- **Railway**: Great for full-stack apps
- **Render**: Good for Node.js applications
- **DigitalOcean App Platform**: Scalable cloud deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For detailed setup instructions, see [SETUP.md](./SETUP.md)

For issues and questions:
- Create an issue in the repository
- Check the troubleshooting section in SETUP.md
