import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as SchemaMongoose } from 'mongoose';

export type PedidosDocument = HydratedDocument<Pedidos>;

@Schema()
export class Pedidos {
  @Prop({ type: Array, required: true })
  itens: object[];

  @Prop({ type: Number, required: true })
  total: number;

  @Prop({
    type: SchemaMongoose.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  })
  unidade: object;

  @Prop({ type: SchemaMongoose.Types.ObjectId, ref: 'Client', required: true })
  cliente: object;
}

export const PedidosSchema = SchemaFactory.createForClass(Pedidos);
