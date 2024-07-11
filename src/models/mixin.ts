import mongoose from 'mongoose';

export type IdMixin = {
  _id: string;
};

export type DateMixin = {
  createdAt: Date;
  updatedAt: Date;
};

export type SoftDeleteMixin = {
  deleted?: boolean;
};

export const softDeleteMixinDef = {
  deleted: { default: false, type: Boolean },
};
