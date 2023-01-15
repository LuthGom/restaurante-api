import { Connection } from 'mongoose';
import { PedidosSchema } from 'src/Schemas/pedidos.schema';

export const pedidosProviders = [
  {
    provide: 'PEDIDOS_MODEL',
    useFactory: (connection: Connection) => connection.model('Pedidos', PedidosSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];