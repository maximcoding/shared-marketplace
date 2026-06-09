import { UserStatusEnum } from "../enums/user-status.enum";
import { MeasurementEnum } from "../enums/measurement.enum";
import { CurrencyEnum } from "../enums/currency.enum";
import { RoleEnum } from "../enums/role.enum";
import { IFile } from "./file.interface";

export interface IUserName {
  first: string;
  last: string;
}

/**
 * User shape returned on the wire by gagot-api endpoints. Most fields
 * are optional — lean responses, public profiles, and session payloads
 * carry different subsets. API-side `*Payload` DTOs enforce required-ness
 * per endpoint via `class-validator`.
 */
export interface IUser {
  _id?: string;
  name?: IUserName;
  firstName?: string;
  lastName?: string;
  email?: string;
  emailConfirmed?: boolean;
  emailConfirmationCode?: string;
  emailConfirmationExpires?: Date | string;
  mobilePhone?: string;
  mobilePhoneVerified?: boolean;
  mobilePhoneVerificationCode?: number;
  mobilePhoneVerificationExpires?: Date | string;
  password?: string;
  role?: RoleEnum | string;
  loginAttempts?: number;
  blockExpires?: Date | string;
  status?: UserStatusEnum;
  country?: string;
  address?: string;
  companyID?: number;
  measurementUnits?: MeasurementEnum;
  currency?: CurrencyEnum | string;
  notificationId?: string;
  device?: string;
  device_token?: string;
  notificationId_token?: string;
  avatar?: IFile;
  lastSeenAt?: Date | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
