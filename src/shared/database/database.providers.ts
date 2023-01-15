import * as mongoose from 'mongoose';

const MONGO_DB_PASSWORD = process.env.NESTJS_MONGODB_PASSWORD;
const MONGO_DB_USER = process.env.NESTJS_MONGODB_USER;
const MONGO_DB_DATABASE = process.env.NESTJS_MONGODB_DATABASE;
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@apicluster.lifxpal.mongodb.net/${MONGO_DB_DATABASE}`,
      ),
  },
];
