<div align="center">

# 📚 Bookified

### Transform your PDFs into immersive audiobook experiences

![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green?style=for-the-badge&logo=mongodb)
![Clerk](https://img.shields.io/badge/Clerk-Auth-purple?style=for-the-badge&logo=clerk)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8?style=for-the-badge&logo=tailwind-css)

</div>

---

## 🎯 About

Bookified is a modern web application that converts PDF documents into audiobooks using advanced AI technology. Upload your PDFs, choose your preferred voice persona, and enjoy listening to your documents on the go.

---

## 🛠️ Tech Stack

**Frontend:**

- Next.js 15.1.3 (App Router)
- React 19
- TypeScript
- TailwindCSS
- Shadcn/UI Components

**Backend:**

- Node.js
- MongoDB with Mongoose
- Clerk Authentication
- PlayHT AI (Text-to-Speech)
- UploadThing (File Management)

**Additional Tools:**

- PDF.js for PDF rendering
- Zod for validation
- Lucide React for icons
- React Hook Form

---

## 📁 Folder Structure

```
bookified/
├── app/
│   ├── (root)/              # Main application pages
│   ├── api/                 # API routes
│   ├── books/               # Book-related pages
│   ├── hooks/               # Custom React hooks
│   ├── globals.css          # Global styles
│   └── layout.tsx           # Root layout
├── components/
│   ├── BookCard.tsx         # Book display component
│   ├── BookSearch.tsx       # Search functionality
│   ├── FileUploader.tsx     # File upload component
│   ├── HeroSection.tsx      # Landing page hero
│   ├── Navbar.tsx           # Navigation bar
│   ├── Transcript.tsx       # Audio transcript viewer
│   ├── UploadForm.tsx       # Book upload form
│   └── ...                  # Other UI components
├── database/
│   └── ...                  # MongoDB models and connection
├── lib/
│   ├── actions/             # Server actions
│   ├── constants.ts         # App constants
│   ├── zod.ts              # Validation schemas
│   └── ...                  # Utility functions
├── public/                  # Static assets
├── .env.local              # Environment variables
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

---

## ✨ Features

- 🔐 **Secure Authentication** - Powered by Clerk with Google OAuth
- 📤 **PDF Upload** - Drag-and-drop or click to upload PDF files
- 🎙️ **AI Voice Generation** - Multiple voice personas to choose from
- 🔊 **Audio Playback** - High-quality audio player with controls
- 📖 **Book Library** - Browse and manage your converted books
- 🔍 **Search Functionality** - Find books by title or author
- 📱 **Responsive Design** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Optimized with Next.js 15 and React 19
- 🎨 **Modern UI** - Beautiful interface with Shadcn components
- 📊 **Transcript View** - Read along while listening

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB database
- Clerk account
- Vapi account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/bookified.git
cd bookified
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables in `.env.local`:

````env
# Database
MONGODB_URI

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY

#VAPI
NEXT_PUBLIC_VAPI_API_KEY
NEXT_PUBLIC_ASSISTANT_ID

#Vercel Storage
Bookified_READ_WRITE_TOKEN


4. Run the development server:

```bash
npm run dev
````

5. Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 📝 Usage

1. **Sign Up/Sign In** - Create an account or log in with Google
2. **Upload a Book** - Click "Upload Book" and fill in the details:
   - Title and author name
   - Select a voice persona
   - Upload PDF file (max 50MB)
   - Optional: Upload custom cover image
3. **Browse Library** - View all your converted books
4. **Search Books** - Use the search bar to find specific titles or authors
5. **Listen** - Click on any book to start listening
6. **Read Along** - View the transcript while the audio plays

---

## 🙏 Thank You

Thank you for checking out Bookified! This project was built with passion to make reading more accessible and enjoyable for everyone.

If you find this project helpful:

- ⭐ Star the repository
- 🐛 Report bugs or suggest features
- 🤝 Contribute to the codebase
- 📢 Share it with others

---

<div align="center">

Made with ❤️ by Setsuna

[Website](https://portfolio-baohse321-gmailcoms-projects.vercel.app/) • [GitHub](https://github.com/baosetsuna123) • [LinkedIn](https://www.linkedin.com/in/bao-tran-5b0362285/)

</div>
