import { Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { async } from 'rxjs';
import { UploadFileService } from 'src/shared/uploadfile/uploadfile.service';

@Controller('technical-file')
export class TechnicalFileController {
    constructor(private readonly uploadFileService: UploadFileService) { }



    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads', // destination path for uploaded files
            filename: (req, file, callback) => {
                callback(null, `${Date.now()} - ${file.originalname}`); // customize filename
            },
        }),
    })) async uploadFile(@UploadedFile() file: Express.Multer.File) {//}: Promise<string> {
        const uploadedFilename = await this.uploadFileService.uploadFile(file);

        return uploadedFilename;
    }

    @Get('/:restaurentId')
    @ApiParam({ name: 'restaurentId', required: true })
    async findAllByRestaurent(@Param() restaurentId: number): Promise<any> {
        return this.uploadFileService.getFilesByRestaurent(restaurentId['restaurentId']);
    }


}
