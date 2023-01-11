import { IClient } from "./client.interface";

export class ClientService {
    private readonly clients: IClient[] = [];
  
    create(client: IClient) {
      this.clients.push(client);
    }
    findAll(): IClient[] {
      return this.clients;
    }
  }
  