export const projects = [
  {
    id: "insightiq",
    slug: "insightiq",
    chapterNumber: "01",
    featured: true,
    title: "InsightIQ",
    subtitle: "AI Operations Consultant",
    category: "AI Operations Consultant",
    summary: "A MERN-based AI business intelligence platform that turns raw business datasets into structured analysis and actionable operational insights.",
    problem: "Raw business datasets often require manual cleaning, profiling, interpretation, and analysis before useful operational decisions can be made.",
    solution: "InsightIQ establishes an automated pipeline from dataset ingestion through AI-assisted interpretation, root-cause detection, and natural language recommendations.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Gemma 4"],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Gemma 4"],
    features: [
      "CSV & Excel Dataset Ingestion",
      "Automated Data Cleaning",
      "Dataset & Column Profiling",
      "Classification & Quality Scoring",
      "Persistent MongoDB Storage",
      "Root Cause Analysis",
      "Actionable Recommendations",
      "Natural Language Query Chat",
      "Gemma 4 Integration"
    ],
    learnings: [
      "Integrating LLMs into production full-stack analytics workflows",
      "Automating dataset preprocessing and data profiling algorithms",
      "Designing persistent MongoDB analysis document schemas",
      "Structuring responsive natural language querying over tabular datasets"
    ],
    workflow: [
      { step: "01", name: "Dataset Ingestion", desc: "CSV & Excel ingestion with automatic schema detection" },
      { step: "02", name: "Data Cleaning", desc: "Missing value imputation and outlier sanitization" },
      { step: "03", name: "Dataset Profiling", desc: "Summary statistics and column distribution profiling" },
      { step: "04", name: "Classification", desc: "Taxonomy identification and categorical indexing" },
      { step: "05", name: "Quality Scoring", desc: "Data completeness and consistency scoring matrix" },
      { step: "06", name: "Persistent Storage", desc: "Structured MongoDB analysis records for instant recall" },
      { step: "07", name: "Root Cause Analysis", desc: "AI-assisted correlation and anomaly detection" },
      { step: "08", name: "Recommendations", desc: "Actionable operations roadmap generated from findings" },
      { step: "09", name: "Natural Language Chat", desc: "Interactive tabular chat powered by Gemma 4" }
    ],
    architecture: [
      { name: "Frontend Client", tech: "React + Tailwind CSS", role: "Dataset upload, analytics dashboard, and chat UI" },
      { name: "Backend API", tech: "Node.js + Express", role: "ETL pipeline, processing engine, and secure endpoints" },
      { name: "Persistence Layer", tech: "MongoDB", role: "Dataset profiles, analysis history, and metadata cache" },
      { name: "Intelligence Layer", tech: "Gemma 4", role: "Root cause analysis, recommendations, and NLP queries" }
    ],
    github: ""
  },
  {
    id: "opsync",
    slug: "opsync",
    chapterNumber: "02",
    title: "Opsync",
    subtitle: "Team Collaboration Platform",
    category: "Team Collaboration Platform",
    summary: "A MERN-based collaboration platform for task tracking, team communication, role-based access control, and secure file sharing.",
    problem: "Distributed teams need a centralized platform to manage task dependencies, direct communications, and file assets without tool fragmentation.",
    solution: "Opsync provides a structured workspace where users manage project tasks, collaborate in real time with team channels, and manage permissions securely.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Multer"],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Multer"],
    features: [
      "JWT Authentication & Session Management",
      "Role-Based Access Control (RBAC)",
      "Dynamic Task Management & Status Boards",
      "Real-Time Team & Direct Messaging",
      "Multipart File Uploads & Storage",
      "Project Workspaces & Permission Groups"
    ],
    learnings: [
      "Architecting state synchronization with WebSocket events",
      "Implementing granular role-based authorization middleware in Express",
      "Optimizing MongoDB document schemas for threaded messaging",
      "Handling multipart binary streaming and validation"
    ],
    github: ""
  },
  {
    id: "dairymitra",
    slug: "dairymitra",
    chapterNumber: "03",
    title: "DairyMitra",
    subtitle: "Smart Dairy Analytics App",
    category: "Smart Dairy Analytics App",
    summary: "A data-driven dairy analytics application for production tracking, financial monitoring, multilingual support, and predictive insights.",
    problem: "Dairy operations often lack real-time visibility into production trends, feed efficiency, and financial forecasting.",
    solution: "DairyMitra unifies herd and production metrics through interactive analytics dashboards, multilingual accessibility, and regression-based predictions.",
    tech: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
    features: [
      "Milk Production & Yield Tracking",
      "Financial Health & Operating Cost Dashboard",
      "Multilingual Regional Interface",
      "Yield Forecasting via Regression Models",
      "Exportable Performance & Operational Summaries"
    ],
    learnings: [
      "Processing time-series agricultural metrics using Pandas",
      "Rapid dashboard prototyping and deployment with Streamlit",
      "Structuring accessible multilingual UI strings",
      "Evaluating predictive regression models against seasonal trends"
    ],
    github: ""
  },
  {
    id: "migraineguardian",
    slug: "migraineguardian",
    chapterNumber: "04",
    title: "MigraineGuardian",
    subtitle: "AI-Based Migraine Early Warning System",
    category: "AI-Based Migraine Early Warning System",
    summary: "An AI-based migraine risk prediction system using trigger-based modeling, lifestyle factors, and risk trend visualization.",
    problem: "Migraine sufferers need early awareness of compounding environmental and physiological triggers to mitigate acute episodes.",
    solution: "MigraineGuardian leverages logistic regression and trigger correlation analysis to calculate attack probability and visualize trend trajectories.",
    tech: ["Python", "Machine Learning", "Logistic Regression", "REST API"],
    technologies: ["Python", "Machine Learning", "Logistic Regression", "REST API"],
    features: [
      "Multi-Factor Risk Prediction Engine",
      "Environmental & Lifestyle Trigger Correlation",
      "Risk Trajectory Trend Visualization",
      "Interactive Scenario Simulation",
      "Preventative Lifestyle Advisory Insights"
    ],
    learnings: [
      "Feature engineering on categorical lifestyle trigger data",
      "Probability calibration in classification models",
      "Translating clinical risk scores into actionable patient UI",
      "Designing clean REST API endpoints for Python inference scripts"
    ],
    github: ""
  }
];
