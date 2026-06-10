import { ISODateString } from "../../types/utility.types";

/**
 * Payment-related types. Designed to support Stripe Connect (the
 * gagot roadmap item), PayPal, manual bank transfer, and cash flows.
 */

export enum PaymentType {
  Cash = "Cash",
  CreditCard = "CreditCard",
  PayPal = "PayPal",
  BankTransfer = "BankTransfer",
}

export enum PaymentStatus {
  Pending = "Pending",
  Completed = "Completed",
  Cancelled = "Cancelled",
  Failed = "Failed",
}

export interface IPaymentTransaction {
  _id?: string;
  userId: string;
  /** Required for non-cash transactions; absent for `Cash`. */
  paymentMethodId?: string;
  amount: number;
  status: PaymentStatus;
  date: ISODateString | Date;
  /** JSON-stringified provider details (Stripe charge ID, PayPal txn, etc). */
  details?: string;
}

/** Base shape for any persisted payment method on a user record. */
interface IBaseSavedPaymentMethod {
  _id?: string;
  userId: string;
  type: PaymentType;
  isDefault: boolean;
  providerName: string;
  lastUsedAt?: ISODateString | Date;
}

export interface ICreditCardPaymentMethod extends IBaseSavedPaymentMethod {
  type: PaymentType.CreditCard;
  /** Last 4 digits or tokenized identifier — never store full PAN. */
  cardNumber: string;
  cardHolder: string;
  /** MM/YY format. */
  expiry: string;
}

export interface IPayPalPaymentMethod extends IBaseSavedPaymentMethod {
  type: PaymentType.PayPal;
  email: string;
}

export interface IBankTransferPaymentMethod extends IBaseSavedPaymentMethod {
  type: PaymentType.BankTransfer;
  bankAccount: string;
  bankName: string;
}

export type ISavedPaymentMethod =
  | ICreditCardPaymentMethod
  | IPayPalPaymentMethod
  | IBankTransferPaymentMethod;
