/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type TUser = {
  save(): unknown;
  _id?: string;
  name: string;
  displayPicture?: string;
  email: string;
  password: string;
  passwordChangedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
};

export interface IUserModel extends Model<TUser> {
  activatePremium(userId: string): Promise<TUser>;
  isUserExistsByEmail(id: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}
