import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Stock } from './models/stock.schema';
import { StockService } from './stock.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateStockDto } from './dto/createStock.dto';

ApiTags('Stock')

@Controller('stocks')
export class StockController {
    constructor(private stockService: StockService) { }
    @Get()
    async getAllStocks(): Promise<Stock[]> {
        return await this.stockService.findAll();
    }

    @Get(':id')
    getStockById(@Param('id') id: string): Promise<Stock> {
        return this.stockService.findById(id);
    }

    @Post()
    createStock(@Body() stock: CreateStockDto): Promise<Stock> {
        console.log(stock);
        
        return this.stockService.create(stock);
    }

    @Put()
    updateStock( @Body() updatedStock: Stock): Promise<Stock> {
        return this.stockService.update(updatedStock);
    }

    @Put('updateStockQuantity')
    updateStockQuantity(@Body() updatedStock: Stock): Promise<Stock> {
        return this.stockService.update( updatedStock);
    }

    @Delete(':id')
    deleteStock(@Param('id') id: string): void {
        this.stockService.delete(id);
    }
}
