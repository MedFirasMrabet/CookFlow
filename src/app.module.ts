// app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockModule } from './stock/stock.module';
import { MailerService } from './shared/mail-service/mailer.service';
import { NoteModule } from './note/note.module';
import { CronService } from './shared/cron/cron.service';
import { ScheduleModule } from '@nestjs/schedule';
import { RestaurentModule } from './restaurent/restaurent.module';
import { UploadFileService } from './shared/uploadfile/uploadfile.service';
import { TechnicalFileModule } from './technical-file/technical-file.module';
import { FileSchema } from './shared/uploadfile/models/file.schema';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://cookflow:CookFlow@cookflow.1mbhdwl.mongodb.net/?retryWrites=true&w=majority'),
    AuthModule,
    StockModule,
    NoteModule,
    ScheduleModule.forRoot(),
    RestaurentModule,
    TechnicalFileModule,
    SharedModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
