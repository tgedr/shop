import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum AdressType {
  DELIVERY = "DELIVERY",
  FISCAL = "FISCAL"
}



type EagerItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly notes?: string | null;
  readonly price_eur?: number | null;
  readonly priority?: number | null;
  readonly active: boolean;
  readonly images?: (Image | null)[] | null;
  readonly width_mm?: number | null;
  readonly height_mm?: number | null;
  readonly length_mm?: number | null;
  readonly weight_g?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly notes?: string | null;
  readonly price_eur?: number | null;
  readonly priority?: number | null;
  readonly active: boolean;
  readonly images: AsyncCollection<Image>;
  readonly width_mm?: number | null;
  readonly height_mm?: number | null;
  readonly length_mm?: number | null;
  readonly weight_g?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item>) => Item) & {
  copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}

type EagerImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Image, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly priority?: number | null;
  readonly content: string;
  readonly itemID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Image, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly priority?: number | null;
  readonly content: string;
  readonly itemID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Image = LazyLoading extends LazyLoadingDisabled ? EagerImage : LazyImage

export declare const Image: (new (init: ModelInit<Image>) => Image) & {
  copyOf(source: Image, mutator: (draft: MutableModel<Image>) => MutableModel<Image> | void): Image;
}

type EagerEntity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Entity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly fiscal_id?: string | null;
  readonly public: boolean;
  readonly addresses?: (Address | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEntity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Entity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly fiscal_id?: string | null;
  readonly public: boolean;
  readonly addresses: AsyncCollection<Address>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Entity = LazyLoading extends LazyLoadingDisabled ? EagerEntity : LazyEntity

export declare const Entity: (new (init: ModelInit<Entity>) => Entity) & {
  copyOf(source: Entity, mutator: (draft: MutableModel<Entity>) => MutableModel<Entity> | void): Entity;
}

type EagerAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly location: string;
  readonly postal_code: string;
  readonly country: string;
  readonly type: AdressType | keyof typeof AdressType;
  readonly entityID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly location: string;
  readonly postal_code: string;
  readonly country: string;
  readonly type: AdressType | keyof typeof AdressType;
  readonly entityID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address) & {
  copyOf(source: Address, mutator: (draft: MutableModel<Address>) => MutableModel<Address> | void): Address;
}

type EagerConfiguration = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Configuration, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly key: string;
  readonly value_float?: number | null;
  readonly value_string?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConfiguration = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Configuration, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly key: string;
  readonly value_float?: number | null;
  readonly value_string?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Configuration = LazyLoading extends LazyLoadingDisabled ? EagerConfiguration : LazyConfiguration

export declare const Configuration: (new (init: ModelInit<Configuration>) => Configuration) & {
  copyOf(source: Configuration, mutator: (draft: MutableModel<Configuration>) => MutableModel<Configuration> | void): Configuration;
}