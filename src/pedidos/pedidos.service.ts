import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { Pedidos, PedidosSchema } from 'src/Schemas/pedidos.schema';
import { CreatePedidosDto } from './dto/create-pedido.dto';
import { UpdatePedidosDto } from './dto/update-pedido.dto';
import { Restaurant } from 'src/Schemas/restaurant.schema';
import { Client } from 'src/Schemas/client.schema';

@Injectable()
export class PedidosService {
  constructor(
    @Inject('PEDIDOS_MODEL')
    private pedidoModel: Model<Pedidos>,
  ) {}

  async create(createPedidosDto: CreatePedidosDto): Promise<Pedidos> {
    const createPedido = new this.pedidoModel(createPedidosDto);
    return createPedido.save();
  }

  async findAll(): Promise<Pedidos[]> {
    return this.pedidoModel
      .find()
      .populate<{ restaurante: Restaurant }>('Restaurant')
      .populate<{ client: Client }>('Clients')
      .orFail();
  }

  async findOne(id: string) {
    return this.pedidoModel
      .findById(id)
      .populate<{ restaurante: Restaurant }>('Restaurant')
      .populate<{ client: Client }>('Clients')
      .orFail();
  }

  update(id: string, updatePedidosDto: UpdatePedidosDto) {
    return this.pedidoModel
      .findByIdAndUpdate({ _id: id }, { $set: updatePedidosDto }, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.pedidoModel
      .findByIdAndDelete({
        _id: id,
      })
      .exec();
  }
}
