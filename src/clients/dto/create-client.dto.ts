import { Document } from 'mongoose';

export class CreateClientDto extends Document {
  readonly name: string;
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly creatAt: Date;
}
