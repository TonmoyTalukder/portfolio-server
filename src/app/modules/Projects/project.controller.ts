import { Request, Response } from 'express';
import { ProjectsService } from './project.service';

const createProject = async (req: Request, res: Response) => {
  console.log(req.body);
  const project = await ProjectsService.createProject(req.body);
  res.status(201).json({ success: true, data: project });
};

const getAllProjects = async (req: Request, res: Response) => {
  const projects = await ProjectsService.getAllProjects();
  res.status(200).json({ success: true, data: projects });
};

const getProjectById = async (req: Request, res: Response) => {
  const project = await ProjectsService.getProjectById(req.params.id);
  res.status(200).json({ success: true, data: project });
};

const updateProject = async (req: Request, res: Response) => {
  const project = await ProjectsService.updateProject(req.params.id, req.body);
  res.status(200).json({ success: true, data: project });
};

const deleteProject = async (req: Request, res: Response) => {
  await ProjectsService.deleteProject(req.params.id);
  res
    .status(200)
    .json({ success: true, message: 'Project deleted successfully!' });
};

export const ProjectsController = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
