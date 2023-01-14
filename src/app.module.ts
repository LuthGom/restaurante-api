import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ClientsModule } from './clients/clients.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ClientsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.NESTJS_MONGODB_USER}:${process.env.NESTJS_MONGODB_PASSWORD}@apicluster.lifxpal.mongodb.net/restaurante-api`,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
