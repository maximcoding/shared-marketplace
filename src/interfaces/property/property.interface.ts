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
import { IUserPublic } from "../user.interface";
import { IAsset } from "../asset/asset.interface";
import { IRoom } from "./room.interface";
import { IVisit } from "./visit.interface";
import { Ref, RefList } from "../../types/utility.types";

/**
 * Compact card-shape used in listing views (`GET /properties/all`,
 * `GET /properties/search/*`). Picks the cross-vertical fields from
 * `IAsset` + real-estate-specific scalar fields that drive list UI.
 *
 * All fields optional — lean responses, search facets, draft listings,
 * and partial seed data all live within this shape. Required-ness is
 * enforced at the DTO level on the API side (`CreatePropertyPayload`
 * etc., decorated with `class-validator`).
 */
export interface IPropertyPreview extends Pick<
  IAsset,
  "_id" | "title" | "mainCategory" | "multimedia" | "stats" | "location"
> {
  square?: number;
  squareUnits?: MeasurementEnum;
  status?: PropertyStatus;
  state?: PropertyState[];
  floors?: number;
  price?: number;
  currency?: CurrencyEnum;
  deposit?: number;
  categoryName?: CategoryEnum;
  rooms?: RefList<IRoom>;
  files?: IFile[];
}

/**
 * Full property shape returned by `GET /properties/:id`.
 *
 * Extends `IAsset` (the generic marketplace base) — gagot is the
 * RealEstate vertical of a broader marketplace platform. Adds every
 * real-estate-specific field (rooms, visits, amenities, agreement
 * files, 360° tours, etc.).
 *
 * FK shapes use `Ref<T>` (entity OR id) and `RefList<T>` (all entities
 * OR all ids — never mixed) — see `types/utility.types.ts`.
 */
export interface IProperty extends IPropertyPreview, IAsset {
  newConstruction?: boolean;
  yearBuild?: number;
  description?: string;
  nextTo?: NextToEnum[];
  onTheLand?: boolean;
  lastFloor?: boolean;
  elevator?: boolean;
  kitchen?: KitchenEnum[];
  amenities?: CommonAmenitiesEnum[];
  facilities?: FacilitiesEnum[];
  safetyAmenities?: SafetyAmenitiesEnum[];
  additionalDetails?: boolean;
  /** Aggregate rating — useful surface for list UIs without computing from reviews. */
  rating?: number;
  owner?: Ref<IUserPublic>;
  visits?: RefList<IVisit>;
  // Property-specific media — full `IFile` entities OR opaque IDs/URLs.
  images360?: Array<IFile | string>;
  images?: Array<IFile | string>;
  cancellation?: IFile | string;
  agreement?: IFile | string;
  rules?: IFile | string;
  video?: IFile | string;
  videoUrl?: string;
  audio?: IFile | string;
}
