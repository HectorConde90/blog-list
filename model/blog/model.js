import mongoose from 'mongoose';
import schema from './schema.js';

const Blog = mongoose.model('Blog', schema);

export default Blog;