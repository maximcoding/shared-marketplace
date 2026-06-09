import { IUser } from "../user.interface";

export interface IReview {
  _id?: string;
  author?: IUser;
  property?: string;
  content?: string;
  replies?: string[];
  rating?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
