import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    findAll(): Promise<User[]>;
    findAllByRestaurent(restaurent: number): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    create(user: User): Promise<User>;
    update(email: string, user: any): Promise<User>;
    delete(email: string): Promise<User>;
}
