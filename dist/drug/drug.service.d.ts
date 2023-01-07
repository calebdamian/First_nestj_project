import { Repository } from 'typeorm';
import { DrugEntity } from './entities/drug.entity';
export declare class DrugService {
    private drugRepository;
    constructor(drugRepository: Repository<DrugEntity>);
    findAll(): Promise<DrugEntity[]>;
    findOne(id: number): Promise<DrugEntity>;
}
