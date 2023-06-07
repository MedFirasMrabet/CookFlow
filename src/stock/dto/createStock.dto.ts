import { IsString, IsNotEmpty, IsNumber, IsArray } from 'class-validator';
import { StockCategory } from '../enum/stockCategory.enum';

export class CreateStockDto {


    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @IsNumber()
    expiryDate: string;

    @IsArray()
    comments: Comment[];

    @IsNotEmpty()
    stockCategory: StockCategory;
}
