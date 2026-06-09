import { CategoryEnum } from "../enums/category.enum";

export interface ICategory {
  _id?: string;
  name: CategoryEnum;
  photoUrl: string;
}
