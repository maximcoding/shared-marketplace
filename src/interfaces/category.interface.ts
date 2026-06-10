import { CategoryEnum } from "../enums/category.enum";
import { ITimestamped } from "../types/utility.types";

/**
 * Property category. The enum value (`name`) is the discriminator;
 * `displayName` carries localised text for UI. Categories are admin-
 * curated and rarely change.
 */
export interface ICategory extends ITimestamped {
  _id?: string;
  /** Enum discriminator — programmatic identity. */
  name: CategoryEnum;
  /** Localised text for UI display (defaults to enum value if absent). */
  displayName?: string;
  description?: string;
  photoUrl?: string;
  isActive?: boolean;
}
