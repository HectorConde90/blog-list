import Blog from './model.js';
import mongoose from 'mongoose';

 class blogDAO{
    constructor() {
        // const Blog = mongoose.model('Blog', blogSchema)
        const mongoUrl = 'mongodb://localhost/bloglist'
        mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    }

    list() {
        //console.log('entra en el metodo list')
        return Blog.find({});
        
     }
     
     create(pBlog) {

         const blog = new Blog(pBlog)

         blog
             .save()
             
        //  console.log(blog, 'metodo create blog');
     }
}

export default new blogDAO();