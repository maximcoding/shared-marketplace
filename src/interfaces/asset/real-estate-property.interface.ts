import { RealEstateStatus } from "../../enums/common-status.enum";
import { IAsset } from "./asset.interface";

/**
 * Simplified real-estate listing shape (modelled on colaido). This is
 * the **generic** RE-vertical interface for any consumer that doesn't
 * need gagot's full set of property attributes.
 *
 * Gagot's main entity is `IProperty` (in `interfaces/property/property.interface.ts`)
 * which extends `IAsset` directly and carries every gagot-specific field
 * (rooms, visits, kitchen amenities, safety amenities, agreement files,
 * 360° tours, etc.). Use `IProperty` for gagot; use `IRealEstateProperty`
 * when porting the interface to another RE app that only needs the basics.
 */

export enum RealEstatePropertyType {
  Apartment = "Apartment",
  House = "House",
  Condo = "Condo",
  Townhouse = "Townhouse",
  Land = "Land",
  Commercial = "Commercial",
  Other = "Other",
}

export interface IArea {
  value: number;
  unit: "sqm" | "sqft";
}

export interface IRealEstateProperty extends IAsset {
  price?: number;
  propertyType?: RealEstatePropertyType;
  bedrooms?: number;
  bathrooms?: number;
  area?: IArea;
  yearBuilt?: number;
  furnished?: boolean;
  floor?: number;
  totalFloors?: number;
  parkingSpaces?: number;
  status?: RealEstateStatus;
  amenities?: string[];
  availableFrom?: Date | string;
  petsAllowed?: boolean;
  heatingType?: string;
  coolingType?: string;
  hoaFees?: number;
  propertyTax?: number;
  additionalAttributes?: Record<string, string>;
}
