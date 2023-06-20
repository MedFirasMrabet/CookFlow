import { Model } from 'mongoose';
import { Restaurent, RestaurentDocument } from './models/restaurent.schema';
export declare class RestaurentService {
    private readonly restaurentModel;
    constructor(restaurentModel: Model<RestaurentDocument>);
    create(restaurent: {
        name: string;
        location: string;
    }): Promise<Restaurent>;
}
