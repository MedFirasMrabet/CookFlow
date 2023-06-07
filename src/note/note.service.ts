import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note, NoteDocument } from './models/note.schema';
import { CreateNoteDto } from './dto/note.dto';
import { MailerService } from 'src/shared/mail-service/mailer.service';

@Injectable()
export class NoteService {
    constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>, private mailerService: MailerService) { }

    async create(note: CreateNoteDto): Promise<Note> {
        const createdNote = new this.noteModel(note);
        return createdNote.save();
    }

    async findAll(): Promise<Note[]> {
        return this.noteModel.find().populate('sender').populate('recipient').exec();
    }

    async findAllNotSeen(): Promise<Note[]> {
        return this.noteModel.find({ seen: false }).populate('sender').populate('recipient').exec();
    }

    async findByRecipient(recipientId: string): Promise<Note[]> {
        return this.noteModel.find({ recipient: recipientId }).exec();
    }

    async delete(id: string): Promise<void> {
        await this.noteModel.findByIdAndRemove(id).exec();
    }

    async sendNotificationNote() {
        const notes = await this.findAllNotSeen()

        notes.map(note => {
            this.mailerService.sendEmail(note['recipient']['email'],'[NOTE IMPORTANTE!]',note['content'],note['recipient']['email'])
        })

    }
}
