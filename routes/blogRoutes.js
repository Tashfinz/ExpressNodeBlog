const express = require('express');
const Blog = require('../models/blog');
const blogController = require('../controllers/blogController');

//Creates instance of a new router request object
const router = express.Router();

//blog routes

router.get('/', blogController.blog_index);

router.post('/', blogController.blog_create_post);

router.get('/create', blogController.blog_create_get);

router.get('/:id', blogController.blog_details);

router.delete('/:id', blogController.blog_delete);

module.exports = router;
