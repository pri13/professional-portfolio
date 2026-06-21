import mongoose from 'mongoose';
import Company from './Company.js';


const ProjectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        category: {
            type: String,
            enum: ["frontend", "backend", "fullstack"],
            required: true
        },
        projectType: {
            type: String,
            enum: ["personal", "professional", "freelance", "open-source"],
            required: true
        },
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company',
            default: null
        },
        role: {
            type: String,
            default: null
        },
        summary: {
            type: String,
            required: true
        },
        problem: {
            type: String,
            default: null
        },
        solution: {
            type: String,
            default: null
        },
        techstack: [
            {
                type: String,
                trim: true
            }
        ],
        keyContributions: [
            {
                type: String,
                trim: true
            }
        ],
        features: [
            { 
                type: String
         }
        ],
        impact:[
            {
                type: String
            }
        ],
        imageUrl: {
            type: String,
            default: null
        },
        gallery:[
            {
                type: String
            }
        ],
        githubUrl:{
            type: String,
            default: null
        },
        liveDemoUrl:{
            type: String,
            default: null
        },
        startDate: {
            type: Date,
        },
        endDate: {
            type: Date,
        },
        isFeatured: {
            type: Boolean,
            default: false
        },
        isConfidential: {
            type: Boolean,
            default: false
        },
        displayOrder: {
            type: Number,
            default: 0
        },
        status: {
            type: String,
            enum:["completed", "in-progress", "planned", "maintenance"],
            default: "completed"
        },
        companyName :{
            type: String,
            default: null
        }

    },
    {
        timestamps: true
    }
);


const Project = mongoose.model('Project', ProjectSchema);

export default Project;
