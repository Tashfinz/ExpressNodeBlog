const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The Schema defines the structure of our documents
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },  
  createdAt: {type: Date, default: Date.now},
});

//The model surrounds the schema and provides an interface to communicate with a
//database collection for the document type

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
