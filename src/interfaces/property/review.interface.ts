import { IUserPublic } from "../user.interface";
import { ITimestamped, Ref } from "../../types/utility.types";

export interface IReview extends ITimestamped {
  _id?: string;
  author?: Ref<IUserPublic>;
  property?: string;
  content?: string;
  replies?: string[];
  rating?: number;
}
