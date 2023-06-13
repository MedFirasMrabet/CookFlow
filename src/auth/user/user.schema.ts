import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
import { UserRole } from '../enum/role.enum';
import { Restaurent, RestaurentSchema } from 'src/restaurent/models/restaurent.schema';


@Schema({ timestamps: true })
export class User extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() })
    _id?: mongoose.Types.ObjectId;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, enum: UserRole, default: UserRole.Cook })
    role: UserRole;

    @Prop({ type: RestaurentSchema, required: true })
    restaurent: Restaurent;
}

export const UserSchema = SchemaFactory.createForClass(User);

