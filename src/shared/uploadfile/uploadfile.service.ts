import { Injectable } from '@nestjs/common';
import { FileUploadDto } from './dto/file-upload.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FileDocument, File } from './models/file.schema';

@Injectable()
export class UploadFileService {
    private readonly uploadPath = 'uploads';
    constructor(@InjectModel(File.name) private fileModel: Model<FileDocument>) { }

    async uploadFile(file: FileUploadDto, restaurentId) {
        let createdFile: any = {
            type: file.mimetype,
            path: file.path,
            originalname: file.originalname,
            restaurent: restaurentId
        }

        createdFile = await this.createFile(createdFile)

        return createdFile;
    }


    async createFile(file: FileUploadDto): Promise<File> {
        console.log(file, 'createdFile');

        const createFile = new this.fileModel(file);
        return createFile.save();
    }

    async getFilesByRestaurent(restaurent) {
        return this.fileModel.find({ restaurent }).exec();

    }

}
