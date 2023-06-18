import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from 'src/auth/user/user.schema';
import { Restaurent } from 'src/restaurent/models/restaurent.schema';

export type NoteDocument = Note & Document;


@Schema()
export class Note extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() })
    _id?: mongoose.Types.ObjectId;

    @Prop({ required: true })
    content: string;
  
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    sender: User;
  
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    recipient: User;
  
    @Prop({ type: Date, default: Date.now })
    createdAt: Date;
  
    @Prop({ type: Boolean, default: false })
    seen: Boolean;


    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurent', required: true })
    restaurent: Restaurent;

}

export const NoteSchema = SchemaFactory.createForClass(Note);

