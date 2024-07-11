import mongoose from 'mongoose';

import {
  DateMixin,
  IdMixin,
  SoftDeleteMixin,
  softDeleteMixinDef,
} from './mixin';


export type TextType = {
  content: string;
} & SoftDeleteMixin &
  DateMixin &
  IdMixin;


const textSchema = new mongoose.Schema(
  {
    ...softDeleteMixinDef,
    content: { required: true, type: String },
  },
  {
    timestamps: true,
  }
);

export type TextDocument = TextType & mongoose.Document;

export const Text = mongoose.model<TextDocument>('Text', textSchema);
