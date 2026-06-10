import { ITimestamped } from "../types/utility.types";

/**
 * Recently-viewed asset record per user. Naming aligned with
 * camelCase convention (was `propertyID`/`userID` in v1).
 */
export interface IRecent extends ITimestamped {
  _id?: string;
  readonly propertyId: string;
  readonly userId: string;
}
