import { CategoryEnum } from "../../enums/category.enum";
import { PropertyState } from "../../enums/property-state.enum";
import { PropertyStatus } from "../../enums/property-status.enum";
import { CurrencyEnum } from "../../enums/currency.enum";
import { MeasurementEnum } from "../../enums/measurement.enum";
import { NextToEnum } from "../../enums/next-to.enum";
import {
  CommonAmenitiesEnum,
  SafetyAmenitiesEnum,
} from "../../enums/amenities.enum";
import { KitchenEnum } from "../../enums/kitchen.enum";
import { FacilitiesEnum } from "../../enums/facilities.enum";
import { IFile } from "../file.interface";
import { IUser } from "../user.interface";
import { IAsset } from "../asset/asset.interface";
import { IRoom } from "./room.interface";
import { IVisit } from "./visit.interface";

/**
 * Compact card-shape used in listing views (`GET /properties/all`,
 * `GET /properties/search/*`). Subset of `IProperty`.
 *
 * Fields are intentionally optional on the wire — lean responses,
 * search facets, draft listings, and partial seed data all live
 * within this shape. Required-ness is enforced at the DTO level on
 * the API side (`CreatePropertyPayload` etc., decorated with
 * `class-validator`).
 */
export interface IPropertyPreview {
  _id?: string;
  address?: string;
  coordinate?: [number, number];
  square?: number;
  squareUnits?: MeasurementEnum;
  status?: PropertyStatus;
  title?: string;
  state?: PropertyState[];
  floors?: number;
  price?: number;
  currency?: CurrencyEnum;
  deposit?: number;
  categoryName?: CategoryEnum;
  rooms?: IRoom[] | string[];
  files?: IFile[];
}

/**
 * Full property shape returned by `GET /properties/:id`.
 *
 * Extends `IAsset` (the generic marketplace base) — gagot is the
 * RealEstate vertical of a broader marketplace platform; `IAsset`
 * carries cross-vertical fields (`title`, `description`, `tags`,
 * `stats`, `multimedia`, `location`, `reviews`), and this interface
 * adds every real-estate-specific field (rooms, visits, amenities,
 * agreement files, 360° tours, etc.).
 *
 * Where gagot's older bespoke fields overlap with IAsset (e.g.
 * `title`, `description`) the IAsset slot wins; the gagot-rich field
 * set below is everything that's NOT in IAsset.
 *
 * Note: `IPropertyPreview` (lighter list shape) does NOT extend IAsset
 * — list responses ship lean payloads and `IAsset`'s richer shape would
 * be wasted bytes.
 */
export interface IProperty extends IPropertyPreview, IAsset {
  newConstruction?: boolean;
  yearBuild?: number;
  nextTo?: NextToEnum[];
  onTheLand?: boolean;
  lastFloor?: boolean;
  elevator?: boolean;
  kitchen?: KitchenEnum[];
  amenities?: CommonAmenitiesEnum[];
  facilities?: FacilitiesEnum[];
  safetyAmenities?: SafetyAmenitiesEnum[];
  additionalDetails?: boolean;
  /**
   * Aggregate rating — overlaps with `IAsset.stats.shares|favorites`
   * but kept as a top-level field for gagot back-compat.
   */
  rating?: number;
  owner?: IUser | string;
  visits?: IVisit[] | string[];
  // File references on the wire can be either populated entities
  // (server include) or opaque IDs / URLs (lean payloads).
  images360?: Array<IFile | string>;
  images?: Array<IFile | string>;
  cancellation?: IFile | string;
  agreement?: IFile | string;
  rules?: IFile | string;
  video?: IFile | string;
  videoUrl?: string;
  audio?: IFile | string;
}
