// ============================================================
//  PORTFOLIO DATA - Edit everything here to update your site
// ============================================================
import cryptoImg from "../assets/img/bitcoin.png";
import ratemystore from "../assets/img/ratemystore.png";
import chatApp from "../assets/img/chatApp.png";
import jobRecruiter from "../assets/img/jobRecruiter.png";
import webdev from "../assets/img/webdev.png";
import dsa from "../assets/img/Dsa.png";
import systemDes from "../assets/img/systemDesign.png";

export const personalInfo = {
  name: "Akshay Tayade",
  tagline: "Full Stack Developer",
  roles: ["Full Stack Developer", "React Developer", "Node.js Developer", "MERN Stack Developer"],
  bio: "A passionate Full-Stack Web Developer from India, building real-time, scalable, and secure web applications using React, Node.js, Express, and MongoDB.",
  email: "tayadeakshay677@gmail.com",
  phone: "9588616552",
  location: "Jalgaon, Maharashtra, India",
  resumeLink: "#", // Replace with your actual resume link
  social: {
    linkedin: "https://linkedin.com/in/akshay-tayade-037724316",
    github: "https://github.com/AkshayTayade21",
    instagram: "https://www.instagram.com/akshayy_030",
  },
};

// ============================================================
//  SKILLS - Add/remove skills as you grow
// ============================================================
export const skills = [
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 80 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 78 },
  { name: "MongoDB", level: 75 },
  { name: "HTML5 / CSS3", level: 90 },
  { name: "Socket.IO", level: 70 },
  { name: "Git & GitHub", level: 82 },
  { name: "REST APIs", level: 80 },
  { name: "Bootstrap", level: 75 },
];

// ============================================================
//  WORK EXPERIENCE - Add each job as an object in this array.
//  As a fresher, this array is empty - just add items when you get a job!
// ============================================================
export const experiences = [
  // --- HOW TO ADD A JOB ---
  // {
  //   role: "Software Engineer",
  //   company: "Company Name",
  //   location: "City, Country",
  //   startDate: "Jan 2025",
  //   endDate: "Present",        // or "Dec 2025"
  //   type: "Full-time",         // Full-time / Part-time / Internship / Contract
  //   description: "Short summary of what you did",
  //   points: [
  //     "Built X feature using Y technology",
  //     "Improved performance by Z%",
  //   ],
  //   techStack: ["React", "Node.js", "MongoDB"],
  // },
  {
    role: "Full-Stack Web Development Trainee",
    company: "Coding Ninjas",
    location: "Remote",
    startDate: "Jan 2024",
    endDate: "Mar 2025",
    type: "Bootcamp / Training",
    description: "Completed an intensive bootcamp focused on real-world full-stack development.",
    points: [
      "Completed multiple end-to-end real-world projects as part of an intensive bootcamp.",
      "Built secure, scalable, and responsive web apps using the MERN stack and REST APIs.",
      "Followed agile methodologies, collaborated in group projects, and maintained clean Git workflows.",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Git"],
  },
];

// ============================================================
//  PROJECTS - Add new projects by copying the template below
// ============================================================
export const projects = [
  {
    title: "Chat Application",
    subtitle: "Real-Time Messaging App",
    description:
      "A group chat platform similar to WhatsApp with live typing indicators, message timestamps, and profile image uploads. Mobile-friendly layout with separate user/chat panels.",
    techStack: ["Socket.IO", "MongoDB", "Node.js", "Express", "CSS"],
    image: chatApp,
    liveLink: "https://chat-app-pink-three-17.vercel.app/login",
    githubLink: "https://github.com/AkshayTayade21/ChatApp",
    featured: true,
  },
  {
    title: "Crypto Tracker App",
    subtitle: "Real-Time Cryptocurrency Prices",
    description:
      "A responsive web application to track live cryptocurrency prices. Integrated public APIs to fetch and display real-time data of Bitcoin, Ethereum, and more with search and sorting.",
    techStack: ["HTML", "CSS", "JavaScript", "REST API"],
    image: cryptoImg,
    liveLink: "https://crypto-tracker-6fyg.vercel.app/",
    githubLink: "https://github.com/AkshayTayade21/CryptoTracker",
    featured: true,
  },
  {
    title: "Job Recruiter Platform",
    subtitle: "Full-Stack Job Portal",
    description:
      "A job posting and hiring platform with recruiter and job seeker roles, job listings, and application tracking. Separate views for admins, recruiters, and job seekers with full authentication.",
    techStack: ["Express", "MongoDB", "EJS", "Node.js"],
    image: jobRecruiter,
    liveLink: "https://job-recruitment-platform.onrender.com/job",
    githubLink: "https://github.com/AkshayTayade21/job-recruitment-platform",
    featured: false,
  },
 {
  title: "Rate My Store",
  subtitle: "Full-Stack Store Rating Platform",
  description:
    "A web application where users can rate and review stores. It includes separate dashboards for admins, store owners, and normal users. Admins can manage stores and users, store owners can see ratings for their stores, and users can search, view, and rate stores with secure login and authentication. For testing, use Email: admin@test.com and Password: Password@123.",
  techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  image: ratemystore,
  liveLink: "https://rate-my-store-omega.vercel.app/",
  githubLink: "https://github.com/AkshayTayade21/RateMyStore",
  featured: true,
}
  // --- HOW TO ADD A NEW PROJECT ---
  // {
  //   title: "Your Project Name",
  //   subtitle: "Short Description Tag",
  //   description: "A detailed description of what the project does and what problem it solves.",
  //   techStack: ["React", "Node.js", "MongoDB"],
  //   image: require('../assets/img/your-project-image.png'),  // or null for placeholder
  //   liveLink: "https://your-live-link.com",
  //   githubLink: "https://github.com/yourrepo",
  //   featured: true,  // true = shown in grid, false = listed below
  // },
];

// ============================================================
//  CERTIFICATES - Add each certificate as an object below
// ============================================================
export const certificates = [
  // --- HOW TO ADD A CERTIFICATE ---
  // {
  //   title: "Certificate Title",
  //   issuer: "Issued By (e.g. Coursera, Udemy, Coding Ninjas)",
  //   date: "Month Year",
  //   credentialId: "ABC123",            // optional
  //   credentialLink: "https://...",     // link to verify
  //   image: null,                        // or require('../assets/img/cert.png')
  //   skills: ["React", "Node.js"],
  // },
  {
  title: "Bootcamp | Front End | Full Stack Development",
  issuer: "Coding Ninjas",
  date: "Feb 2025",
  credentialId: "",
  credentialLink: "#",
  image: webdev,
  skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express"],
},
{
  title: "Data Structure & Algorithms | Java",
  issuer: "Coding Ninjas",
  date: "Jun 2025",
  credentialId: "",
  credentialLink: "#",
  image: dsa,
  skills: ["Java", "DSA", "Arrays", "Linked List", "Stack", "Queue", "Recursion", "Sorting", "Searching"],
},
{
  title: "Interview Preparation | System Design",
  issuer: "Coding Ninjas",
  date: "Feb 2026",
  credentialId: "",
  credentialLink: "#",
  image: systemDes,
  skills: ["System Design", "Scalability", "Database Design", "Caching", "Load Balancing", "API Design"],
}

];

// ============================================================
//  EDUCATION
// ============================================================
export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "DN College, Faizpur",
    period: "Sept 2021 – May 2024",
    grade: "CGPA: 8.71 / 10 (72%)",
  },
  {
    degree: "Higher Secondary (Science)",
    institution: "Prakash Vidyalaya, Waghoda",
    period: "June 2019 – May 2021",
    grade: "75%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Umeshwar Vidyalaya, Dasnur",
    period: "Apr 2019",
    grade: "80%",
  },
];
