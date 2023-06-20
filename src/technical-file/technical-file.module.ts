import { Module } from '@nestjs/common';
import { TechnicalFileController } from './technical-file.controller';
import { TechnicalFileService } from './technical-file.service';
import { UploadFileService } from 'src/shared/uploadfile/uploadfile.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema } from 'src/shared/uploadfile/models/file.schema';

@Module({
  controllers: [TechnicalFileController],
  providers: [TechnicalFileService,UploadFileService],
  imports: [MongooseModule.forFeature([{ name: 'File', schema: FileSchema }])],


})
export class TechnicalFileModule {}
