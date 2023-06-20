import { StockCategory } from '../enum/stockCategory.enum';
export declare class CreateStockDto {
    name: string;
    price: number;
    quantity: number;
    minimumStockLevel: number;
    expiryDate: string;
    stockCategory: StockCategory;
    restaurent: string;
}
