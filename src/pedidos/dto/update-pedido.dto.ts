import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidosDto } from './create-pedido.dto';

export class UpdatePedidosDto extends PartialType(CreatePedidosDto) {}
