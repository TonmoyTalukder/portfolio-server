  import httpStatus from 'http-status';
  import AppError from '../../errors/AppError';
import { IProject } from './project.interface';
import { Project } from './project.model';

  
  const createProject = async (payload: IProject) => {
    const projectExists = await Project.findOne({ title: payload.title });
    if (projectExists) {
      throw new AppError(httpStatus.CONFLICT, 'Project with this title already exists!');
    }
  
    const project = await Project.create(payload);
    return project;
  };
  
  const getAllProjects = async () => {
    const projects = await Project.find();
    return projects;
  };
  
  const getProjectById = async (id: string) => {
    const project = await Project.findById(id);
    if (!project) {
      throw new AppError(httpStatus.NOT_FOUND, 'Project not found!');
    }
    return project;
  };
  
  const updateProject = async (id: string, payload: Partial<IProject>) => {
    const project = await Project.findByIdAndUpdate(id, payload, { new: true });
    if (!project) {
      throw new AppError(httpStatus.NOT_FOUND, 'Project not found!');
    }
    return project;
  };
  
  const deleteProject = async (id: string) => {
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      throw new AppError(httpStatus.NOT_FOUND, 'Project not found!');
    }
    return project;
  };
  
  export const ProjectsService = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
  };