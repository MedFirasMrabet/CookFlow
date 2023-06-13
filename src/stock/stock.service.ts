import { Injectable } from '@nestjs/common';
import { Stock, StockDocument } from './models/stock.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStockDto } from './dto/createStock.dto';
import { Cron } from '@nestjs/schedule';
import { UpdateStockQuantityDto } from './dto/updateStockQuantity.dto';


@Injectable()
export class StockService {
    constructor(@InjectModel(Stock.name) private readonly stockModel: Model<StockDocument>) { }

    async findAll(): Promise<Stock[]> {
        return await this.stockModel.find().exec();
        //return await this.stockExpirationNotificationList()

    }

    async findById(id: any): Promise<Stock> {
        return await this.stockModel.findById(id).exec();
    }

    async create(stock: CreateStockDto): Promise<Stock> {
        const newStock = new this.stockModel(stock);
        return await newStock.save();
    }

    async update(stock: Stock): Promise<Stock> {
        return await this.stockModel.findByIdAndUpdate(stock._id, stock, { new: true }).exec();
    }

    async updateStockQuantity(stock: UpdateStockQuantityDto): Promise<Stock> {
        return await this.stockModel.findByIdAndUpdate(
            stock._id,
            {
                $push: { comment: stock.comment },
                $set: {
                    stock
                }
            },
            { new: true }
        );
    }

    async getCommentListByStockId(id: any): Promise<Stock> {
        return await this.stockModel.findById(id).select('comments').populate('comments').exec();
    }

    async delete(email: string): Promise<Stock> {
        return await this.stockModel.findOneAndDelete({ email }).exec();
    }

    @Cron('0 7-19/12 * * *') // Run every 12 hours from 7 am to 7 pm
    async stockExpirationNotificationList(): Promise<Stock[]> {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() + 7);
        return await this.stockModel.find({ expiryDate: { $lte: oneWeekAgo } }).exec();
    }

    @Cron('0 7-19/12 * * *') // Run every 12 hours from 7 am to 7 pm
    async minimumStockLevelNotificationList(): Promise<Stock[]> {
        return await this.stockModel.find({ $expr: { $lt: ['$quantity', '$minimumStockLevel'] } },
        ).exec();
    }

}
