import { DayOfTheWeekEnum } from "../../enums/day-of-the-week.enum";
import { IUser } from "../user.interface";

export interface IVisit {
  _id?: string;
  timeFrom?: string;
  timeTo?: string;
  date?: Date | string;
  day?: DayOfTheWeekEnum;
  property?: string;
  visitors?: IUser[];
}
