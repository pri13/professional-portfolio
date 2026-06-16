import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { config as dotenvConfig } from 'dotenv'
import Document from './models/Document.js';
import Company from './models/Company.js';
import Project from './models/Project.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Choose file based on NODE_ENV (default to development)
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;

dotenvConfig({ path: `${__dirname}/${envFile}` });

const documents = [
  {
    title: 'Javascript',
    topCategory: 'Software Engineering',
    section: 'Frontend',
    subgroup: 'Learning Javascript',
    fileUrl: '/pdfs/software-engineering/frontend/learning-javascript/javascript.pdf',
    tags: ['javascript', 'frontend'],
    sortOrder: 1,
  },
  {
    title: 'ReactJS',
    topCategory: 'Software Engineering',
    section: 'Frontend',
    subgroup: 'Learning Javascript',
    fileUrl: '/pdfs/software-engineering/frontend/learning-javascript/reactjs.pdf',
    tags: ['react', 'frontend'],
    sortOrder: 2,
  },
  {
    title: 'AngularJS',
    topCategory: 'Software Engineering',
    section: 'Frontend',
    subgroup: 'Learning Javascript',
    fileUrl: '/pdfs/software-engineering/frontend/learning-javascript/angularjs.pdf',
    tags: ['angularjs', 'frontend'],
    sortOrder: 3,
  },
  {
    title: 'TypeScript',
    topCategory: 'Software Engineering',
    section: 'Frontend',
    subgroup: 'Learning Javascript',
    fileUrl: '/pdfs/software-engineering/frontend/learning-javascript/typescript.pdf',
    tags: ['typescript', 'frontend'],
    sortOrder: 4,
  },
  {
    title: 'VueJS',
    topCategory: 'Software Engineering',
    section: 'Frontend',
    subgroup: 'Learning Javascript',
    fileUrl: '/pdfs/software-engineering/frontend/learning-javascript/vuejs.pdf',
    tags: ['vue', 'frontend'],
    sortOrder: 5,
  },
  {
    title: 'Lodash',
    topCategory: 'Software Engineering',
    section: 'Frontend',
    subgroup: 'Learning Javascript',
    fileUrl: '/pdfs/software-engineering/frontend/learning-javascript/lodash.pdf',
    tags: ['lodash', 'frontend'],
    sortOrder: 6,
  },
  {
    title: 'Angular',
    topCategory: 'Software Engineering',
    section: 'Frontend',
    subgroup: 'Learning Javascript',
    fileUrl: '/pdfs/software-engineering/frontend/learning-javascript/angular.pdf',
    tags: ['angular', 'frontend'],
    sortOrder: 7,
  },
  {
    title: 'Learning CSS',
    topCategory: 'Software Engineering',
    section: 'Frontend',
    subgroup: 'Learning CSS',
    fileUrl: '/pdfs/software-engineering/frontend/learning-css/learning-css.pdf',
    tags: ['css', 'frontend'],
    sortOrder: 8,
  },
  {
    title: 'Learning .NET',
    topCategory: 'Software Engineering',
    section: 'Backend',
    subgroup: 'ASP.NET',
    fileUrl: '/pdfs/software-engineering/backend/dotnet/dotnet.pdf',
    tags: ['dotnet', 'backend'],
    sortOrder: 1,
  },
  {
    title: 'Learning C#',
    topCategory: 'Software Engineering',
    section: 'Backend',
    subgroup: 'ASP.NET',
    fileUrl: '/pdfs/software-engineering/backend/dotnet/csharp.pdf',
    tags: ['csharp', 'backend'],
    sortOrder: 2,
  },
  {
    title: '.NET Core Web API',
    topCategory: 'Software Engineering',
    section: 'Backend',
    subgroup: 'ASP.NET Core',
    fileUrl: '/pdfs/software-engineering/backend/dotnetcore/aspnet-core.pdf',
    tags: ['aspnetcore', 'backend'],
    sortOrder: 1,
  },
  {
    title: 'EF CORE',
    topCategory: 'Software Engineering',
    section: 'Backend',
    subgroup: 'ASP.NET Core',
    fileUrl: '/pdfs/software-engineering/backend/dotnetcore/EFCORE.pdf',
    tags: ['aspnetcore', 'backend'],
    sortOrder: 2,
  },
  {
    title: 'Python',
    topCategory: 'Software Engineering',
    section: 'Backend',
    subgroup: 'Learning Python',
    fileUrl: '/pdfs/software-engineering/backend/Python/Python.pdf',
    tags: ['python', 'backend'],
    sortOrder: 1,
  },
  {
    title: 'SQL',
    topCategory: 'Software Engineering',
    section: 'Backend',
    subgroup: 'Learning SQL',
    fileUrl: '/pdfs/software-engineering/backend/SQL/SQL.pdf',
    tags: ['SQL', 'backend'],
    sortOrder: 1,
  },
  {
    title: 'SQL Paging',
    topCategory: 'Software Engineering',
    section: 'Backend',
    subgroup: 'Learning SQL',
    fileUrl: '/pdfs/software-engineering/backend/SQL/SQL-Paging.pdf',
    tags: ['SQL', 'backend'],
    sortOrder: 2,
  },
  {
    title: 'SQL Query Optimizer',
    topCategory: 'Software Engineering',
    section: 'Backend',
    subgroup: 'Learning SQL',
    fileUrl: '/pdfs/software-engineering/backend/SQL/SQL-Query-Optimizer.pdf',
    tags: ['SQL', 'backend'],
    sortOrder: 3,
  },
  {
    title: 'Learning IT Administration',
    topCategory: 'IT Admin',
    section: 'Hardware',
    subgroup: '',
    fileUrl: '/pdfs/ITAdmin/Hardware/IT-Hardware.pdf',
    tags: ['IT', 'Admin', 'Hardware'],
    sortOrder: 1,
  },
  {
    title: 'Learning Power Shell',
    topCategory: 'IT Admin',
    section: 'Hardware',
    subgroup: '',
    fileUrl: '/pdfs/ITAdmin/Hardware/PowerShell.pdf',
    tags: ['IT', 'Admin', 'Hardware'],
    sortOrder: 2,
  },
  {
    title: 'Azure',
    topCategory: 'IT Admin',
    section: 'Hardware',
    subgroup: 'Learning Azure',
    fileUrl: '/pdfs/ITAdmin/Azure/Azure.pdf',
    tags: ['IT', 'Admin', 'Hardware'],
    sortOrder: 3,
  },
];


const companies = [
  {
    name: "HealthGrid",
    website: "https://veradigm.com/",
    description: "specializes in mobile patient engagement solutions and care coordination software",
    location: "ORLANDO, FL, USA"
  },
  {
    name: "AllScripts",
    website: "https://slpsystems.com",
    description: "Claims ingestion and EDI processing platform",
    location: "USA"
  },
  {
    name: "Orchid Medical",
    website: "https://www.sedgwick.com/",
    description: "Claims ingestion and EDI processing platform",
    location: "USA"
  },
  {
    name: "Sedgwick",
    website: "https://www.sedgwick.com/",
    description: "Claims ingestion and EDI processing platform",
    location: "USA"
  }
];


const projects = [
  // FRONTEND - Accounting Dashboard
  {
    title: "Accounting & Billing Management Dashboard",
    slug: "accounting-billing-dashboard",
    category: "frontend",
    projectType: "professional",
    companyName: "Sedgwick",
    role: "Software Developer",
    summary:
      "Billing dashboard for managing invoices, payments, and financial reporting.",
    problem:
      "Billing coordinators and accounting staff relied on multiple systems and manual processes to manage invoices, track payments, perform reconciliations, and monitor financial performance. Financial reporting and record exports were time-consuming, while visibility into revenue, expenses, collections, and invoice status was limited.",
    solution:
      "Developed a centralized accounting dashboard and billing workflow application that combined financial reporting, invoice management, collections tracking, and accounting operations into a single interface.",
    techstack: ["Vue.js 2", "JavaScript", "Lodash", "HTML", "CSS"],
    keyContributions: [
      "Designed and implemented dashboard views displaying total client payments received, vendor payments made, gross revenue, and net profit.",
      "Developed an interactive invoice management system allowing users to view and manage claimant billing records.",
      "Built invoice detail views with line items, supporting documents, and transaction history.",
      "Implemented workflows for invoice approvals, payment tracking, audit logging, and document uploads.",
      "Developed functionality for adjustments, credits, refunds, write-offs, purchase returns, and reconciliation activities.",
      "Added export capabilities for Excel, PDF, and CSV reporting.",
      "Created tools to support collections efforts and outstanding balance management."
    ],
    impact: [
      "Centralized accounting and billing workflows into a single application.",
      "Reduced manual effort required for financial reporting and record management.",
      "Improved visibility into revenue, expenses, profitability, and invoice status.",
      "Enabled faster reconciliation and collections processes through streamlined workflows and reporting tools.",
      "Provided users with self-service access to financial data and exportable reports."
    ],
    isFeatured: true,
    imageUrl:null,
    githubUrl: null,
    liveDemoUrl: null,
    startDate:null,
    endDate:null,
    status: "completed"
  },

  // FRONTEND - EDI Viewer
  {
    title: "EDI Claim Viewer & Rejection Analysis",
    slug: "edi-claim-viewer",
    category: "frontend",
    projectType: "professional",
    companyName: "ABC Healthcare",
    role: "Software Developer",
    summary:
      "Vue.js tool to visualize 837/999 EDI transactions in a readable format.",
    problem: "Users could not interpret raw EDI 837/999 data.",
    solution:
      "Built UI to parse EDI files and display structured, readable claims and errors.",
    techStack: ["Vue.js 2", "JavaScript", "HTML", "CSS"],
    keyContributions: [
      "Parsed 837 EDI into readable sections",
      "Displayed 999 rejection reasons",
      "Highlighted invalid claim segments"
    ],
    impact: [
      "Improved troubleshooting speed",
      "Reduced dependency on EDI specialists"
    ]
  },

  // BACKEND - SLP Ingestion
  {
    title: "SLP Claims Ingestion System",
    slug: "slp-claims-ingestion",
    category: "backend",
    projectType: "professional",
    companyName: "SLP Systems",
    role: "Backend Developer",
    summary:
      "Automated .NET Worker Service for processing fixed-width claim files.",
    problem:
      "Manual processing of fixed-width files caused delays and errors.",
    solution:
      "Built config-driven ETL worker with retry, logging, and bulk insert.",
    techStack: [".NET 8", "C#", "Worker Service", "SQL Server", "Polly", "Serilog"],
    keyContributions: [
      "Built fixed-width parser",
      "Added retry mechanism",
      "Implemented bulk insert",
      "Added structured logging"
    ],
    impact: [
      "Eliminated manual processing",
      "Improved reliability",
      "Increased processing speed"
    ],
    isFeatured: true
  },

  // BACKEND - EDI Processor
  {
    title: "EDI Claims Processing System",
    slug: "edi-claims-processing",
    category: "backend",
    projectType: "professional",
    companyName: "ABC Healthcare",
    role: "Backend Developer",
    summary:
      "C# .NET Framework system for processing 837/999 EDI transactions.",
    problem: "Monolithic EDI system was hard to maintain and scale.",
    solution:
      "Refactored into client-specific processing modules for better scalability.",
    techStack: ["C#", ".NET Framework 4.8", "SQL Server"],
    keyContributions: [
      "Processed 837 claims",
      "Handled 999 acknowledgments",
      "Refactored monolithic architecture"
    ],
    impact: [
      "Improved maintainability",
      "Simplified client onboarding"
    ]
  },

  // PERSONAL PROJECT
  {
    title: "Developer Portfolio",
    slug: "developer-portfolio",
    category: "fullstack",
    projectType: "personal",
    companyName: null,
    role: "Full Stack Developer",
    summary: "Personal portfolio built using MERN stack.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    keyContributions: [
      "Built frontend UI",
      "Created backend APIs",
      "Designed MongoDB schema"
    ],
    impact: [
      "Showcases professional and personal projects"
    ],
    isFeatured: true
  }
];

const seedDocuments = async () => {
  try {
    console.log('MONGODB_URI loaded:', process.env.MONGODB_URI);

   const conn = await mongoose.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         });

    await Document.deleteMany({});
    await Document.insertMany(documents);
    await Company.deleteMany({});
    await Project.deleteMany({});

    await Company.insertMany(companies);
    await Project.insertMany(projects);


    console.log('Documents seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedDocuments();