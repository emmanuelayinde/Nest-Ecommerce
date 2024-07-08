import { DataSource, DataSourceOptions } from 'typeorm';

import config from '../config/index';

export const datasourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: config.DB_HOST,
  port: Number(config.DB_PORT),
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  entities: ['build/src/**/*.entity.{ts,js}'],
  migrations: ['build/src/db/migrations/*.{ts,js}'],
  logging: false,
  synchronize: false,
};

const dataSource = new DataSource(datasourceOptions);

export default dataSource;
