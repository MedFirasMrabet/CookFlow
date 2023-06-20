import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Restaurent } from 'src/restaurent/models/restaurent.schema';
export type FileDocument = File & Document;
export declare class File extends Document {
    _id?: mongoose.Types.ObjectId;
    originalname: string;
    path: string;
    type: string;
    restaurent: Restaurent;
}
export declare const FileSchema: mongoose.Schema<File, mongoose.Model<File, any, any, any, mongoose.Document<unknown, any, File> & Omit<File & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, File, mongoose.Document<unknown, {}, mongoose.FlatRecord<File>> & Omit<mongoose.FlatRecord<File> & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>>;
