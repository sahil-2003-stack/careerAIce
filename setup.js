#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 CareerAIce Setup Script');
console.log('==========================\n');

// Check if .env file exists
const envPath = path.join(process.cwd(), '.env');
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env file...');
  
  const envContent = `# Database (PostgreSQL)
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
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env file created successfully!');
  console.log('⚠️  Please update the .env file with your actual credentials.\n');
} else {
  console.log('✅ .env file already exists.\n');
}

console.log('📋 Next Steps:');
console.log('1. Update the .env file with your actual credentials');
console.log('2. Run: npm install');
console.log('3. Run: npx prisma generate');
console.log('4. Run: npx prisma db push');
console.log('5. Run: npm run dev');
console.log('\n📖 For detailed instructions, see SETUP.md');

console.log('\n🔗 Useful Links:');
console.log('- Database: https://neon.tech or https://supabase.com');
console.log('- Clerk: https://clerk.com');
console.log('- Gemini AI: https://makersuite.google.com/app/apikey'); 