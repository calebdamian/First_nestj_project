import { EntryEntity } from 'src/entry/entities/entry.entity';
import { EvolutionEntity } from 'src/evolution/entities/evolution.entity';
export declare class DrugEntity {
    id: number;
    genericName?: string;
    brandName?: string;
    form?: string;
    entry: EntryEntity[];
    evolution: EvolutionEntity[];
}
