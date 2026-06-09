/**
 * Recently-viewed property record per user. Canonical table:
 * `gagot-api/src/db/schema/recent.ts`. Read endpoint surfaces a list
 * for the authenticated user; consumers display "continue browsing".
 */
export interface IRecent {
  _id?: string;
  readonly propertyID: string;
  readonly userID: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
