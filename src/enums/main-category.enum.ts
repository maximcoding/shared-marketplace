/**
 * Top-level marketplace category discriminator. Drives the
 * `IAsset.mainCategory` field. Gagot today serves `RealEstate`
 * exclusively; the other values are placeholders for future verticals.
 */
export enum MainCategory {
  RealEstate = "RealEstate",
  Marketplace = "Marketplace",
  Services = "Services",
  Cars = "Cars",
  Jobs = "Jobs",
  Investments = "Investments",
  Leisure = "Leisure",
  Orders = "Orders",
  Ads = "Ads",
}

/**
 * Alias kept for code that uses `colaido` naming.
 */
export type AssetMainCategoryType = MainCategory;
