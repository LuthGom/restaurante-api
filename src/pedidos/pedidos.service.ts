import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Pedidos } from 'src/Schemas/pedidos.schema';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidosService {
  constructor(
    @Inject('PEDIDOS_MODEL')
    private pedidosModel: Model<Pedidos>,
  ) {}
  async create(createPedidoDto: CreatePedidoDto): Promise<Pedidos> {
    const createPedido = new this.pedidosModel(createPedidoDto);
    return createPedido.save();
  }

  async findAll(): Promise<Pedidos[]> {
    return this.pedidosModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} pedido`;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
