import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Client, ClientDocument } from './entities/client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
const MONGO_DB_PASSWORD = process.env.MONGODB_PASSWORD;
console.log('TESTE', MONGO_DB_PASSWORD);

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name) private clientModel: Model<ClientDocument>,
  ) {}

  async create(createClientDto: CreateClientDto): Promise<Client> {
    const createClient = new this.clientModel(createClientDto);
    return createClient.save();
  }

  async findAll(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }

  findOne(id: string) {
    return this.clientModel.findById(id);
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return this.clientModel.findByIdAndUpdate(
      { _id: id },
      { updateClientDto },
      { new: true },
    );
  }

  remove(id: string) {
    return this.clientModel
      .findByIdAndDelete({
        _id: id,
      })
      .exec();
  }
}
