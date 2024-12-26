import mongoose, { Schema, Document, Model } from 'mongoose';
import { ISkill } from './skills.interface';

// Extend the ISkill interface to include Document for MongoDB compatibility
export interface ISkillModel extends ISkill, Document {}

// Define the Skill schema
const SkillSchema: Schema<ISkillModel> = new Schema<ISkillModel>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create the Skill model
export const SkillModel: Model<ISkillModel> = mongoose.model<ISkillModel>('Skill', SkillSchema);
