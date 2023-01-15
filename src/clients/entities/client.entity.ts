import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop([Date])
  createdAt: Date;
}

export const ClientSchema = new mongoose.Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  createdAt: Date,
});
