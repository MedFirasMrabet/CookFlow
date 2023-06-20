"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnicalFileController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const multer_1 = require("multer");
const uploadfile_service_1 = require("../shared/uploadfile/uploadfile.service");
let TechnicalFileController = class TechnicalFileController {
    constructor(uploadFileService) {
        this.uploadFileService = uploadFileService;
    }
    async uploadFile(file, restaurentId) {
        const uploadedFilename = await this.uploadFileService.uploadFile(file, restaurentId['restaurentId']);
        return uploadedFilename;
    }
    async findAllByRestaurent(restaurentId) {
        return this.uploadFileService.getFilesByRestaurent(restaurentId['restaurentId']);
    }
};
__decorate([
    (0, common_1.Post)('upload/:restaurentId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, callback) => {
                callback(null, `${Date.now()} - ${file.originalname}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], TechnicalFileController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)('/:restaurentId'),
    (0, swagger_1.ApiParam)({ name: 'restaurentId', required: true }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TechnicalFileController.prototype, "findAllByRestaurent", null);
TechnicalFileController = __decorate([
    (0, common_1.Controller)('technical-file'),
    __metadata("design:paramtypes", [uploadfile_service_1.UploadFileService])
], TechnicalFileController);
exports.TechnicalFileController = TechnicalFileController;
//# sourceMappingURL=technical-file.controller.js.map