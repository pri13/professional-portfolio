import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { config as dotenvConfig } from 'dotenv'
import Document from './models/Document.js';

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
    fileUrl: '/pdfs/ITAdmin/Hardware/Azure/Azure.pdf',
    tags: ['IT', 'Admin', 'Hardware'],
    sortOrder: 3,
  },
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

    console.log('Documents seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedDocuments();