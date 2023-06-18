import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Restaurent, RestaurentDocument } from './models/restaurent.schema';

@Injectable()
export class RestaurentService {
    
    constructor(@InjectModel(Restaurent.name) private readonly restaurentModel: Model<RestaurentDocument>) { }

    async create(restaurent: {name : string , location : string}): Promise<Restaurent> {
        const newUser = new this.restaurentModel(restaurent);
        return newUser.save(); 
      }
}
