import { Admin } from 'src/admin/entity/admin.entity';
import { ClHist } from 'src/cl_hist/entity/cl_hist.entity';
import { Patient } from 'src/patient/entity/patient.entity';

export function ormConfig(): any {
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
    entities: [Admin, Patient, ClHist],
    migrations: ['dist/database/migrations/*.js'],
    subscribers: ['dist/observers/subscribers/*.subscriber.js'],
    cli: {
      entitiesDir: 'src/components/**/entity',
      migrationsDir: 'src/database/migrations',
      subscribersDir: 'src/observers/subscribers',
    },
  };
}
