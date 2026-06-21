import mongoose from 'mongoose';
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
const envPath = path.join(__dirname, envFile);
const dotenvResult = dotenvConfig({ path: envPath });

if (dotenvResult.error) {
  console.warn(`Failed to load env file: ${envPath}`, dotenvResult.error);
} else {
  console.log(`Loaded env file: ${envPath}`);
}

console.log('NODE_ENV:', process.env.NODE_ENV || 'development');
console.log('MONGO_URI from env:', process.env.MONGO_URI);

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
  // FRONTEND - Accounting Dashboard - Done
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
    status: "completed",
    displayOrder: 1
  },

  // FRONTEND - EDI Viewer
  {
    title: "EDI Claim Viewer & Rejection Analysis",
    slug: "edi-claim-viewer",
    category: "frontend",
    projectType: "professional",
    companyName: "Sedgwick",
    role: "Software Developer",
    summary:
      "Developed a web-based claims analysis tool that transformed complex EDI transactions into an intuitive, user-friendly interface, enabling billing and operations teams to diagnose claim issues without requiring specialized EDI expertise.",
    problem: "Healthcare billing teams frequently needed to review EDI claim submissions (837 transactions) and payer acknowledgments (999 transactions) to investigate claim processing issues. However, raw EDI files are highly structured and difficult to interpret without specialized knowledge of EDI standards and transaction formats. As a result, billing coordinators and operations staff often relied on technical resources or EDI specialists to understand claim data, identify submission errors, and diagnose payer rejections. This created delays in troubleshooting, slowed claim corrections and resubmissions, and increased the overall effort required to manage the claims lifecycle.",
    solution:
      "Designed and implemented an interactive EDI claim viewer that translated raw EDI transactions into a structured, human-readable format.The application parsed EDI claim data and organized it into labeled sections, displaying segment names, business context, and claim details in a format accessible to billing coordinators, analysts, and operations personnel.To further improve troubleshooting workflows, the solution incorporated payer acknowledgment analysis by processing 999 transactions and presenting rejection information in a user-friendly format.",
    techstack: ["Vue.js 2", "JavaScript", "HTML", "CSS", "Lodash", "Regex", "Vuex", "Vue Router", "Bootstrap 4", "VueResource"],
    keyContributions: [
      "Developed Vue.js-based interface for viewing and analyzing EDI claim transactions.",
      "Built functionality to transform raw 837 EDI data into structured business-friendly views.",
      "Organized EDI content into labeled sections and segments to improve readability.",
      "Implemented parsing and visualization of 999 acknowledgment transactions.",
      "Created rejection analysis workflows that identified and displayed claim validation failures.",
      "Added contextual descriptions for rejection codes and transaction errors.",
      "Highlighted problematic claim segments and data elements to accelerate issue resolution.",
      "Improved navigation and usability for users with limited EDI knowledge.",
      "Integrated backend services to retrieve claim and acknowledgment transaction data."
    ],
    impact: [
      "Reduced dependency on specialized EDI resources for claim troubleshooting.",
      "Accelerated identification of claim submission issues and payer rejections.",
      "Improved operational efficiency for billing and revenue cycle teams.",
      "Reduced time required to investigate rejected claims.",
      "Increased visibility into claim processing outcomes.",
      "Enabled users with limited EDI knowledge to independently diagnose claim issues.",
      "Streamlined claim correction and resubmission workflows."
    ],
    isFeatured: true,
    imageUrl:null,
    githubUrl: null,
    liveDemoUrl: null,
    startDate:null,
    endDate:null,
    status: "completed",
    displayOrder: 1
  },

  // FRONTEND - Reconsideration & Appeals Automation
{
    title: "Reconsideration & Appeals Automation Platform",
    slug: "Reconsideration-appeals-automation",
    category: "frontend",
    projectType: "professional",
    companyName: "Orchid Medical",
    role: "Software Developer",
    summary:
      "Vue.js tool to visualize 837/999 EDI transactions in a readable format.",
    problem: "Billing coordinators were required to manually prepare reconsideration and correction packages when claims were denied or underpaid. This process involved gathering billing data, completing forms, generating supporting documentation, assembling claim packages, delivering them through multiple channels, and manually tracking submission status. The workflow was time-consuming, error-prone, and difficult to monitor.",
    solution:
      "Designed and developed an end-to-end reconsideration and appeals workflow that automated document preparation, package generation, delivery, and tracking.",
    techstack: ["Vue.js 2", "JavaScript", "Lodash", "HTML", "CSS", "Vuex", "Vue Router", "Bootstrap 4"],
    keyContributions: [
      "Designed a dynamic user interface that pre-populated billing, claimant, and invoice data, reducing manual data entry.",
      "Built template-driven workflows for reconsideration and correction requests, allowing users to select predefined appeal templates retrieved from backend services.",
      "Developed PDF generation workflows that created professional reconsideration packages with cover letters, billing summaries, and supporting documentation.",
      "Implemented automated form generation for healthcare and workers' compensation documents, including HCFA, DWC, and UB-04 forms.",
      "Integrated Spire.PDF to populate forms and generate finalized documents programmatically.",
      "Built document packaging services that assembled cover letters, invoices, claim forms, and supporting evidence into a single submission package.",
      "Developed delivery workflows supporting fax, mail, and EDI transmission methods.",
      "Implemented USPS tracking integration to store tracking numbers and provide real-time delivery status updates directly within the application.",
      "Created audit and tracking capabilities allowing users to monitor package delivery and follow-up activities."
    ],
    impact: [
      "Significantly reduced the manual effort required to prepare reconsideration and correction packages.",
      "Improved consistency and accuracy of appeal submissions through template-driven document generation.",
      "Streamlined collections and dispute resolution workflows by automating package assembly and delivery.",
      "Increased visibility into submission and delivery status through integrated tracking and monitoring tools.",
      "Enabled billing coordinators to manage the entire appeals process from a single application."
    ],
    isFeatured: true,
    imageUrl:null,
    githubUrl: null,
    liveDemoUrl: null,
    startDate:null,
    endDate:null,
    status: "completed",
    displayOrder: 1
},


  // BACKEND - SLP Ingestion
  {
    title: "Claims Ingestion System",
    slug: "claims-ingestion",
    category: "backend",
    projectType: "professional",
    companyName: "SLP Systems",
    role: "Backend Developer",
    summary:
      "Automated .NET Worker Service for processing fixed-width claim files.",
    problem:
      "The organization received daily SLP claim data feeds in fixed-width file format. Processing was largely manual or inconsistent, resulting in ingestion failures, limited visibility into errors, and lengthy turnaround times when file layouts changed. The existing process lacked resiliency, traceability, and scalability for handling large claim volumes.",
    solution:
      "Designed and implemented a fully automated .NET 8 Worker Service-based ingestion platform to process, validate, and load SLP claim data into downstream systems. The solution leveraged a configuration-driven parsing engine, allowing new file layouts and field mappings to be introduced without code changes. The system incorporated fault tolerance, structured logging, and high-performance bulk data loading to support reliable large-scale processing.",
    techstack: [".NET 8", "C#", "Worker Service", "SQL Server", "Polly", "Serilog"],
    keyContributions: [
        "Designed and implemented an end-to-end automated ingestion pipeline for SLP claim data.",
      "Built a reusable configuration-driven fixed-width parsing engine capable of supporting evolving file layouts.",
      "Developed a layered architecture (Domain, Application, Infrastructure, Worker) following Clean Architecture principles.",
      "Implemented configurable field mapping and validation workflows to dynamically interpret incoming file structures.",
      "Integrated Polly retry policies with exponential backoff for resilient file processing and database operations.",
      "Implemented structured logging and diagnostics using Serilog for complete processing traceability.",
      "Designed file lifecycle management workflows including processing, archiving, error handling, and recovery.",
      "Optimized high-volume data ingestion using SqlBulkCopy for efficient database loading.",
      "Implemented environment-specific configuration management using the Options Pattern and appsettings.",
    ],
    impact: [
      "Eliminated manual intervention through fully automated claim file ingestion.",
      "Increased processing reliability through resilient retry and fault-handling mechanisms.",
      "Improved operational visibility with structured logging and end-to-end processing traceability",
      "Reduced onboarding effort for new file formats through configuration-driven mappings rather than code modifications.",
      "Improved performance and scalability by leveraging bulk database operations for large claim datasets.",
      "Delivered a maintainable, extensible ingestion framework capable of supporting future data feeds and business requirements."
    ],
    isFeatured: true,
    imageUrl:null,
    githubUrl: null,
    liveDemoUrl: null,
    startDate:null,
    endDate:null,
    status: "completed",
    displayOrder: 1
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
    techstack: ["C#", ".NET Framework 4.8", "SQL Server"],
    keyContributions: [
      "Processed 837 claims",
      "Handled 999 acknowledgments",
      "Refactored monolithic architecture"
    ],
    impact: [
      "Improved maintainability",
      "Simplified client onboarding"
    ],
    isFeatured: true,
    imageUrl:null,
    githubUrl: null,
    liveDemoUrl: null,
    startDate:null,
    endDate:null,
    status: "completed",
    displayOrder: 1
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
    isFeatured: true,
    imageUrl:null,
    githubUrl: null,
    liveDemoUrl: null,
    startDate:null,
    endDate:null,
    status: "completed",
    displayOrder: 1
  }
];

const seedDocuments = async () => {
  try {
    console.log('MONGO_URI loaded:', process.env.MONGO_URI);

    const conn = await mongoose.connect(process.env.MONGO_URI);

    await Document.deleteMany({});
    
    await Company.deleteMany({});
    await Project.deleteMany({});

    await Document.insertMany(documents);
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