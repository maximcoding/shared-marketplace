import { RoomEnum } from "../../enums/room.enum";
import { BathEnum } from "../../enums/bath.enum";
import { IFile } from "../file.interface";

export interface IRoom {
  _id?: string;
  type: RoomEnum;
  order: number;
  bath: BathEnum[];
  property?: string;
  images360?: IFile[] | string[];
  images?: IFile[] | string[];
}
