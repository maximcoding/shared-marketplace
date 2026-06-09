import { Condition } from "../../enums/condition.enum";
import { MarketplaceItemStatus } from "../../enums/common-status.enum";
import { IDeliveryOptions } from "../commerce/delivery.interface";
import { IAsset, IAssetStats } from "./asset.interface";

/**
 * Generic marketplace listing for non-real-estate verticals
 * (electronics, furniture, vehicles, etc.). Not used by gagot today;
 * reserved for future expansion.
 */

export interface IMarketplaceStats extends IAssetStats {
  baskets?: number;
}

export interface IAuctionBid {
  price: number;
  userId: string;
}

export interface IAuction {
  startDate: Date | string;
  endDate: Date | string;
  startingBid: IAuctionBid;
  currentBid?: IAuctionBid;
}

export interface IDimensions {
  length: number;
  width: number;
  height: number;
  unit: "cm" | "inch";
}

export interface IWeight {
  value: number;
  unit: "kg" | "lb";
}

export interface IMarketPlaceItem extends IAsset {
  price?: number;
  quantity?: number;
  stats?: IMarketplaceStats;
  status?: MarketplaceItemStatus;
  auction?: IAuction;
  deliveryOptions?: IDeliveryOptions;
  dimensions?: IDimensions;
  weight?: IWeight;
  condition?: Condition;
  returnPolicy?: string;
  warranty?: string;
  discounts?: {
    percentage?: number;
    amount?: number;
    validUntil?: Date | string;
  };
  /** Free-form per-vertical attributes. */
  additionalAttributes?: Record<string, string>;
}
