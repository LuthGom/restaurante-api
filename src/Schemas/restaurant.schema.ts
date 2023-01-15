import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Restaurant>;

@Schema()
export class Restaurant {
  @Prop()
  name: string;

  @Prop()
  cnpj: string;

  @Prop()
  unidade: string;

  @Prop()
  createdAt: Date;
}

export const ResturantSchema = SchemaFactory.createForClass(Restaurant);
