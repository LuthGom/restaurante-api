import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type PedidosDocument = HydratedDocument<Pedidos>;

@Schema()
export class Pedidos {
  @Prop({ type: Array, required: true })
  itens: string[];

  @Prop({ type: Number, required: true })
  total: number;

  @Prop({ type: Types.ObjectId, required: true })
  unidade: object;

  @Prop({ type: Types.ObjectId, required: true })
  cliente: object;
}

export const PedidosSchema = SchemaFactory.createForClass(Pedidos);
