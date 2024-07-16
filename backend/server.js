import express from 'express';// import express package
import cors from 'cors';
import connectDB from './db.js'
import resumesRoutes from './routes/ResumeRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Connect To DB
connectDB();

// Routes
app.use('/api/resumes', resumesRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
