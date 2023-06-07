
import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteController } from './note.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteSchema } from './models/note.schema';
import { MailerService } from 'src/shared/mail-service/mailer.service';

@Module({
  providers: [NoteService, MailerService],
  controllers: [NoteController],
  imports: [MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }])]
})
export class NoteModule { }
