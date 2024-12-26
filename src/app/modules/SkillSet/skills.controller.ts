import { Request, Response } from 'express';
import {
  getAllSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from './skills.service';

export const getSkillsController = async (req: Request, res: Response) => {
  try {
    const skills = await getAllSkills();
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching skills' });
  }
};

export const createSkillController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const skill = await createSkill(name);
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ error: 'Error creating skill' });
  }
};

export const updateSkillController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedSkill = await updateSkill(id, name);
    if (!updatedSkill) {
      res.status(404).json({ error: 'Skill not found' });
    } else {
      res.status(200).json(updatedSkill);
    }
  } catch (error) {
    res.status(400).json({ error: 'Error updating skill' });
  }
};

export const deleteSkillController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedSkill = await deleteSkill(id);
    if (!deletedSkill) {
      res.status(404).json({ error: 'Skill not found' });
    } else {
      res.status(200).json(deletedSkill);
    }
  } catch (error) {
    res.status(400).json({ error: 'Error deleting skill' });
  }
};
