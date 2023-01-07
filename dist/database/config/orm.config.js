"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormConfig = void 0;
const drug_entity_1 = require("../../drug/entities/drug.entity");
const entry_entity_1 = require("../../entry/entities/entry.entity");
const evolution_entity_1 = require("../../evolution/entities/evolution.entity");
const patient_entity_1 = require("../../patient/entity/patient.entity");
const user_entity_1 = require("../../users/entities/user.entity");
function ormConfig() {
    return {
        type: process.env.DATABASE_TYPE,
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        synchronize: true,
        logging: false,
        autoLoadEntities: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        connectTimeout: parseInt(process.env.DATABASE_CONNECTION_TIME_OUT),
        extra: {
            connectionLimit: parseInt(process.env.DATABASE_CONNECTION_LIMIT),
        },
        entities: [
            user_entity_1.UserEntity,
            patient_entity_1.PatientEntity,
            entry_entity_1.EntryEntity,
            drug_entity_1.DrugEntity,
            evolution_entity_1.EvolutionEntity,
        ],
        migrations: ['dist/database/migrations/*.js'],
        subscribers: ['dist/observers/subscribers/*.subscriber.js'],
        cli: {
            entitiesDir: 'src/components/**/entity',
            migrationsDir: 'src/database/migrations',
            subscribersDir: 'src/observers/subscribers',
        },
    };
}
exports.ormConfig = ormConfig;
//# sourceMappingURL=orm.config.js.map