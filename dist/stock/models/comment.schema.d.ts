import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type CommentDocument = Comment & Document;
export declare class Comment {
    _id?: mongoose.Types.ObjectId;
    text: string;
    quantity: number;
}
export declare const CommentSchema: mongoose.Schema<Comment, mongoose.Model<Comment, any, any, any, Document<unknown, any, Comment> & Omit<Comment & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Comment, Document<unknown, {}, mongoose.FlatRecord<Comment>> & Omit<mongoose.FlatRecord<Comment> & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>>;
