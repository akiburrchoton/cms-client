# 🎓 Course Management System (CMS)

A robust, user-friendly platform for educators and students to manage, access, and track courses and enrollment. Built as a single-page application (SPA) to streamline course administration, material delivery, and student progress tracking.

## 🔗 Live Site

👉 [Visit Live Site](https://lms-auth-e8d83.web.app/)

---

## ✨ Key Features

- 🔐 **Secure Authentication**
  Google Sign-In with separate roles for **Instructors** and **Students**.
- 📚 **Course Catalog**
  Browse all available courses with key details (Instructor, duration, price).
- 📝 **Enrollment Management**
  Students can enroll in courses; Instructors can view enrolled students.
- ⭐ **Instructor Dashboard**
  Private route to manage, add, edit, and delete the courses they own.
- 📱 **Fully Responsive Design**
  Mobile-first layout using **Tailwind CSS**.
- 🛡️ **Private Route Protection**
  Auth-protected views and role-based access control (e.g., only Instructors can access the "Manage Courses" view).

---

## 🚀 Tech Stack

**Frontend**

- **React.js (Vite)**
- **React Router DOM**
- **Firebase Auth**
- **Tailwind CSS**
- **Axios**

**Backend**

- **Node.js + Express.js**
- **MongoDB Atlas**
- **CORS** for API security

---

## 🧠 Project Architecture

- **SPA** using React communicates with a **RESTful Node API**.
- **JWT Auth Flow** secures protected routes and embeds user role information.
- **React Hooks** manage complex application state (e.g., fetching enrollment data).
- **MongoDB** handles dynamic content (courses, users, enrollments).
- **Axios** handles secure API requests with attached authentication headers.

---

## ⚙️ Installation

### 🔧 Frontend

```bash
git clone https://github.com/your-username/course-management-system-frontend.git
cd course-management-system-frontend
npm install
```

### Create a `.env` file in the root:

```bash
VITE_API_BASE_URL=https://your-backend-url.com/api
VITE_FIREBASE_API_KEY=your-firebase-api-key
```

### Start the dev server:

```bash
npm run dev
```

---

### 🔧 Backend

```bash
git clone https://github.com/your-username/course-management-system-backend.git
cd course-management-system-backend
npm install
npm start
```

### Add a `.env` file with:

```bash
PORT=5000
MONGODB_URI=your-mongodb-atlas-uri
JWT_SECRET=your-secure-jwt-secret-key
```

---

## 🛠️ Deployment

- **Frontend:** Firebase
- **Backend:** Vercel
- **Database:** MongoDB Atlas (cloud-hosted NoSQL DB).

## Future Tasks

- Curriculum/Lesson Management (nested content within courses).
- AI-Powered Study Assistant (using RAG for content-specific Q\&A).
- Payment Gateway Integration (Stripe/PayPal).
