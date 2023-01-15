import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ClientsModule } from './clients/clients.module';
import { RestauranteModule } from './restaurante/restaurante.module';
import { PedidosModule } from './pedidos/pedidos.module';

@Module({
  imports: [ConfigModule.forRoot(), ClientsModule, RestauranteModule, PedidosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
