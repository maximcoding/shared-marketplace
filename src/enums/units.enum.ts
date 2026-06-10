/**
 * Physical-measurement units used across marketplace verticals.
 * Replaces inline string unions (`'sqm' | 'sqft'`, `'cm' | 'inch'`, …)
 * that previously lived inside `IArea`, `IDimensions`, `IWeight`.
 */

export enum AreaUnit {
  SquareMeter = "sqm",
  SquareFoot = "sqft",
}

export enum DimensionUnit {
  Centimeter = "cm",
  Inch = "inch",
}

export enum WeightUnit {
  Kilogram = "kg",
  Pound = "lb",
}
