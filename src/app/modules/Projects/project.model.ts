import mongoose, { Schema, Document } from 'mongoose';
import { IProject } from './project.interface';

interface IProjectModel extends IProject, Document {}

const projectSchema = new Schema<IProjectModel>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: { type: [String], required: true },
    imageUrl: { type: String, required: true },
    link: { type: String, required: true },
    frontend: { type: String },
    backend: { type: String },
  },
  { timestamps: true }
);

export const Project = mongoose.model<IProjectModel>('Project', projectSchema);