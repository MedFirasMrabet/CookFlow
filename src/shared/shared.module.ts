import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema } from './uploadfile/models/file.schema';
import { CronService } from './cron/cron.service';
import { MailerService } from './mail-service/mailer.service';
import { UploadFileService } from './uploadfile/uploadfile.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'File', schema: FileSchema }])],
    providers: [ MailerService, CronService, UploadFileService],


})
export class SharedModule {


}
