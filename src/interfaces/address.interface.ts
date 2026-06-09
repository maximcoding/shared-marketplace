import { AddressType } from "../enums/address-type.enum";

/**
 * Geographic address + coordinate. Shape designed to be marketplace-
 * generic — works for any vertical (RealEstate, Cars, Services, …).
 *
 * Gagot-API stores `coordinate` as PostGIS `geography(Point, 4326)`
 * and exposes the `[lat, lng]` array form on the wire.
 *
 * The richer `lat`/`lng` numeric pair (colaido shape) is also
 * supported for consumers that prefer them over the tuple form.
 */
export interface IAddress {
  /** Free-form address line. */
  address?: string;
  /** PostGIS-friendly `[lat, lng]` tuple (gagot wire convention). */
  coordinate?: [number, number];
  /** Numeric latitude (alternative to `coordinate[0]`). */
  lat?: number;
  /** Numeric longitude (alternative to `coordinate[1]`). */
  lng?: number;
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
