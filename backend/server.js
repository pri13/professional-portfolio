// ====================================
// IMPORTS & DEPENDENCIES
// ====================================
import express from 'express'; // Web server framework
import cors from 'cors'; // Middleware to handle Cross-Origin Resource Sharing
import connectDB from './db.js' // Database connection function
import resumesRoutes from './routes/ResumeRoutes.js'; // Routes for resume endpoints
import documentRoutes from './routes/DocumentRoutes.js'; // Routes for document endpoints
import ProjectRoutes from './routes/ProjectRoutes.js'; // Routes for project endpoints

// ====================================
// EXPRESS APP INITIALIZATION
// ====================================
const app = express();

// ====================================
// CORS CONFIGURATION
// ====================================
// Get allowed origins from environment config or variable, or default to empty array
const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(",")
  : [];

// Enable CORS for all origins initially
app.use(cors());

// ====================================
// MIDDLEWARE 
// ====================================
// Parse incoming JSON request bodies
app.use(express.json());

// ====================================
// DATABASE CONNECTION
// ====================================
// Connect to MongoDB database
connectDB();

// ====================================
// API ROUTES
// ====================================
// Resume-related endpoints
app.use('/api/resumes', resumesRoutes);
// Document-related endpoints
app.use('/api/documents', documentRoutes);
// Project-related endpoints
app.use('/api/projects', ProjectRoutes);

// ====================================
// ADVANCED CORS CONFIGURATION
// ====================================
// Apply strict CORS rules based on allowedOrigins
app.use(cors({
  // Check if origin is in the allowed list
  origin: function (origin, callback) {
    // Allow requests without an origin
    if (!origin) return callback(null, true);

    // Allow if origin is in the array
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      // Reject if origin is not in array
      return callback(new Error("Not allowed by CORS"));
    }
  },
  // Allowed HTTP methods
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

//check if backend server is running.
app.get("/", (req, res) => {
  res.send("API is running");
});

//grab PORT info from env Config or variable.
const PORT = process.env.PORT;
// Start the server on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

