import { AppFileEnum, ContentType } from "../enums/file-formats.enum";

/**
 * Persisted file record (AWS S3-backed). Returned from API read
 * endpoints inside `IProperty.images`, `IRoom.images`,
 * `IUserPublic.avatar`, etc.
 *
 * Server-side multipart upload types (`Express.Multer.File`) belong
 * in the API — they extend `IFile` with the streaming-body fields.
 */
export interface IFile {
  _id?: string;
  url?: string;
  key?: string;
  mimetype?: ContentType;
  /**
   * Semantic discriminator — what the file represents in product
   * context (`avatar`, `image`, `agreement`, …). Drives upload
   * routing on the API side.
   */
  fileType?: AppFileEnum;
  fileName?: string;
}
