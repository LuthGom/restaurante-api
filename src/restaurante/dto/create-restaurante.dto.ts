import { Document } from 'mongoose';
export class CreateRestauranteDto extends Document {
  readonly name: string;
  readonly cnpj: string;
  readonly unidade: string;
  readonly createdAt: Date;
}
