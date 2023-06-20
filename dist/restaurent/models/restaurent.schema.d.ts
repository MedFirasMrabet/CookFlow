import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from '../../auth/user/user.schema';
export type RestaurentDocument = Restaurent & Document;
export declare class Restaurent {
    _id?: mongoose.Types.ObjectId;
    name: string;
    location: string;
    users: User[];
    chef: User;
}
export declare const RestaurentSchema: mongoose.Schema<Restaurent, mongoose.Model<Restaurent, any, any, any, Document<unknown, any, Restaurent> & Omit<Restaurent & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Restaurent, Document<unknown, {}, mongoose.FlatRecord<Restaurent>> & Omit<mongoose.FlatRecord<Restaurent> & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>>;
