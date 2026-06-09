import { MainCategory } from "../../enums/main-category.enum";

/**
 * A user's saved asset — single record per (user, asset) pair.
 * Stored on the user document or as a separate `favorites` table
 * (server-side choice; the wire shape is the same).
 */
export interface IFavorite {
  assetId: string;
  mainCategory: MainCategory;
  favoritedAt?: Date | string;
}
