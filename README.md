# 🌍 TripMingle - Travel Buddy Platform

TripMingle is a high-performance, responsive web application built with Next.js 15. It serves as a social bridge for travelers, enabling them to share itineraries, discover popular destinations, and find compatible travel partners for their journeys.

## 🚀 Overview
TripMingle simplifies the process of group travel. Users can browse upcoming trips, while specialized "Hosts" can propose plans. The platform ensures quality control through an Admin Approval system, making it a trusted ecosystem for the travel community.

## ✨ Key Features
- **Modern User Interface:** Built with Tailwind CSS and Framer Motion for smooth animations and a premium look.
- **Dynamic Routing:** Utilizes Next.js App Router for optimized navigation and SEO-friendly pages.
- **Role-Based Dashboards:** - **Admin:** Review, approve, and manage pending travel plans and platform stats.
  - **Host:** Create, edit, and track participation in travel itineraries.
  - **User:** Explore trips, join groups, and manage personal profiles.
- **Advanced Search Engine:** Filter trips by destination, budget, duration, and interests.
- **Real-time Notifications:** Integrated with React Hot Toast for instant user feedback.

## 🛠 Technology Stack
- **Framework:** Next.js 15 (Turbopack enabled)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Client State:** React Context API
- **Data Fetching:** Fetch API with unwrap Promise patterns
- **Form Handling:** React Hook Form 

## 📦 Project Structure
- `src/app/`: Next.js App Router files (Pages, Layouts).
- `src/components/`: Reusable UI components (Navbar, Footer, Travel Cards).
- `src/context/`: Authentication and Global State management.
- `src/app/(dashboardLayout)/`: Grouped layouts for Admin, Host, and User dashboards.

## ⚙️ Installation & Setup
1. **Clone the Project:**
   ```bash
   git clone [https://github.com/muntasir010/TripMingle_Frontend]

## Install Dependencies:

Bash

npm install
Environment Configuration: Create a .env.local file:

### Code snippet

NEXT_PUBLIC_API_URL=https://tripmingle-backend.onrender.com/api/v1
NEXT_PUBLIC_BACKEND_URL=https://tripmingle.vercel.app

### Development Mode:
Bash
npm run dev

### Build for Production:
Bash
npm run build

### 🌐 Deployment
This project is configured for automated deployment via Vercel.

#### Frontend Deployment: https://tripmingle.vercel.app
#### Backend Deployment: https://tripmingle-backend.onrender.com

#### Admin credential:
email: travel@admin.com
password: 12345678
