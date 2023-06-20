import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Restaurent } from 'src/restaurent/models/restaurent.schema';

export type FileDocument = File & Document;


@Schema()
export class File extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() })
    _id?: mongoose.Types.ObjectId;

    @Prop({ required: true })
    originalname: string;

    @Prop({ required: true })
    path: string;

    @Prop({ required: true })
    type: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurent', required: true })
    restaurent: Restaurent;

}

export const FileSchema = SchemaFactory.createForClass(File);

