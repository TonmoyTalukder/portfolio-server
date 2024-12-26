import { Request, Response } from 'express';
import { BlogsService } from './blog.service';

const createBlog = async (req: Request, res: Response) => {
  const blog = await BlogsService.createBlog(req.body);
  res.status(201).json({ success: true, data: blog });
};

const getAllBlogs = async (req: Request, res: Response) => {
  const blogs = await BlogsService.getAllBlogs();
  res.status(200).json({ success: true, data: blogs });
};

const getBlogById = async (req: Request, res: Response) => {
  const blog = await BlogsService.getBlogById(req.params.id);
  res.status(200).json({ success: true, data: blog });
};

const updateBlog = async (req: Request, res: Response) => {
  const blog = await BlogsService.updateBlog(req.params.id, req.body);
  res.status(200).json({ success: true, data: blog });
};

const deleteBlog = async (req: Request, res: Response) => {
  await BlogsService.deleteBlog(req.params.id);
  res.status(200).json({ success: true, message: 'Blog deleted successfully!' });
};

export const BlogsController = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
