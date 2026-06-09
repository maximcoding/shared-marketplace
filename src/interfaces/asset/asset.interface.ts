import { MainCategory } from "../../enums/main-category.enum";
import { ITag } from "../commerce/tag.interface";
import { IReview } from "../property/review.interface";
import { IAddress } from "../address.interface";

/**
 * Aggregate counters for any marketplace asset.
 */
export interface IAssetStats {
  views?: number;
  favorites?: number;
  shares?: number;
}

/**
 * Generic media bundle. Use `IFile`-backed `images`/`videos` arrays
 * when the consumer needs the full file record (size, mimetype, key);
 * use the string-URL form for lightweight previews and SSR/feed surfaces.
 */
export interface IMultimedia {
  images?: string[];
  videos?: string[];
  urls?: string[];
}

/**
 * Sub-category under a `MainCategory`. Each vertical (RealEstate,
 * Cars, Services, …) defines its own child categories.
 */
export interface IChildCategory {
  _id?: string;
  name: string;
  parentId?: string;
  createdAt?: Date | string;
}

/**
 * Base shape shared by every marketplace asset. Verticals extend
 * this with their own fields:
 *   - real estate    → `IProperty` (gagot core, in interfaces/property/)
 *   - generic items  → `IMarketPlaceItem` (in this folder)
 *   - cars, services → future subtypes
 *
 * Required fields are intentionally light — wire payloads vary by
 * endpoint, runtime validation lives in API DTOs.
 */
export interface IAsset {
  _id?: string;
  title?: string;
  description?: string;
  mainCategory?: MainCategory;
  childCategory?: IChildCategory;
  userVisible?: boolean;
  location?: IAddress;
  stats?: IAssetStats;
  multimedia?: IMultimedia;
  tags?: ITag[];
  reviews?: IReview[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
