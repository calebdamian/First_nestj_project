import { UserEntity } from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import * as bcrypt from 'bcrypt';
import { DrugEntity } from 'src/drug/entities/drug.entity';
import drugs from './drugs.json';

export default class InitialDatabaseSeed implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const userRepository = dataSource.getRepository(UserEntity);
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash('admin123', salt);
    await userRepository.insert([
      {
        firstName: 'Caleb',
        lastName: 'Naranjo',
        email: 'admin@admin.com',
        password: password,
      },
    ]);

    const drugRepository = dataSource.getRepository(DrugEntity);
    await drugRepository.insert(drugs);
  }
}
