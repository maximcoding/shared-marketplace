import { ITimestamped } from "../types/utility.types";

/**
 * Editorial article — admins publish, App + Web serve to readers.
 * Canonical table: `gagot-api/src/db/schema/articles.ts`.
 */
export interface IArticle extends ITimestamped {
  _id?: string;
  title?: string;
  body?: string;
}
