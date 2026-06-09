import { ICarrier } from "./carrier.interface";

export interface IDeliveryMethod {
  enabled: boolean;
  cost?: number;
  estimatedTime?: string;
}

export interface IPickup extends IDeliveryMethod {
  location: string;
}

export interface ILocalDelivery extends IDeliveryMethod {
  /** Delivery radius in kilometres (or miles, by `unit` on consumer side). */
  radius: number;
}

export interface IShipping extends IDeliveryMethod {
  international: boolean;
  carriers: ICarrier[];
}

export interface IDeliveryOptions {
  pickup?: IPickup;
  localDelivery?: ILocalDelivery;
  shipping?: IShipping;
}
