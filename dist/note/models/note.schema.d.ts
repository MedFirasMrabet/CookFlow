import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from 'src/auth/user/user.schema';
import { Restaurent } from 'src/restaurent/models/restaurent.schema';
export type NoteDocument = Note & Document;
export declare class Note extends Document {
    _id?: mongoose.Types.ObjectId;
    content: string;
    sender: User;
    recipient: User;
    createdAt: Date;
    seen: Boolean;
    restaurent: Restaurent;
}
export declare const NoteSchema: mongoose.Schema<Note, mongoose.Model<Note, any, any, any, mongoose.Document<unknown, any, Note> & Omit<Note & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Note, mongoose.Document<unknown, {}, mongoose.FlatRecord<Note>> & Omit<mongoose.FlatRecord<Note> & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>>;
