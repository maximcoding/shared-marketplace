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
  paymentMethodId: string; // references ISavedPaymentMethod._id
  amount: number;
  status: PaymentStatus;
  date: Date | string;
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
  lastUsedDate?: Date | string;
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
