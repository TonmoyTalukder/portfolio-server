import express from 'express';
import { ProjectsController } from './project.controller';

const router = express.Router();

router.get('/', ProjectsController.getAllProjects);
router.get('/:id', ProjectsController.getProjectById);
router.post('/', ProjectsController.createProject);
router.put('/:id', ProjectsController.updateProject);
router.delete('/:id', ProjectsController.deleteProject);

export const ProjectRoutes = router;
