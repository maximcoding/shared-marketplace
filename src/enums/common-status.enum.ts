/**
 * Status enums for listing lifecycle. Different asset subtypes use
 * different status sets; `CommonStatus` is the broadest catch-all.
 */
export enum CommonStatus {
  AVAILABLE = "AVAILABLE",
  SOLD = "SOLD",
  PENDING = "PENDING",
  EXPIRED = "EXPIRED",
}

export enum MarketplaceItemStatus {
  Available = "Available",
  Sold = "Sold",
  Reserved = "Reserved",
  Unavailable = "Unavailable",
}

export enum RealEstateStatus {
  Rent = "Rent",
  Sale = "Sale",
  Rented = "Rented",
  UnderContract = "UnderContract",
}
