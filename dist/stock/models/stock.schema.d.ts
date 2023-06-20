import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type StockDocument = Stock & Document;
import { StockCategory } from '../enum/stockCategory.enum';
import { Restaurent } from 'src/restaurent/models/restaurent.schema';
export declare class Stock {
    _id?: mongoose.Types.ObjectId;
    name: string;
    quantity: number;
    expiryDate: Date;
    price: number;
    minimumStockLevel: number;
    comments: [];
    location: string;
    supplier: string;
    stockCategory: StockCategory;
    restaurent: Restaurent;
}
export declare const StockSchema: mongoose.Schema<Stock, mongoose.Model<Stock, any, any, any, Document<unknown, any, Stock> & Omit<Stock & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Stock, Document<unknown, {}, mongoose.FlatRecord<Stock>> & Omit<mongoose.FlatRecord<Stock> & Required<{
    _id: mongoose.Types.ObjectId;
}>, never>>;
