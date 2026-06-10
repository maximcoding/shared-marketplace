import { AddressType } from "../enums/address-type.enum";

/**
 * Geographic address + coordinate. Designed to be marketplace-generic —
 * works for any vertical (RealEstate, Cars, Services, …).
 *
 * Coordinates are exposed as `[lat, lng]` tuple (PostGIS-friendly,
 * matches gagot-API's wire contract). The duplicate `lat`/`lng`
 * scalar pair (colaido shape) is dropped in v2 — pick one
 * representation.
 */
export interface IAddress {
  /** Free-form address line. */
  address?: string;
  /** `[lat, lng]` tuple — single canonical coord representation. */
  coordinate?: [number, number];
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  /** `Home` / `Work` / `Office` / … — see `AddressType` enum. */
  type?: AddressType;
  neighborhood?: string;
  timezone?: string;
}

/**
 * Alias kept for callers using colaido nomenclature.
 */
export type IAssetLocation = IAddress;
