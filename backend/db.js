
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { config as dotenvConfig } from 'dotenv'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Choose file based on NODE_ENV (default to development)
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;

dotenvConfig({ path: `${__dirname}/${envFile}` });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      });

    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;