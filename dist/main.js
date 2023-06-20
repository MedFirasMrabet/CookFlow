"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const cors = require('cors');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Kitchen Management API')
        .setDescription('The Kitchen Management API description')
        .addBearerAuth()
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document, {
        swaggerOptions: {
            consumes: ['application/json', 'multipart/form-data'],
        },
    });
    await app.use(cors());
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'uploads'), {
        index: false,
        prefix: '/uploads',
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map