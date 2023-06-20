import { Model } from 'mongoose';
import { Note, NoteDocument } from './models/note.schema';
import { CreateNoteDto } from './dto/note.dto';
import { MailerService } from 'src/shared/mail-service/mailer.service';
export declare class NoteService {
    private noteModel;
    private mailerService;
    constructor(noteModel: Model<NoteDocument>, mailerService: MailerService);
    create(note: CreateNoteDto): Promise<Note>;
    findAll(): Promise<Note[]>;
    findAllNotSeen(): Promise<Note[]>;
    findByRecipient(recipientId: string): Promise<Note[]>;
    delete(id: string): Promise<void>;
    sendNotificationNote(): Promise<void>;
}
