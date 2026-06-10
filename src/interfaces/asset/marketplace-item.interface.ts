import { Condition } from "../../enums/condition.enum";
import { MarketplaceItemStatus } from "../../enums/common-status.enum";
import { DimensionUnit, WeightUnit } from "../../enums/units.enum";
import { IDeliveryOptions } from "../commerce/delivery.interface";
import { ISODateString } from "../../types/utility.types";
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
  startDate: ISODateString | Date;
  endDate: ISODateString | Date;
  startingBid: IAuctionBid;
  currentBid?: IAuctionBid;
}

export interface IDimensions {
  length: number;
  width: number;
  height: number;
  unit: DimensionUnit;
}

export interface IWeight {
  value: number;
  unit: WeightUnit;
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
    validUntil?: ISODateString | Date;
  };
  /** Free-form per-vertical attributes. */
  additionalAttributes?: Record<string, string>;
}
