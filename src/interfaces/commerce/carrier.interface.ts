export enum CarrierServiceType {
  Standard = "Standard",
  Express = "Express",
  Overnight = "Overnight",
  SameDay = "SameDay",
  TwoDay = "TwoDay",
  International = "International",
  Economy = "Economy",
  Freight = "Freight",
  Priority = "Priority",
}

export interface ICarrier {
  name: string;
  trackingURL: string;
  contactInfo?: string;
  carrierServiceType: CarrierServiceType[];
}
