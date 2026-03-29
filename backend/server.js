import express from 'express';// import express package
import cors from 'cors';
import connectDB from './db.js'
import resumesRoutes from './routes/ResumeRoutes.js';

const app = express();


// CORS configuration
const allowedOrigins = [
  "https://professional-portfolio-wheat.vercel.app/",
  "http://localhost:3000"
];

app.use(cors());
app.use(express.json());

// Connect To DB
connectDB();

// Routes
app.use('/api/resumes', resumesRoutes);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


// Start server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// Middleware
app.use(express.json());

// Routes
app.use("/api/resumes", resumesRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

