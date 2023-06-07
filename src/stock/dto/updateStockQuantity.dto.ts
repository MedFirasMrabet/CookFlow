import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { StockCategory } from '../enum/stockCategory.enum';
import mongoose from 'mongoose';

export class UpdateStockQuantityDto {


    @IsNotEmpty()
    @IsNumber()
    _id: mongoose.Schema.Types.ObjectId;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @IsString()
    comment: string;

    @IsNotEmpty()
    stockCategory: StockCategory;
}
