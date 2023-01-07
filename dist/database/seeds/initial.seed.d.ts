import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
export default class InitialDatabaseSeed implements Seeder {
    run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any>;
}
