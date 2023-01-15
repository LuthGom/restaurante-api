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

  findOne(id: string) {
    return this.pedidosModel.findById(id);
  }

  update(id: string, updatePedidoDto: UpdatePedidoDto) {
    return this.pedidosModel.findByIdAndUpdate(
      { _id: id },
      { updatePedidoDto },
      { new: true },
    );
  }

  remove(id: string) {
    return `This action removes a #${id} pedido`;
  }
}
