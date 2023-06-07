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

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Chef'),
    AuthModule,
    StockModule,
    NoteModule,
    ScheduleModule.forRoot()

  ],
  controllers: [AppController],
  providers: [AppService, MailerService, CronService],
})
export class AppModule {}
