import { DataSource } from 'typeorm';

export const MigrationAppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'admin',
  database: 'sighc',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  logging: true,
});
