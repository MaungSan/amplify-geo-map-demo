import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerHike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Hike, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly difficulty?: string | null;
  readonly location?: string | null;
  readonly lat?: number | null;
  readonly long?: number | null;
  readonly length?: number | null;
  readonly time?: string | null;
  readonly coverimage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHike = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Hike, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly difficulty?: string | null;
  readonly location?: string | null;
  readonly lat?: number | null;
  readonly long?: number | null;
  readonly length?: number | null;
  readonly time?: string | null;
  readonly coverimage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Hike = LazyLoading extends LazyLoadingDisabled ? EagerHike : LazyHike

export declare const Hike: (new (init: ModelInit<Hike>) => Hike) & {
  copyOf(source: Hike, mutator: (draft: MutableModel<Hike>) => MutableModel<Hike> | void): Hike;
}