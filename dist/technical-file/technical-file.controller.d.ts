/// <reference types="multer" />
import { UploadFileService } from 'src/shared/uploadfile/uploadfile.service';
export declare class TechnicalFileController {
    private readonly uploadFileService;
    constructor(uploadFileService: UploadFileService);
    uploadFile(file: Express.Multer.File, restaurentId: number): Promise<any>;
    findAllByRestaurent(restaurentId: number): Promise<any>;
}
