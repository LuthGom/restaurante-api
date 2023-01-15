import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ClientsModule } from './clients/clients.module';
import { RestauranteModule } from './restaurante/restaurante.module';

@Module({
  imports: [ConfigModule.forRoot(), ClientsModule, RestauranteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
