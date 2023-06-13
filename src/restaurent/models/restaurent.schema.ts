import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User, UserSchema } from 'src/auth/user/user.schema';
export type RestaurentDocument = Restaurent & Document;

@Schema({ timestamps: true })
export class Restaurent {
    @Prop({ type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() })
    _id?: mongoose.Types.ObjectId;

    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ required: true })
    location: string;

    @Prop({ type: [UserSchema], required: false })
    Users: User[];

    @Prop({ type: UserSchema, required: false })
    Chef: User;
}

export const RestaurentSchema = SchemaFactory.createForClass(Restaurent);
