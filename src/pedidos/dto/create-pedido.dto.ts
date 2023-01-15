import { Document } from 'mongoose';
export class CreatePedidoDto extends Document {
  readonly itens: string[];
  readonly total: number;
  readonly unidade: object;
  readonly cliente: object;
}
