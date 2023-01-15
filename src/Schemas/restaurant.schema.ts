import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Restaurant>;

@Schema()
export class Restaurant {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  cnpj: string;

  @Prop({ type: String, required: true })
  unidade: string;

  @Prop()
  createdAt: Date;
}

export const ResturantSchema = SchemaFactory.createForClass(Restaurant);
