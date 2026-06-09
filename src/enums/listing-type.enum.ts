/**
 * Listing transaction type. Generic to any marketplace; for real
 * estate `PropertyState` (selling/renting) is the gagot-historic
 * equivalent — keep both for now.
 */
export enum ListingType {
  Sale = "Sale",
  Rent = "Rent",
  Lease = "Lease",
}
