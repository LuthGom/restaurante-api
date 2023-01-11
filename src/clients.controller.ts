import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientService } from './clients.service';
import { IClient } from './client.interface';
// import {CreateClientDto} from "./dto/create-cat-dto";

@Controller('clients')
export class ClientsController {
  constructor(private clientsService: ClientService) {}

  @Post()
  async create(@Body() createCliente: IClient) {
    this.clientsService.create(createCliente);
  }

  @Get()
  async findAll(): Promise<IClient[]> {
    return this.clientsService.findAll();
  }
}
