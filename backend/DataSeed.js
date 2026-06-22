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
    fileUrl: '/pdfs/software-engineering/frontend/learning-javascript/JavaScript.pdf',
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
    fileUrl: '/pdfs/software-engineering/frontend/learning-javascript/Angularjs.pdf',
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
    fileUrl: '/pdfs/software-engineering/frontend/learning-javascript/Lodash.pdf',
    tags: ['lodash', 'frontend'],
    sortOrder: 6,
  },
  {
    title: 'Angular',
    topCategory: 'Software Engineering',
    section: 'Frontend',
    subgroup: 'Learning Javascript',
    fileUrl: '/pdfs/software-engineering/frontend/learning-javascript/Angular.pdf',
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

    solution: "Developed a centralized accounting dashboard that combined financial reporting, invoice management, collections tracking, and core accounting workflows into a single interface. The application displayed a list of invoices with contextual action menus for each record, enabling users to perform AP/AR adjustments, approve or reject bills for payment through a dedicated UI workflow, initiate reconsideration processes, log vendor credits, manage write-offs, upload supporting documents, and view reminders and activity history associated with each invoice. The system was designed using a ledger-based architecture where financial records were immutable and updates were not permitted; instead, all adjustments were recorded as new entries to maintain audit integrity and ensure accurate financial tracking. Implemented role-based access control and permissions to restrict actions based on user roles and responsibilities. Additionally, adjustments and write-offs were tracked at the line-item level, with full historical context loaded per invoice to provide complete audit visibility and traceability.",
   
    techstack: ["Vue.js 2", "JavaScript", "Lodash", "HTML", "CSS", "bootstrap 4", "VueResource", "Moment", "Vuex"],
    keyContributions: [
        "Designed and implemented a centralized accounting dashboard providing real-time financial visibility, including client payments received, vendor payments issued, gross revenue, and net profitability metrics.",

        "Built a scalable invoice management system supporting end-to-end lifecycle tracking from creation to payment, including status management and operational workflows.",

        "Developed detailed invoice views with support for line-item breakdowns, attached documentation, and complete transactional history for audit and reconciliation purposes.",

        "Implemented structured workflows for invoice approval, payment processing, audit logging, and document management to support finance operations.",

        "Engineered financial adjustment capabilities including AP/AR adjustments, credits, refunds, write-offs, purchase returns, and reconciliation entries within a ledger-based system.",

        "Built export functionality enabling financial data extraction in Excel, PDF, and CSV formats for reporting and external analysis.",

        "Developed collections and receivables management tools to track outstanding balances and support recovery workflows.",

        "Implemented role-based access control to enforce permissions across financial actions, ensuring segregation of duties and compliance with accounting controls.",

        "Designed line-item level tracking for adjustments and write-offs with full historical audit trails per invoice.",

        "Integrated document management workflows allowing users to upload, attach, and manage supporting financial documentation per invoice and transaction."    
    ],
    impact: [    
        "Unified fragmented accounting, billing, and collections workflows into a single centralized platform, reducing operational complexity.",

        "Significantly reduced manual effort in financial reporting, reconciliation, and invoice tracking through automation and structured workflows.",

        "Improved financial transparency by providing real-time visibility into revenue, expenses, outstanding balances, and profitability metrics.",

        "Accelerated invoice approval, payment processing, and reconciliation cycles through streamlined workflow automation.",

        "Enhanced audit readiness by implementing ledger-based immutable financial records with full traceability of all adjustments.",

        "Reduced dependency on manual reporting by enabling self-service access to structured financial data and exportable reports.",

        "Improved accuracy and consistency of financial records by enforcing standardized workflows and role-based access controls.",

        "Enabled faster collections and reduced outstanding receivables through improved tracking and visibility of overdue accounts."
    ],
    isFeatured: true,
    imageUrl: null,
    githubUrl: null,
    liveDemoUrl: null,
    startDate: null,
    endDate: null,
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
      "Developed a Vue.js-based interface for viewing and analyzing EDI claim transactions, enabling users to review both outbound 837 claim files and inbound 999 acknowledgment responses.",
      "Built functionality to transform raw 837 EDI data into structured, business-friendly views that were accessible to non-technical users.",
      "Organized EDI transactions into clearly labeled sections, loops, and segments to improve readability and simplify claim analysis.",
      "Implemented parsing and visualization of 999 acknowledgment transactions to provide insight into claim acceptance and rejection outcomes.",
      "Created rejection analysis workflows that identified validation failures and presented detailed rejection information to users.",
      "Added contextual descriptions for rejection codes and transaction errors to assist users in understanding and resolving claim issues.",
      "Highlighted problematic claim segments and data elements associated with validation failures to accelerate troubleshooting.",
      "Enhanced navigation and overall user experience, reducing reliance on specialized EDI knowledge for claim review and investigation.",
      "Integrated backend services to retrieve, process, and display claim and acknowledgment transaction data within a unified interface."
    ],
    impact: [
      "Reduced dependency on specialized EDI resources by providing users with self-service claim analysis and troubleshooting tools.",

      "Accelerated identification of claim submission issues and payer rejections through automated parsing and visualization of EDI transactions.",

      "Improved operational efficiency for billing and revenue cycle teams by centralizing claim and acknowledgment data into a single interface.",

      "Reduced the time required to investigate rejected claims and eliminated the need for users to rely on IT support to determine rejection causes.",

      "Increased visibility into claim processing outcomes by presenting claim statuses, acknowledgment responses, and validation results in a user-friendly format.",

      "Enabled users with limited EDI knowledge to independently diagnose claim issues and understand rejection details.",

      "Streamlined claim correction and resubmission workflows by highlighting problematic claim segments and providing actionable error information.",

      "Improved collaboration between billing, operations, and technical teams by making complex EDI transaction data more accessible and understandable."
    ],
    isFeatured: true,
    imageUrl: null,
    githubUrl: null,
    liveDemoUrl: null,
    startDate: null,
    endDate: null,
    status: "completed",
    displayOrder: 2
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
    problem: "Billing coordinators were required to manually prepare reconsideration and correction packages when claims were denied, underpaid, or required additional review. The process involved gathering billing data from multiple sources, completing forms, generating supporting documentation, assembling claim packages, and manually drafting PDF correspondence for each submission. Users were responsible for selecting delivery methods, tracking submission status, and maintaining supporting records. This workflow was time-consuming, error-prone, difficult to scale, and provided limited visibility into the status of submitted reconsideration requests.",
    solution:
      "Designed and developed an end-to-end reconsideration and appeals workflow that automated document preparation, package generation, delivery, and tracking.",
    techstack: ["Vue.js 2", "JavaScript", "Lodash", "HTML", "CSS", "Vuex", "Vue Router", "Bootstrap 4"],
    keyContributions: [
      "Designed and implemented a dynamic user interface that automatically pre-populated billing, claimant, invoice, amount paid, and outstanding balance information while enabling users to select relevant supporting documents for inclusion in reconsideration packages, reducing manual data entry, improving data accuracy, and streamlining the reconsideration workflow.",

      "Built template-driven reconsideration and correction workflows that allowed users to select predefined appeal templates retrieved from backend services, ensuring consistency across submissions.",

      "Developed automated PDF generation capabilities that created professional reconsideration packages, including cover letters, billing summaries, invoices, and supporting documentation based on user selections.",

      "Implemented automated generation of healthcare and workers' compensation forms, including HCFA, DWC, and UB-04, SBR documents.",

      "Integrated Spire.PDF to populate, generate, and finalize claim-related documents programmatically, eliminating the need for manual form preparation.",

      "Developed document packaging services that consolidated cover letters, invoices, claim forms, and supporting evidence into a single submission package (one PDF) ready for delivery.",

      "Built multi-channel delivery workflows enabling users to distribute reconsideration packages through fax, mail, or electronic submission methods.",

      "Integrated USPS tracking services to store tracking information and provide real-time delivery status updates directly within the application.",

      "Implemented audit trails and submission tracking capabilities, allowing users to monitor package delivery status, review historical activity, and manage follow-up actions efficiently."
    ],
    impact: [
      "Automated previously manual document preparation and submission processes, reducing administrative effort and improving workflow efficiency for billing coordinators.",

      "Improved consistency and accuracy of appeal submissions through template-driven document generation.",
      "Streamlined collections and dispute resolution workflows by automating package assembly and delivery.",
      "Increased visibility into submission and delivery status through integrated tracking and monitoring tools.",
      "Enabled billing coordinators to manage the entire appeals process from a single application."
    ],
    isFeatured: true,
    imageUrl: null,
    githubUrl: null,
    liveDemoUrl: null,
    startDate: null,
    endDate: null,
    status: "completed",
    displayOrder: 3
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
    imageUrl: null,
    githubUrl: null,
    liveDemoUrl: null,
    startDate: null,
    endDate: null,
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
    problem: "The original EDI console application was built as a monolithic solution designed to support only one or two clients. As the business expanded and additional clients required EDI-based billing exports, the system was not able to scale effectively due to its tightly coupled and non-configurable architecture. This led to significant challenges when implementing client-specific EDI requirements, as each new client required custom code changes, making the solution difficult to maintain, extend, and standardize.",

    solution: "Refactored the existing .NET application into a scalable, modular architecture by separating the solution into client-specific projects for each trading partner. Introduced a configuration-driven approach using SQL configuration tables to manage and customize EDI requirements per client, reducing the need for code changes and enabling faster onboarding of new trading partners. The system generated 837 EDI files for bill exports by retrieving eligible invoices through stored procedures, dynamically constructing client-specific 837 transaction files, and securely transmitting them to trading partners via SFTP. Additionally, the system ingested 999 and 277 acknowledgment files from trading partners and linked them back to the corresponding sent bills, enabling end-to-end visibility of claim submission status and response tracking.",
    techstack: ["C#", ".NET Framework 4.8", "ADo.NET", "WINSCP", "SQL Server"],
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
    imageUrl: null,
    githubUrl: null,
    liveDemoUrl: null,
    startDate: null,
    endDate: null,
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
    imageUrl: null,
    githubUrl: null,
    liveDemoUrl: null,
    startDate: null,
    endDate: null,
    status: "completed",
    displayOrder: 2
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