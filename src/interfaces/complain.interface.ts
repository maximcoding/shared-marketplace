import { IUser } from "./user.interface";

export interface IComplain {
  _id?: string;
  author?: IUser;
  subject?: string;
  content?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
