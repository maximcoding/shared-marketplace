import { MainCategory } from "../../enums/main-category.enum";
import { ITag } from "../commerce/tag.interface";
import { IReview } from "../property/review.interface";
import { IAddress } from "../address.interface";
import { ITimestamped } from "../../types/utility.types";

/**
 * Aggregate counters for any marketplace asset.
 */
export interface IAssetStats {
  views?: number;
  favorites?: number;
  shares?: number;
}

/**
 * Generic media bundle. Use string URLs for lightweight previews and
 * SSR/feed surfaces; consumers needing the full file record (size,
 * mimetype, key) should use the vertical-specific image fields on
 * the concrete subtype (e.g. `IProperty.images: IFile[]`).
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
export interface IChildCategory extends ITimestamped {
  _id?: string;
  name: string;
  parentId?: string;
}

/**
 * Base shape shared by every marketplace asset. Verticals extend this
 * with their own fields:
 *   - real estate    → `IProperty`        (gagot core)
 *   - generic items  → `IMarketPlaceItem`
 *   - cars, services → future subtypes
 *
 * `mainCategory` is **required** — it's the discriminator that lets
 * consumers narrow `IAsset` to a specific vertical type:
 *
 *   if (asset.mainCategory === MainCategory.RealEstate) {
 *     // narrowed: cast to IProperty
 *   }
 *
 * Optimistic-concurrency `version` is tracked; the API increments it
 * on every write.
 */
export interface IAsset extends ITimestamped {
  _id?: string;
  /** Required discriminator for runtime + compile-time narrowing. */
  mainCategory: MainCategory;
  title?: string;
  description?: string;
  childCategory?: IChildCategory;
  userVisible?: boolean;
  location?: IAddress;
  stats?: IAssetStats;
  multimedia?: IMultimedia;
  /** Tag names — embed full ITag entities only on the admin surface. */
  tags?: string[];
  reviews?: IReview[];
  /** Optimistic-concurrency counter; API increments on each write. */
  version?: number;
}
