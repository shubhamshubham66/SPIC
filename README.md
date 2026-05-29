# SPIC International School - Management ERP Platform

A complete, modern School Management Website and ERP Platform built with React.js, Vite, Tailwind CSS, and Firebase. Designed for 2000+ students with a premium, mobile-responsive interface.

![Tech Stack](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-3.3-cyan) ![Firebase](https://img.shields.io/badge/Firebase-10-orange)

---

## Features

### Public Website
- **Homepage** - Hero section, highlights, toppers, principal's message, notices, events, gallery, courses
- **About** - School history, mission/vision, timeline, infrastructure
- **Admissions** - Online application form with document requirements
- **Courses** - Complete academic programs (Primary to Senior Secondary)
- **Results** - Online result checking system with Roll Number search
- **Gallery** - Filterable photo gallery with categories
- **Events** - Upcoming and past events with categories
- **Notices** - Priority-based notice board with filtering
- **Contact** - Contact form with school information

### Student Portal
- Personal Dashboard with stats and schedule
- Profile Management
- Attendance Tracking with visual charts
- Academic Results
- Course Information
- Fee Details
- Downloads section

### Teacher Portal
- Teacher Dashboard
- Attendance Management (mark present/absent)
- Student Search
- Result Upload
- Schedule View

### Admin Dashboard
- Complete Admin Overview with analytics
- Student Management (CRUD operations)
- Teacher Management
- Notice Publishing
- Global Search (students, teachers, courses, notices)
- Event & Gallery Management
- Admissions Management
- Course Management
- Analytics Dashboard

### Authentication
- OTP-based mobile login (Firebase Phone Auth)
- Role-based access (Student/Teacher/Admin)
- Protected routes
- Session persistence

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Frontend | React.js 18 + Vite 5 |
| Styling | Tailwind CSS 3.3 |
| Animations | CSS Animations + Tailwind |
| Routing | React Router DOM v6 |
| Backend | Firebase (Auth, Firestore, Storage) |
| State | React Context API |
| Auth | Firebase Phone Auth (OTP) |
| Deployment | Vercel / Netlify / Firebase Hosting |

---

## Project Structure

```
SPIC/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── DashboardLayout.jsx
│   │   └── home/
│   │       ├── HeroSection.jsx
│   │       ├── TopperSection.jsx
│   │       ├── PrincipalMessage.jsx
│   │       ├── NoticesPreview.jsx
│   │       ├── EventsPreview.jsx
│   │       ├── CoursesPreview.jsx
│   │       └── GalleryPreview.jsx
│   ├── contexts/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Admissions.jsx
│   │   ├── Courses.jsx
│   │   ├── Results.jsx
│   │   ├── Gallery.jsx
│   │   ├── Events.jsx
│   │   ├── Notices.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── StudentDashboard.jsx
│   │   ├── TeacherDashboard.jsx
│   │   └── AdminDashboard.jsx
│   ├── utils/
│   │   ├── firebase.js
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase project (for backend)

### Installation

```bash
# Clone the repository
git clone https://github.com/shubhamshubham66/SPIC.git
cd SPIC

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Firebase credentials

# Start development server
npm run dev
```

### Demo Credentials
- **Phone**: Any 10-digit number (e.g., 9876543210)
- **OTP**: `123456`
- **Roles**: Select Student/Teacher/Admin on login page

---

## Database Schema (Firebase Firestore)

### Collections

```
users/
├── {userId}
│   ├── name: string
│   ├── phone: string
│   ├── role: "student" | "teacher" | "admin"
│   ├── createdAt: timestamp
│   └── profilePhoto: string (URL)

students/
├── {studentId}
│   ├── name, fatherName, motherName: string
│   ├── class, section, rollNo: string
│   ├── dob, address, phone, email: string
│   ├── studentId: string (auto-generated)
│   ├── admissionDate: timestamp
│   └── status: "active" | "inactive"

teachers/
├── {teacherId}
│   ├── name, subject, qualification: string
│   ├── experience, phone, email: string
│   ├── teacherId: string
│   ├── assignedClasses: array
│   └── status: "active" | "inactive"

results/
├── {resultId}
│   ├── studentId, class, section, session: string
│   ├── subjects: array [{name, maxMarks, obtained}]
│   ├── uploadedBy: string (teacherId)
│   └── uploadedAt: timestamp

attendance/
├── {date_class_section}
│   ├── date: string
│   ├── class, section: string
│   ├── records: array [{studentId, status}]
│   └── markedBy: string (teacherId)

notices/
├── {noticeId}
│   ├── title, content: string
│   ├── priority: "high" | "medium" | "low"
│   ├── category: string
│   ├── date: timestamp
│   └── publishedBy: string

events/
├── {eventId}
│   ├── title, description, date: string
│   ├── category, status: string
│   └── createdAt: timestamp

gallery/
├── {imageId}
│   ├── title, description, category: string
│   ├── imageUrl: string
│   └── uploadedAt: timestamp
```

---

## API Structure

### Authentication
- `POST /auth/send-otp` - Send OTP to phone
- `POST /auth/verify-otp` - Verify OTP and login
- `POST /auth/logout` - Logout user

### Students
- `GET /students` - List all students
- `GET /students/:id` - Get student details
- `POST /students` - Create student
- `PUT /students/:id` - Update student
- `DELETE /students/:id` - Delete student

### Teachers
- `GET /teachers` - List all teachers
- `GET /teachers/:id` - Get teacher details
- `POST /teachers` - Create teacher
- `PUT /teachers/:id` - Update teacher

### Results
- `GET /results/search?roll=:roll` - Search results
- `POST /results` - Upload results
- `GET /results/:studentId` - Get student results

### Notices
- `GET /notices` - List all notices
- `POST /notices` - Create notice
- `PUT /notices/:id` - Update notice
- `DELETE /notices/:id` - Delete notice

---

## Security

- **Authentication**: Firebase Phone Auth with OTP verification
- **Authorization**: Role-based access control (RBAC)
- **Protected Routes**: Dashboard routes require authentication
- **Data Validation**: Client and server-side validation
- **Session Management**: Secure token-based sessions
- **HTTPS**: All data transmitted over HTTPS

---

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

---

## Scalability Considerations

1. **Database Indexing** - Firestore composite indexes for fast queries
2. **Pagination** - Cursor-based pagination for large datasets
3. **Image Optimization** - CDN + WebP format for gallery
4. **Caching** - Service Worker + browser caching
5. **Code Splitting** - Lazy loading routes for faster initial load
6. **CDN** - Static assets served via CDN
7. **Rate Limiting** - API rate limiting for security
8. **Monitoring** - Firebase Analytics + Performance monitoring

---

## License

MIT License - See LICENSE file for details.

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

Built with ❤️ for SPIC International School
