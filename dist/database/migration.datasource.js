"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationAppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.MigrationAppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin',
    database: 'sighc',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    logging: true,
});
//# sourceMappingURL=migration.datasource.js.map