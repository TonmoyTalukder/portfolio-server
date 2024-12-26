import { ISkill } from './skills.interface';
import { SkillModel } from './skills.model';

export const getAllSkills = async (): Promise<ISkill[]> => {
  return SkillModel.find();
};

export const createSkill = async (name: string): Promise<ISkill> => {
  const skill = new SkillModel({ name });
  return skill.save();
};

export const updateSkill = async (
  id: string,
  name: string
): Promise<ISkill | null> => {
  return SkillModel.findByIdAndUpdate(id, { name }, { new: true });
};

export const deleteSkill = async (id: string): Promise<ISkill | null> => {
  return SkillModel.findByIdAndDelete(id);
};
