/**
 * MIME-type enums used for property media (images, videos, audio,
 * documents) + the `AppFileEnum` discriminator that drives the
 * `/upload/:type` route family in gagot-api.
 */

export enum ImageFormat {
  jpeg = "image/jpeg",
  png = "image/png",
  tiff = "image/tiff",
  gif = "image/gif",
  heic = "image/heic",
  heif = "image/heif",
}

export enum DocumentFormat {
  pdf = "application/pdf",
  doc = "application/msword",
}

export enum AudioFormat {
  mp3 = "audio/mpeg",
  aiff = "audio/x-aiff",
}

export enum VideoFormat {
  m3u8 = "application/x-mpegURL",
  mpeg = "video/mpeg",
  mp4 = "video/mp4",
  m4v = "video/x-m4v",
  mov = "video/quicktime",
}

export type ContentType =
  | ImageFormat
  | DocumentFormat
  | AudioFormat
  | VideoFormat;

/**
 * Discriminator for `POST /:resource/:id/upload/:type` and
 * `DELETE /:resource/:id/:type` routes. Each value maps 1:1 to a
 * controller route segment in gagot-api.
 */
export enum AppFileEnum {
  avatar = "avatar",
  image = "image",
  images = "images",
  image360 = "image360",
  images360 = "images360",
  video = "video",
  audio = "audio",
  agreement = "agreement",
  cancellation = "cancellation",
  rules = "rules",
}

export enum AppImageFileEnum {
  image = "image",
  image360 = "image360",
}
