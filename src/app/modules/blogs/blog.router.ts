import express from 'express';
import { BlogsController } from './blog.controller';

const router = express.Router();

router.get('/', BlogsController.getAllBlogs);
router.get('/:id', BlogsController.getBlogById);
router.post('/', BlogsController.createBlog);
router.put('/:id', BlogsController.updateBlog);
router.delete('/:id', BlogsController.deleteBlog);

export const BlogsRoutes = router;
