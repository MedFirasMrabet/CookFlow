import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type StockDocument = Stock & Document;
import { StockCategory } from '../enum/stockCategory.enum';
// import { Comment, CommentSchema } from './comment.schema';
import { Restaurent } from 'src/restaurent/models/restaurent.schema';

@Schema({ timestamps: true })
export class Stock {
    @Prop({ type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() })
    _id?: mongoose.Types.ObjectId;

    @Prop({ required: true, unique: true })
    name: string;

    @Prop({ required: true })
    quantity: number;

    @Prop({ required: true })
    expiryDate: Date;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    minimumStockLevel: number;

    @Prop({ type: [], required: false })
    comments: [];

    @Prop({ required: false })
    location: string; // where the stock is stored

    @Prop({ required: false })
    supplier: string;

    @Prop({ required: true, enum: StockCategory })
    stockCategory: StockCategory;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurent', required: true })
    restaurent: Restaurent;
}

export const StockSchema = SchemaFactory.createForClass(Stock);
