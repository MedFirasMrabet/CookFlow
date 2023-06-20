"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnicalFileModule = void 0;
const common_1 = require("@nestjs/common");
const technical_file_controller_1 = require("./technical-file.controller");
const technical_file_service_1 = require("./technical-file.service");
const uploadfile_service_1 = require("../shared/uploadfile/uploadfile.service");
const mongoose_1 = require("@nestjs/mongoose");
const file_schema_1 = require("../shared/uploadfile/models/file.schema");
let TechnicalFileModule = class TechnicalFileModule {
};
TechnicalFileModule = __decorate([
    (0, common_1.Module)({
        controllers: [technical_file_controller_1.TechnicalFileController],
        providers: [technical_file_service_1.TechnicalFileService, uploadfile_service_1.UploadFileService],
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'File', schema: file_schema_1.FileSchema }])],
    })
], TechnicalFileModule);
exports.TechnicalFileModule = TechnicalFileModule;
//# sourceMappingURL=technical-file.module.js.map