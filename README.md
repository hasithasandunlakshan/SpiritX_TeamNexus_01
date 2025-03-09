# SecureConnect - Secure Authentication System

SecureConnect is a robust authentication system built with Next.js 13, MongoDB, and NextAuth.js, providing a secure and user-friendly experience for user registration and authentication.

## 🚀 Features

### Signup System
- Username validation (8+ characters, uniqueness check)
- Strong password requirements:
  - Lowercase letters
  - Uppercase letters
  - Special characters
- Real-time password strength indicator
- Password confirmation matching
- Real-time validation feedback
- Success confirmation with auto-redirect

### Login System
- Secure credential validation
- Persistent sessions with JWT
- Protected routes
- Real-time validation feedback
- User-friendly error messages

### Dashboard
- Personalized welcome message
- Secure session management
- Logout functionality

## 🛠️ Tech Stack

- **Frontend**: Next.js 13, React, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js
- **Password Hashing**: bcryptjs
- **Form Management**: React Hook Form
- **Styling**: Tailwind CSS, CSS Variables
- **Icons**: Lucide React

## 📦 Prerequisites

- Node.js 18.x or later
- MongoDB installed locally or a MongoDB Atlas account
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd secure-connect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/secure-connect
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   ```

4. **Start MongoDB**
   - **Local MongoDB**:
     ```bash
     mongod
     ```
   - **OR use MongoDB Atlas**:
     - Create a cluster
     - Get your connection string
     - Update MONGODB_URI in `.env`

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 💾 Database Setup

### Local MongoDB Setup
1. Install MongoDB Community Edition
2. Start MongoDB service
3. The application will automatically:
   - Connect to MongoDB
   - Create required collections
   - Set up indexes

### MongoDB Atlas Setup
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Replace MONGODB_URI in `.env` with your connection string

## 🔒 Security Features

- Secure password hashing with bcryptjs
- JWT-based session management
- Protected API routes
- CSRF protection
- Rate limiting on authentication endpoints
- Secure HTTP headers
- Input validation and sanitization

## 🤔 Assumptions

1. **Environment**:
   - Users have Node.js and npm installed
   - MongoDB is accessible (local or Atlas)
   - Modern browser support required

2. **Security**:
   - HTTPS in production environment
   - Secure secrets management
   - Regular security updates

3. **Usage**:
   - Single session per user
   - Username uniqueness across system
   - English language interface

## 🎯 Project Structure

```
secure-connect/
├── app/                    # Next.js 13 app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Protected dashboard page
│   ├── login/            # Login page
│   └── signup/           # Signup page
├── components/            # React components
├── lib/                   # Utility functions and DB config
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## 🔄 API Endpoints

- `POST /api/register` - User registration
- `POST /api/auth/[...nextauth]` - Authentication endpoints
- `GET /api/auth/session` - Session management

## 🎨 UI Components

Built with shadcn/ui and Tailwind CSS:
- Custom form inputs
- Password strength indicator
- Toast notifications
- Loading states
- Error messages
- Responsive design

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.