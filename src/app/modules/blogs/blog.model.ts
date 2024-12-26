import mongoose, { Schema, Document } from 'mongoose';
import { IBlog } from './blog.interface';

interface IBlogModel extends IBlog, Document {}

const blogSchema = new Schema<IBlogModel>(
  {
    title: { type: String, required: true },
    tags: { type: [String], required: true },
    coverImage: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

export const Blog = mongoose.model<IBlogModel>('Blog', blogSchema);
