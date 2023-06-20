"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockService = void 0;
const common_1 = require("@nestjs/common");
const stock_schema_1 = require("./models/stock.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const schedule_1 = require("@nestjs/schedule");
let StockService = class StockService {
    constructor(stockModel) {
        this.stockModel = stockModel;
    }
    async findAll() {
        return await this.stockModel.find().exec();
    }
    async findById(id) {
        return await this.stockModel.findById(id).exec();
    }
    async findByRestaurentId(restaurent) {
        return await this.stockModel.find({ restaurent }).exec();
    }
    async create(stock) {
        const newStock = new this.stockModel(stock);
        return await newStock.save();
    }
    async update(stock) {
        return await this.stockModel.findByIdAndUpdate(stock._id, stock, { new: true }).exec();
    }
    async updateStockQuantity(stock) {
        return await this.stockModel.findByIdAndUpdate(stock._id, {
            $push: { comment: stock.comment },
            $set: {
                stock
            }
        }, { new: true });
    }
    async getCommentListByStockId(id) {
        return await this.stockModel.findById(id).select('comments').populate('comments').exec();
    }
    async delete(email) {
        return await this.stockModel.findOneAndDelete({ email }).exec();
    }
    async stockExpirationNotificationList() {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() + 7);
        return await this.stockModel.find({ expiryDate: { $lte: oneWeekAgo } }).exec();
    }
    async minimumStockLevelNotificationList() {
        return await this.stockModel.find({ $expr: { $lt: ['$quantity', '$minimumStockLevel'] } }).exec();
    }
};
__decorate([
    (0, schedule_1.Cron)('0 7-19/12 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockService.prototype, "stockExpirationNotificationList", null);
__decorate([
    (0, schedule_1.Cron)('0 7-19/12 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockService.prototype, "minimumStockLevelNotificationList", null);
StockService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(stock_schema_1.Stock.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], StockService);
exports.StockService = StockService;
//# sourceMappingURL=stock.service.js.map