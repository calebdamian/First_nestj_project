import { EvolutionService } from './evolution.service';
export declare class EvolutionInterface {
    patientId: number;
    beginDate: Date;
    diagnosis: string;
    endDate?: Date;
    constructor(patientId: number, beginDate: Date, diagnosis: string, endDate?: Date);
}
export interface CoreEvols {
    beginDate: Date;
    endDate: Date;
    patientId: number;
    diagnosis: string;
}
export interface reportInterface {
    initialHealthStatus: number;
    currentHealthStatus: number;
}
export declare class EvolutionController {
    private readonly evolutionService;
    constructor(evolutionService: EvolutionService);
    createEvolution(evolutionParam: EvolutionInterface): Promise<import("./entities/evolution.entity").EvolutionEntity[]>;
    getAllEvolutions(): Promise<import("./entities/evolution.entity").EvolutionEntity[]>;
    findEvolutionsByPatientId(patientid: number): Promise<import("./entities/evolution.entity").EvolutionEntity[]>;
    getCoreEvols(params: CoreEvols): Promise<import("./entities/evolution.entity").EvolutionEntity[]>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    getReport(params: reportInterface): Promise<import("./entities/evolution.entity").EvolutionEntity[]>;
}
