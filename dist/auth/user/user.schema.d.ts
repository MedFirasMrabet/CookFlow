import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
import { UserRole } from '../enum/role.enum';
import { Restaurent } from 'src/restaurent/models/restaurent.schema';
export declare class User extends Document {
    _id?: mongoose.Types.ObjectId;
    email: string;
    password: string;
    role: UserRole;
    restaurent: Restaurent;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User> & Omit<User & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>> & Omit<mongoose.FlatRecord<User> & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>>;
