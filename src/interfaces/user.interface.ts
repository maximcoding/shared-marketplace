import { UserStatusEnum } from "../enums/user-status.enum";
import { MeasurementEnum } from "../enums/measurement.enum";
import { CurrencyEnum } from "../enums/currency.enum";
import { RoleEnum } from "../enums/role.enum";
import { IFile } from "./file.interface";
import { ITimestamped, ISODateString } from "../types/utility.types";

/**
 * Structured human name. `IUser.name` is the canonical shape; the
 * old `firstName`/`lastName` flat fields are removed in v2.
 */
export interface IUserName {
  first: string;
  last: string;
}

/**
 * Wire-safe user shape. **Use this anywhere a user is embedded in
 * another entity** (review author, complaint author, visit visitors,
 * property owner, …) — it carries no secrets.
 *
 * Server-internal-only fields (`password`, verification codes,
 * `blockExpires`, `loginAttempts`) live in `IUserPrivate` below.
 */
export interface IUserPublic {
  _id?: string;
  name?: IUserName;
  email?: string;
  emailConfirmed?: boolean;
  mobilePhone?: string;
  mobilePhoneVerified?: boolean;
  role?: RoleEnum;
  status?: UserStatusEnum;
  country?: string;
  address?: string;
  companyId?: number;
  measurementUnit?: MeasurementEnum;
  currency?: CurrencyEnum;
  notificationId?: string;
  device?: string;
  deviceToken?: string;
  notificationToken?: string;
  avatar?: IFile;
  lastSeenAt?: ISODateString | Date;
  createdAt?: ISODateString | Date;
  updatedAt?: ISODateString | Date;
}

/**
 * Alias — when documentation says "user", the wire-safe public
 * shape is the default meaning across the platform.
 */
export type IUser = IUserPublic;

/**
 * Server-internal user record. Adds secret fields the API needs for
 * auth flow (password hashing, verification codes, lockouts). **Never
 * ship this shape over the wire** — strip to `IUserPublic` first.
 */
export interface IUserPrivate extends IUserPublic, ITimestamped {
  password?: string;
  emailConfirmationCode?: string;
  emailConfirmationExpires?: ISODateString | Date;
  mobilePhoneVerificationCode?: number;
  mobilePhoneVerificationExpires?: ISODateString | Date;
  loginAttempts?: number;
  blockExpires?: ISODateString | Date;
}
