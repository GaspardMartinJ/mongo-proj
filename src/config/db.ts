import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.MONGO_URI || '';

mongoose
    .connect(mongoURI)
    .then(() => console.log('MongoDB connected to Atlas'))
    .catch((err) => console.error('MongoDB connection error:', err));