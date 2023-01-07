import { CreateEvolutionDto } from 'src/evolution/dto/create-evolution.dto';
import { EvolutionInterface } from 'src/evolution/evolution.controller';
import { PatientService } from 'src/patient/patient.service';
export declare class CoreEvolutionService {
    private readonly patientService;
    constructor(patientService: PatientService);
    private createEvolDto;
    private patientEntryList;
    private patientDrugsList;
    private posibleRecDrugsList;
    private recommendedDrugs;
    getEvolution(evolParam: EvolutionInterface): Promise<CreateEvolutionDto>;
    loadData(evolParam: EvolutionInterface): Promise<void>;
    private getEntryList;
    private getinitialHealthStatus;
    private getCurrentHealthStatus;
    private getEvolutionHealthStatus;
    private getBetterHealthStatusEntries;
    private getRecommendedDrugs;
    private validateDuplicatedDrugs;
}
