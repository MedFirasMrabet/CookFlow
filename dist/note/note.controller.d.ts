import { NoteService } from './note.service';
import { Note } from './models/note.schema';
import { CreateNoteDto } from './dto/note.dto';
export declare class NoteController {
    private noteService;
    constructor(noteService: NoteService);
    create(note: CreateNoteDto): Promise<Note>;
    findAll(): Promise<Note[]>;
    findByRecipient(recipientId: string): Promise<Note[]>;
    delete(id: string): Promise<void>;
}
