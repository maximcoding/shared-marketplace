import { DayOfTheWeekEnum } from "../../enums/day-of-the-week.enum";
import { IUserPublic } from "../user.interface";
import { ISODateString, TimeString, RefList } from "../../types/utility.types";

/**
 * Property-visit slot. `timeFrom` / `timeTo` are `HH:MM` strings;
 * `visitors` is a wire-safe list of public users.
 */
export interface IVisit {
  _id?: string;
  /** `HH:MM` or `HH:MM:SS` — local time of the property. */
  timeFrom?: TimeString;
  timeTo?: TimeString;
  date?: ISODateString | Date;
  day?: DayOfTheWeekEnum;
  property?: string;
  visitors?: RefList<IUserPublic>;
}
