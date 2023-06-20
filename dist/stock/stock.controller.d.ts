import { Stock } from './models/stock.schema';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/createStock.dto';
export declare class StockController {
    private stockService;
    constructor(stockService: StockService);
    getAllStocks(): Promise<Stock[]>;
    getStockById(id: string): Promise<Stock>;
    findAllByRestaurent(restaurentId: string): Promise<Stock[]>;
    createStock(stock: CreateStockDto): Promise<Stock>;
    updateStock(updatedStock: Stock): Promise<Stock>;
    updateStockQuantity(updatedStock: Stock): Promise<Stock>;
    deleteStock(id: string): void;
}
