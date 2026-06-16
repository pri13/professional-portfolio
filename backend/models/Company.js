import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        webite: {
            type: String,
            trim: true
        },
        logourl: {
            type: String,
            default: null,
        },
        description: {
            type: String,
            trim: true
        },
        location: {
            type: String,
            default: null,
        },
    },
    {
        timestamps: true
    });


const Company = mongoose.model('Company', companySchema);

export default Company;