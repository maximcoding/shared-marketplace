// ============================================================
// @gagot/shared — barrel
// ============================================================

// ----- ENUMS (gagot-specific) -----
export * from "./enums/role.enum";
export * from "./enums/category.enum";
export * from "./enums/property-state.enum";
export * from "./enums/property-status.enum";
export * from "./enums/currency.enum";
export * from "./enums/measurement.enum";
export * from "./enums/amenities.enum";
export * from "./enums/facilities.enum";
export * from "./enums/kitchen.enum";
export * from "./enums/bath.enum";
export * from "./enums/next-to.enum";
export * from "./enums/room.enum";
export * from "./enums/user-status.enum";
export * from "./enums/platform.enum";
export * from "./enums/day-of-the-week.enum";
export * from "./enums/file-formats.enum";

// ----- ENUMS (cross-marketplace generic, ported from colaido pattern) -----
export * from "./enums/address-type.enum";
export * from "./enums/condition.enum";
export * from "./enums/languages.enum";
export * from "./enums/listing-type.enum";
export * from "./enums/main-category.enum";
export * from "./enums/common-status.enum";

// ----- USER / SHARED ENTITIES -----
export * from "./interfaces/file.interface";
export * from "./interfaces/user.interface";
export * from "./interfaces/category.interface";
export * from "./interfaces/complain.interface";
export * from "./interfaces/address.interface";
export * from "./interfaces/article.interface";
export * from "./interfaces/recent.interface";

// ----- ASSET HIERARCHY (parent of all marketplace listings) -----
export * from "./interfaces/asset/asset.interface";
export * from "./interfaces/asset/marketplace-item.interface";
export * from "./interfaces/asset/real-estate-property.interface";

// ----- COMMERCE / TRANSACTION FLOW -----
export * from "./interfaces/commerce/tag.interface";
export * from "./interfaces/commerce/favorite.interface";
export * from "./interfaces/commerce/payment.interface";
export * from "./interfaces/commerce/order.interface";
export * from "./interfaces/commerce/delivery.interface";
export * from "./interfaces/commerce/carrier.interface";
export * from "./interfaces/commerce/support-ticket.interface";

// ----- GAGOT REAL-ESTATE VERTICAL (IProperty extends IAsset) -----
export * from "./interfaces/property/property.interface";
export * from "./interfaces/property/room.interface";
export * from "./interfaces/property/visit.interface";
export * from "./interfaces/property/review.interface";
