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

export interface IOrder {
  _id?: string;
  customerId: string;
  sellerId: string;
  orderDate: Date | string;
  shippingAddress?: IShippingAddress;
  items: IOrderItem[];
  totalAmount: number;
  paymentId?: string;
  status: OrderStatus;
  trackingNumber?: string;
  estimatedDeliveryDate?: Date | string;
  notes?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
