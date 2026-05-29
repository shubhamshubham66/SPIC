// School Information
export const SCHOOL_INFO = {
  name: "SPIC International School",
  shortName: "SPIC",
  tagline: "Nurturing Minds, Shaping Futures",
  description: "A premier educational institution committed to academic excellence, character development, and holistic growth for over 2000+ students.",
  established: 2005,
  address: "123 Education Avenue, Knowledge City, State - 110001",
  phone: "+91 98765 43210",
  email: "info@spicschool.edu.in",
  website: "www.spicschool.edu.in",
  principal: "Dr. Rajesh Kumar Sharma",
  principalMessage: "At SPIC International School, we believe in nurturing every child's potential to its fullest. Our commitment to academic excellence combined with holistic development ensures that our students are prepared to face the challenges of tomorrow. We focus on innovation, creativity, and character building that goes beyond textbooks.",
};

// Navigation Links
export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Admissions", path: "/admissions" },
  { name: "Courses", path: "/courses" },
  { name: "Results", path: "/results" },
  { name: "Gallery", path: "/gallery" },
  { name: "Events", path: "/events" },
  { name: "Notices", path: "/notices" },
  { name: "Contact", path: "/contact" },
];

// Stats
export const SCHOOL_STATS = [
  { label: "Students", value: "2000+", icon: "students" },
  { label: "Teachers", value: "120+", icon: "teachers" },
  { label: "Courses", value: "50+", icon: "courses" },
  { label: "Awards", value: "200+", icon: "awards" },
];

// Courses
export const COURSES = [
  {
    id: 1,
    name: "Primary Education",
    grades: "Class 1-5",
    description: "Building strong foundations with creative learning methods and interactive classrooms.",
    subjects: ["English", "Mathematics", "Science", "Social Studies", "Hindi", "Computer Science", "Art & Craft"],
    icon: "primary",
  },
  {
    id: 2,
    name: "Middle School",
    grades: "Class 6-8",
    description: "Developing critical thinking and analytical skills through comprehensive curriculum.",
    subjects: ["English", "Mathematics", "Science", "Social Science", "Hindi", "Sanskrit", "Computer Science", "Physical Education"],
    icon: "middle",
  },
  {
    id: 3,
    name: "Secondary Education",
    grades: "Class 9-10",
    description: "Preparing students for board examinations with focused academic programs.",
    subjects: ["English", "Mathematics", "Physics", "Chemistry", "Biology", "Social Science", "Hindi", "Computer Applications"],
    icon: "secondary",
  },
  {
    id: 4,
    name: "Senior Secondary - Science",
    grades: "Class 11-12",
    description: "Advanced science curriculum preparing students for engineering and medical entrances.",
    subjects: ["Physics", "Chemistry", "Mathematics/Biology", "English", "Computer Science/Physical Education"],
    icon: "science",
  },
  {
    id: 5,
    name: "Senior Secondary - Commerce",
    grades: "Class 11-12",
    description: "Comprehensive commerce education for future business leaders and CA aspirants.",
    subjects: ["Accountancy", "Business Studies", "Economics", "English", "Mathematics/Informatics Practices"],
    icon: "commerce",
  },
  {
    id: 6,
    name: "Senior Secondary - Humanities",
    grades: "Class 11-12",
    description: "Exploring human experiences through literature, history, and social sciences.",
    subjects: ["History", "Political Science", "Geography", "English", "Economics/Psychology"],
    icon: "humanities",
  },
];

// Toppers Data
export const TOPPERS = [
  { id: 1, name: "Priya Sharma", class: "XII Science", percentage: "98.6%", year: "2024", photo: null, achievement: "AIR 45 in JEE Mains" },
  { id: 2, name: "Rahul Verma", class: "XII Commerce", percentage: "97.8%", year: "2024", photo: null, achievement: "School Topper" },
  { id: 3, name: "Ananya Singh", class: "X", percentage: "99.2%", year: "2024", photo: null, achievement: "District Topper" },
  { id: 4, name: "Arjun Patel", class: "XII Science", percentage: "97.4%", year: "2024", photo: null, achievement: "NEET Qualifier" },
  { id: 5, name: "Sneha Gupta", class: "XII Humanities", percentage: "96.8%", year: "2024", photo: null, achievement: "CLAT Qualifier" },
  { id: 6, name: "Vikash Kumar", class: "X", percentage: "98.4%", year: "2024", photo: null, achievement: "State Rank 12" },
];

// Events
export const EVENTS = [
  { id: 1, title: "Annual Sports Day", date: "2024-12-15", description: "Inter-house sports competition with track & field events.", category: "Sports", status: "upcoming" },
  { id: 2, title: "Science Exhibition", date: "2024-11-20", description: "Students showcase innovative science projects and experiments.", category: "Academic", status: "upcoming" },
  { id: 3, title: "Annual Day Celebration", date: "2025-01-26", description: "Cultural performances, awards ceremony, and celebrations.", category: "Cultural", status: "upcoming" },
  { id: 4, title: "Parent-Teacher Meeting", date: "2024-11-10", description: "Quarterly academic progress discussion with parents.", category: "Academic", status: "past" },
  { id: 5, title: "Inter-School Debate", date: "2024-12-05", description: "District-level debate competition hosted by SPIC.", category: "Competition", status: "upcoming" },
  { id: 6, title: "Art & Craft Exhibition", date: "2024-12-20", description: "Display of student artwork and creative projects.", category: "Cultural", status: "upcoming" },
];

// Notices
export const NOTICES = [
  { id: 1, title: "Winter Vacation Schedule", date: "2024-11-25", content: "School will remain closed from December 25, 2024 to January 5, 2025 for winter vacation.", priority: "high", category: "General" },
  { id: 2, title: "Class 10 Pre-Board Exams", date: "2024-11-22", content: "Pre-board examinations for Class 10 will commence from December 10, 2024.", priority: "high", category: "Examination" },
  { id: 3, title: "Fee Submission Deadline", date: "2024-11-20", content: "Last date for quarterly fee submission is November 30, 2024. Late fee charges will apply.", priority: "medium", category: "Fee" },
  { id: 4, title: "Annual Function Rehearsals", date: "2024-11-18", content: "Rehearsals for annual function begin from December 1. Selected students must attend.", priority: "low", category: "Event" },
  { id: 5, title: "New Library Books Available", date: "2024-11-15", content: "500+ new books have been added to the school library. Students can borrow from Monday.", priority: "low", category: "General" },
  { id: 6, title: "PTM Schedule - November", date: "2024-11-10", content: "Parent Teacher Meeting scheduled for November 10, 2024 from 9 AM to 1 PM.", priority: "medium", category: "Meeting" },
];

// Gallery Images (placeholder descriptions)
export const GALLERY_ITEMS = [
  { id: 1, title: "Annual Day 2024", category: "Events", description: "Cultural performances by students" },
  { id: 2, title: "Science Lab", category: "Infrastructure", description: "State-of-the-art science laboratories" },
  { id: 3, title: "Sports Day", category: "Sports", description: "Inter-house athletics competition" },
  { id: 4, title: "Computer Lab", category: "Infrastructure", description: "Modern computer facilities" },
  { id: 5, title: "Library", category: "Infrastructure", description: "Well-stocked school library" },
  { id: 6, title: "Classroom", category: "Infrastructure", description: "Smart classrooms with digital boards" },
  { id: 7, title: "Art Exhibition", category: "Events", description: "Student art showcase" },
  { id: 8, title: "Independence Day", category: "Events", description: "Flag hoisting ceremony" },
  { id: 9, title: "Cricket Tournament", category: "Sports", description: "Inter-school cricket match" },
];

// Classes and Sections
export const CLASSES = [
  "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
  "Class 11 Science", "Class 11 Commerce", "Class 11 Humanities",
  "Class 12 Science", "Class 12 Commerce", "Class 12 Humanities",
];

export const SECTIONS = ["A", "B", "C", "D"];

// User Roles
export const ROLES = {
  ADMIN: "admin",
  TEACHER: "teacher",
  STUDENT: "student",
  PARENT: "parent",
};

