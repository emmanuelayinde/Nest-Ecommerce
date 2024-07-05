import config from 'config';
import { DataSource, DataSourceOptions } from 'typeorm';

export const datasourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: config.DB_HOST,
  port: Number(config.DB_PORT),
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  entities: [],
  migrations: [],
  logging: false,
  synchronize: false,
};

const dataSource = new DataSource(datasourceOptions);

export default dataSource;
