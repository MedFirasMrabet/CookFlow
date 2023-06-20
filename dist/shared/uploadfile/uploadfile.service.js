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
exports.UploadFileService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const file_schema_1 = require("./models/file.schema");
let UploadFileService = class UploadFileService {
    constructor(fileModel) {
        this.fileModel = fileModel;
        this.uploadPath = 'uploads';
    }
    async uploadFile(file) {
        console.log('++++++++++++++++++++');
        console.log(file, 'file');
        console.log('++++++++++++++++++++');
        let createdFile = {
            type: file.mimetype,
            path: file.path,
            originalname: file.originalname,
            restaurent: '648f66b11b1e8ab7b35d4d6d'
        };
        createdFile = await this.createFile(createdFile);
        return createdFile;
    }
    async createFile(file) {
        console.log(file, 'createdFile');
        const createFile = new this.fileModel(file);
        return createFile.save();
    }
    async getFilesByRestaurent(restaurent) {
        return this.fileModel.find({ restaurent }).exec();
    }
};
UploadFileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(file_schema_1.File.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UploadFileService);
exports.UploadFileService = UploadFileService;
//# sourceMappingURL=uploadfile.service.js.map