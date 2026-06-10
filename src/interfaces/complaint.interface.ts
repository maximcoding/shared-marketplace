import { IUserPublic } from "./user.interface";
import { ITimestamped, Ref } from "../types/utility.types";

/**
 * User-submitted complaint. Renamed from `IComplain` (v1) — "complaint"
 * is the noun, "complain" is the verb.
 */
export interface IComplaint extends ITimestamped {
  _id?: string;
  author?: Ref<IUserPublic>;
  subject?: string;
  content?: string;
}
