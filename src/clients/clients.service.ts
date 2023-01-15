import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client, ClientDocument } from '../Schemas/client.schema';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @Inject('CLIENT_MODEL')
    private clientModel: Model<Client>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const createClient = new this.clientModel(createClientDto);
    return createClient.save();
  }

  async findAll(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }

  findOne(id: string) {
    return this.clientModel.findById(id).exec();
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return this.clientModel
      .findByIdAndUpdate({ _id: id }, { $set: updateClientDto }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.clientModel
      .findByIdAndDelete({
        _id: id,
      })
      .exec();
  }
}
