/**
 * Utility types shared across the marketplace library.
 * Branded primitives + reference helpers + response wrappers.
 */

/**
 * Branded entity ID. Prevents passing `UserId` where `PropertyId`
 * is expected at compile time. At runtime it's just a string.
 *
 * Usage:
 *   type UserId = Id<'User'>
 *   const id: UserId = 'abc' as UserId
 */
export type Id<TBrand extends string> = string & { readonly __brand: TBrand };

/**
 * Either a populated entity or its ID. The standard wire-shape for
 * foreign keys that the server may or may not populate.
 *
 * Usage:
 *   owner?: Ref<IUserPublic>   // either the full user OR its `_id` string
 */
export type Ref<T> = T | string;

/**
 * Homogeneous list of refs — all populated entities OR all IDs,
 * never mixed. Prevents `[entity1, 'id2', entity3]` accidents.
 *
 * Usage:
 *   visits?: RefList<IVisit>   // either IVisit[] OR string[]
 */
export type RefList<T> = T[] | string[];

/**
 * Audit-timestamp mixin. Compose into any persisted entity.
 *
 * Usage:
 *   interface IFoo extends ITimestamped { _id?: string; title: string }
 */
export interface ITimestamped {
  createdAt?: ISODateString | Date;
  updatedAt?: ISODateString | Date;
}

/**
 * Standard pagination wrapper for list responses.
 */
export interface IPaginated<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

/**
 * Cursor-based pagination wrapper (preferred over offset for large
 * tables; the cursor is typically the keyset `(createdAt, _id)`).
 */
export interface ICursorPaginated<T> {
  items: T[];
  nextCursor?: string;
  hasMore: boolean;
}

/**
 * Standard error response shape. Matches `class-validator` + NestJS
 * `HttpException` defaults — `message` is a string OR an array of
 * field-validation messages.
 */
export interface IErrorResponse {
  statusCode: number;
  message: string | string[];
  error?: string;
  /** Optional request-correlation ID for log searching. */
  traceId?: string;
}

/**
 * ISO 8601 date-time string (`2026-06-10T12:34:56.000Z`). Branded
 * so accidental concatenation with non-date strings is a compile error.
 */
export type ISODateString = string & { readonly __brand: "ISODate" };

/**
 * Time of day (`HH:MM` or `HH:MM:SS`, no timezone). Plain string alias —
 * format is enforced at the API DTO level via class-validator `@Matches`,
 * not at compile time. Type alias preserved for semantic documentation.
 */
export type TimeString = string;

/**
 * Currency code per ISO 4217 (`USD`, `EUR`, `ILS`, …). Wider type
 * than `CurrencyEnum` (which carries gagot's legacy values nis/dollar/euro).
 * Use this when the API speaks ISO codes; map to/from `CurrencyEnum`
 * at the boundary.
 */
export type CurrencyCode = string & { readonly __brand: "CurrencyCode" };
