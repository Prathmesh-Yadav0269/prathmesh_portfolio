require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Project = require('../models/Project');

const verifiedProjects = [
  {
    title: "Opsync",
    slug: "opsync",
    category: "Team Collaboration Platform",
    summary: "A MERN-based collaboration platform for task tracking, team communication, role-based access, and file sharing.",
    problem: "Teams need a centralized platform to manage collaboration, tasks, communication, and shared files.",
    solution: "Opsync provides a structured workspace where users can manage tasks, collaborate with team members, communicate in real time, and share files securely.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.io", "Multer"],
    features: [
      "Authentication",
      "Role-Based Access",
      "Task Tracking",
      "Real-Time Chat",
      "File Sharing",
      "Project Management"
    ],
    learnings: [
      "MERN stack architecture",
      "JWT authentication",
      "Role-based access control",
      "Real-time communication",
      "File upload handling"
    ],
    github: ""
  },
  {
    title: "DairyMitra",
    slug: "dairymitra",
    category: "Smart Dairy Analytics App",
    summary: "A data-driven dairy analytics application for production tracking, financial monitoring, multilingual support, and predictive analytics.",
    problem: "Dairy businesses need better visibility into milk production, financial performance, and future trends.",
    solution: "DairyMitra helps users analyze dairy-related data through dashboards, multilingual support, and prediction-based insights.",
    technologies: ["Python", "Streamlit", "Machine Learning", "Pandas"],
    features: [
      "Analytics Dashboard",
      "Production Tracking",
      "Financial Monitoring",
      "Multilingual Interface",
      "Predictive Analytics"
    ],
    learnings: [
      "Data visualization",
      "Python-based analytics",
      "Machine learning basics",
      "User-focused dashboard design"
    ],
    github: ""
  },
  {
    title: "MigraineGuardian",
    slug: "migraineguardian",
    category: "AI-Based Migraine Early Warning System",
    summary: "An AI-based migraine risk prediction system using trigger-based modeling, lifestyle factors, and risk visualization.",
    problem: "Migraine sufferers need early awareness of possible triggers and risk patterns.",
    solution: "MigraineGuardian uses machine learning and trigger-based analysis to estimate migraine risk and visualize risk trends.",
    technologies: ["Python", "Machine Learning", "Logistic Regression", "REST API"],
    features: [
      "Risk Prediction",
      "Trigger Analysis",
      "Trend Visualization",
      "Interactive Simulation",
      "Risk Reduction Insights"
    ],
    learnings: [
      "ML model integration",
      "Risk prediction workflow",
      "Data-driven healthcare logic",
      "RESTful backend integration"
    ],
    github: ""
  }
];

const seedData = async () => {
  try {
    await connectDB();
    
    // Clear existing projects
    await Project.deleteMany({});
    console.log('Cleared existing projects from database.');

    // Insert verified projects
    await Project.insertMany(verifiedProjects);
    console.log('Successfully seeded database with verified projects!');
    
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error(`Seeding failed: ${error.message}`);
    process.exit(1);
  }
};

seedData();
