import express from 'express';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { ImageUploadRoutes } from '../modules/ImageUpload/imageUpload.routes';
import { ProjectRoutes } from '../modules/Projects/project.router';
import SkillsRoutes from '../modules/SkillSet/skills.router';
import { BlogsRoutes } from '../modules/blogs/blog.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/image-upload',
    route: ImageUploadRoutes,
  },
  {
    path: '/project',
    route: ProjectRoutes,
  },
  {
    path: '/skill',
    route: SkillsRoutes,
  },
  {
    path: '/blog',
    route: BlogsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
