import express from 'express';
import {
  getSkillsController,
  createSkillController,
  updateSkillController,
  deleteSkillController,
} from './skills.controller';

const SkillsRoutes = express.Router();

SkillsRoutes.get('/', getSkillsController);
SkillsRoutes.post('/', createSkillController);
SkillsRoutes.put('/:id', updateSkillController);
SkillsRoutes.delete('/:id', deleteSkillController);

export default SkillsRoutes;
