import { AppFileEnum, ContentType } from "../enums/file-formats.enum";

/**
 * Persisted file record (AWS S3-backed). Returned from API read endpoints
 * inside `IProperty.images`, `IRoom.images`, `IUser.avatar`, etc.
 *
 * Server-side multipart upload types (`Express.Multer.File`) belong in
 * gagot-api — they extend `IFile` with the streaming-body fields.
 */
export interface IFile {
  _id?: string;
  url?: string;
  key?: string;
  mimetype?: ContentType | string;
  fileType?: AppFileEnum;
  fileName?: string;
  description?: AppFileEnum;
  type?: AppFileEnum;
}
