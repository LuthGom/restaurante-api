import { Document, Types } from 'mongoose';
import { Itens } from 'src/interfaces/pedidos.interfaces';
export class CreatePedidosDto extends Document {
  readonly itens: Itens;
  readonly total: number;
  readonly unidade: Types.ObjectId;
  readonly cliente: Types.ObjectId;
}
