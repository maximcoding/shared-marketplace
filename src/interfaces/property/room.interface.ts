import { RoomEnum } from "../../enums/room.enum";
import { BathEnum } from "../../enums/bath.enum";
import { IFile } from "../file.interface";

/**
 * Room — child of a property. All fields optional on the wire;
 * the API enforces required-ness via `CreateRoomPayload`.
 */
export interface IRoom {
  _id?: string;
  type?: RoomEnum;
  order?: number;
  bath?: BathEnum[];
  property?: string;
  images360?: Array<IFile | string>;
  images?: Array<IFile | string>;
}
