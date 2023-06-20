import { IsString, IsNotEmpty, IsNumber, IsArray } from 'class-validator';
import { StockCategory } from '../enum/stockCategory.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStockDto {


    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    price: number;

    @IsNotEmpty()
    @ApiProperty()
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @ApiProperty()
    @IsNumber()
    minimumStockLevel: number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    expiryDate: string;

    // @IsArray()
    // @ApiProperty()
    // comments: Comment[];

    @IsNotEmpty()
    @ApiProperty()
    stockCategory: StockCategory;

    @IsNotEmpty()
    @ApiProperty()
    restaurent: string;
}
