import { Stock, StockDocument } from './models/stock.schema';
import { Model } from 'mongoose';
import { CreateStockDto } from './dto/createStock.dto';
import { UpdateStockQuantityDto } from './dto/updateStockQuantity.dto';
export declare class StockService {
    private readonly stockModel;
    constructor(stockModel: Model<StockDocument>);
    findAll(): Promise<Stock[]>;
    findById(id: any): Promise<Stock>;
    findByRestaurentId(restaurent: string): Promise<Stock[]>;
    create(stock: CreateStockDto): Promise<Stock>;
    update(stock: Stock): Promise<Stock>;
    updateStockQuantity(stock: UpdateStockQuantityDto): Promise<Stock>;
    getCommentListByStockId(id: any): Promise<Stock>;
    delete(email: string): Promise<Stock>;
    stockExpirationNotificationList(): Promise<Stock[]>;
    minimumStockLevelNotificationList(): Promise<Stock[]>;
}
