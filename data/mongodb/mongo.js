import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.URL_MONGO; 


export default mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });