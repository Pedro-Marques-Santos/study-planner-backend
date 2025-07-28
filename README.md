# Study Planner Backend

A backend API service for the **Study Planner App**, designed to help users efficiently organize, track, and manage their study tasks, categories, and study sessions.

---

## Features

- 🔐 **Google OAuth user authentication**  
- 🗂️ Manage customizable **categories** for grouping study tasks  
- 📝 Create, update, and track **tasks** with details, links, and statuses:  
  - `NO_START`  
  - `IN_PROGRESS`  
  - `COMPLETED`  
- ⏳ Log **study sessions** with date and duration per task  
- 🧮 Support for statistics generation based on study data (planned feature)  

---

## Technology Stack

- Node.js with TypeScript  
- Express.js (or your chosen HTTP framework)  
- Prisma ORM with PostgreSQL database  
- Firebase Admin SDK for Google authentication  
- dotenv for environment variable management  

---

## Database Schema Overview

| Model          | Description                                         |
| -------------- | ------------------------------------------------- |
| **User**       | Represents users authenticated via Google OAuth    |
| **Category**   | Organizes tasks into groups or labels               |
| **Task**       | Represents a study task with name, description, status, links, and timestamps |
| **TaskCategory** | Many-to-many relationship between tasks and categories |
| **StudySession** | Logs individual study sessions with date and duration |

---

## Environment Variables

Configure your `.env` file with the following keys:

```env
DATABASE_URL=postgresql://user:password@host:port/database
PROJECT_NAME=API is Running
```

## Getting Started

git clone https://github.com/YOUR_USERNAME/study-planner-backend.git
cd study-planner-backend
npm install

- Set environment variables
cp .env.local.example .env.local
- Edit .env.local with your credentials

- Run Prisma migrations
npx prisma migrate dev

- Start development server
npm run dev
