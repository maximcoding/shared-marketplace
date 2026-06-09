# @maximcoding/shared-marketplace

Multi-vertical marketplace shared library — TypeScript interfaces, enums, and contracts for any marketplace platform.

**Verticals:**
- **RealEstate** — `IProperty` (gagot's core entity, extends `IAsset`)
- **Marketplace items** — `IMarketPlaceItem` (auctions, items with delivery)
- **Services** — (planned, will extend `IAsset`)
- **Cars** — (planned, will extend `IAsset`)

**Consumers:**
- [`gagot-api`](https://github.com/maximcoding/gagot-api) (NestJS backend)
- [`ionic-gagot-app`](https://github.com/maximcoding/ionic-gagot-app) (Ionic + Angular mobile)
- (planned) `gagot-web` (Next.js web client)
- (planned) any colaido-family consumer

## Install

```bash
npm install @maximcoding/shared-marketplace
```

Pre-publish (or for direct from main):
```bash
npm install github:maximcoding/shared-marketplace#main
```

## Use

```ts
import {
  // base hierarchy
  IAsset, IAssetStats, IMultimedia, IChildCategory,
  // RealEstate vertical
  IProperty, IPropertyPreview, IRoom, IVisit, IReview,
  // marketplace vertical
  IMarketPlaceItem, IAuction, IDimensions, IWeight,
  // commerce primitives
  ITag, IFavorite, IPaymentTransaction, ISavedPaymentMethod,
  IOrder, IShippingAddress, IDeliveryOptions, ICarrier, ISupportTicket,
  // user
  IUser, IUserName,
  // enums
  MainCategory, CategoryEnum, PropertyState, PropertyStatus,
  RoleEnum, CurrencyEnum, MeasurementEnum, Language, AddressType,
  Condition, ListingType, CommonStatus, RealEstateStatus,
  PaymentType, PaymentStatus, OrderStatus, CarrierServiceType,
} from '@maximcoding/shared-marketplace';
```

## Naming convention

- **Interfaces**: I-prefix (`IAsset`, `IProperty`, `ITag`)
- **Enums**: no prefix (`CategoryEnum`, `MainCategory`, `Language`)
- Pure structural types — no `class-validator` / framework runtime deps. API-side decorators stay in the API repo and decorate classes that `implements` these interfaces.

## Layout

```
src/
├── enums/                       22 files (16 gagot-specific + 6 cross-marketplace)
└── interfaces/
    ├── asset/                   IAsset + verticals
    │   ├── asset.interface.ts          IAsset + IAssetStats + IMultimedia + IChildCategory
    │   ├── real-estate-property.interface.ts  IRealEstateProperty extends IAsset (generic RE)
    │   └── marketplace-item.interface.ts      IMarketPlaceItem extends IAsset
    ├── commerce/                ITag, IFavorite, IPayment*, IOrder, IDelivery*, ICarrier, ISupportTicket
    ├── property/                gagot RealEstate concrete: IProperty, IRoom, IVisit, IReview
    └── (top-level)              IUser, IFile, ICategory, IComplain, IAddress, IArticle, IRecent
```

## Release

```bash
./release.sh
```

Patch bump → tsc → tag → GitHub release → CI publishes to npm. Major/minor: edit `package.json` version manually first.

## Versioning

- **Patch** (`1.0.x`): additive (new interfaces, optional fields, enum values).
- **Minor** (`1.x.0`): additive across multiple namespaces.
- **Major** (`x.0.0`): breaking (renames, type narrowing, removed fields).

Consumers pin to caret (`^1.0.0`) for safe patch+minor updates; opt into majors deliberately.

## Migration from older packages

This package supersedes:
- `@gagot/shared` — archived
- `@colaido/shared-library` — archived

Both old packages are equivalent in scope (gagot-shared already had the merged content as v2.0.0). The rename to `@maximcoding/*` reflects that the library is platform-generic, not project-specific.
