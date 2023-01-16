import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { DatabaseModule } from 'src/shared/database/database.module';
import { pedidosProviders } from './pedidos.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PedidosController],
  providers: [PedidosService, ...pedidosProviders],
})
export class PedidosModule {}
