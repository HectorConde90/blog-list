import Blog from './model.js';
import mongoose from 'mongoose';


 class blogDAO{
    constructor() {
        
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