import { DrugService } from './drug.service';
export declare class DrugController {
    private readonly drugService;
    constructor(drugService: DrugService);
    findAll(req: any): Promise<import("./entities/drug.entity").DrugEntity[]>;
    findOne(id: string): Promise<import("./entities/drug.entity").DrugEntity>;
}
