"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const passport_1 = __importDefault(require("passport"));
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { abortOnError: false });
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('SIGHC-API')
        .setDescription('API REST to manage patients medical records along with their health status')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('', app, document);
    app.enableCors();
    app.use(passport_1.default.initialize());
    const port = parseInt(process.env.SERVER_PORT);
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map