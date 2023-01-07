import { PatientEntity } from 'src/patient/entity/patient.entity';
import { CoreEvolutionService } from 'src/services/core-evolution/core-evolution.service';
import { Repository } from 'typeorm';
import { UpdateEvolutionDto } from './dto/update-evolution.dto';
import { EvolutionEntity } from './entities/evolution.entity';
import { EvolutionInterface } from './evolution.controller';
export declare class EvolutionService {
    private readonly coreEvolutionService;
    private evolutionRepository;
    private patientRepository;
    constructor(coreEvolutionService: CoreEvolutionService, evolutionRepository: Repository<EvolutionEntity>, patientRepository: Repository<PatientEntity>);
    createEvolution(createEvolutionInt: EvolutionInterface): Promise<EvolutionEntity[]>;
    findAll(): Promise<EvolutionEntity[]>;
    findEvolutionsByPatientId(patientId: number): Promise<EvolutionEntity[]>;
    findCoreEvolutions(patientId: number, beginDate: Date, endDate: Date, diagnosis: string): Promise<EvolutionEntity[]>;
    update(id: number, updateEvolutionDto: UpdateEvolutionDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    report(initialHealthStatus: number, currentHealthStatus: number): Promise<EvolutionEntity[]>;
}
