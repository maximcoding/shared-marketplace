import { MainCategory } from "../../enums/main-category.enum";

/**
 * Generic listing tag. `category` is constrained to `MainCategory`
 * so a tag belongs to a vertical (e.g. "luxury" under RealEstate).
 */
export interface ITag {
  name: string;
  description?: string;
  category?: MainCategory;
}
