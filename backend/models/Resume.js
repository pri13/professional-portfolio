import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
  technology: { type: String, required: true },
  proficient: { type: Boolean, required: true },
  rating: { type: Number, required: true },
  used_in: { type: String }
});

const SkillsSchema = new mongoose.Schema({
  Database: [SkillSchema],
  UI: [SkillSchema],
  NET: [SkillSchema],
  javascript: [SkillSchema],
  versionControl: [SkillSchema]
}, {
  _id: false // Exclude _id field from this sub-schema
});

const ResumeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String }
  },
  linkedin: { type: String },
  github: { type: String },
  summary: { type: String },
  education: [{
    degree: String,
    institution: String,
    startDate: Date,
    endDate: Date,
    gpa: Number,
    location: { city: String, state: String }
  }],
  experience: [{
    jobTitle: String,
    company: String,
    startDate: Date,
    endDate: Date,
    jobType: String,
    location: { city: String, state: String },
    responsibilities: [String]
  }],
  skills: SkillsSchema,
  projects: [{
    projectTitle: String,
    description: String,
    technologies: [String],
    link: String,
    startDate: Date,
    endDate: Date
  }],
  certifications: [{
    certificationName: String,
    issuingOrganization: String,
    issueDate: Date,
    expirationDate: Date,
    credentialId: String,
    credentialUrl: String
  }],
  languages: [{
    language: String,
    proficiency: String
  }],
  CreatedDateTime: {
    type: Date,
    default: Date.now
  }
});

const Resume = mongoose.model('Resume', ResumeSchema, 'resumes');

export default Resume;
