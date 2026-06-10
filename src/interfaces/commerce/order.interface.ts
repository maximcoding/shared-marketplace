import { ITimestamped, ISODateString } from "../../types/utility.types";

export enum OrderStatus {
  Pending = "Pending",
  Processing = "Processing",
  Shipped = "Shipped",
  Delivered = "Delivered",
  Cancelled = "Cancelled",
}

export interface IShippingAddress {
  street: string;
  city: string;
  state?: string;
  zipCode?: string;
  country: string;
  phoneNumber?: string;
  instructions?: string;
}

export interface IOrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface IOrder extends ITimestamped {
  _id?: string;
  customerId: string;
  sellerId: string;
  orderDate: ISODateString | Date;
  shippingAddress: IShippingAddress;
  items: IOrderItem[];
  totalAmount: number;
  paymentId?: string;
  status: OrderStatus;
  trackingNumber?: string;
  estimatedDeliveryDate?: ISODateString | Date;
  notes?: string;
}
