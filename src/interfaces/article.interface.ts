/**
 * Editorial article — admins publish, App + Web serve to readers.
 * Canonical table: `gagot-api/src/db/schema/articles.ts`.
 */
export interface IArticle {
  _id?: string;
  title?: string;
  body?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
