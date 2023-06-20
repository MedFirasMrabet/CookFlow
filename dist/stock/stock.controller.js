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
exports.StockController = void 0;
const common_1 = require("@nestjs/common");
const stock_schema_1 = require("./models/stock.schema");
const stock_service_1 = require("./stock.service");
const swagger_1 = require("@nestjs/swagger");
const createStock_dto_1 = require("./dto/createStock.dto");
(0, swagger_1.ApiTags)('Stock');
let StockController = class StockController {
    constructor(stockService) {
        this.stockService = stockService;
    }
    async getAllStocks() {
        return await this.stockService.findAll();
    }
    getStockById(id) {
        return this.stockService.findById(id);
    }
    findAllByRestaurent(restaurentId) {
        return this.stockService.findByRestaurentId(restaurentId);
    }
    createStock(stock) {
        console.log(stock);
        return this.stockService.create(stock);
    }
    updateStock(updatedStock) {
        return this.stockService.update(updatedStock);
    }
    updateStockQuantity(updatedStock) {
        return this.stockService.update(updatedStock);
    }
    deleteStock(id) {
        this.stockService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getAllStocks", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getStockById", null);
__decorate([
    (0, common_1.Get)('findAllByRestaurent/:restaurentId'),
    (0, swagger_1.ApiParam)({ name: 'restaurentId', required: true }),
    __param(0, (0, common_1.Param)('restaurentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "findAllByRestaurent", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createStock_dto_1.CreateStockDto]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "createStock", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stock_schema_1.Stock]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "updateStock", null);
__decorate([
    (0, common_1.Put)('updateStockQuantity'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stock_schema_1.Stock]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "updateStockQuantity", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockController.prototype, "deleteStock", null);
StockController = __decorate([
    (0, common_1.Controller)('stocks'),
    __metadata("design:paramtypes", [stock_service_1.StockService])
], StockController);
exports.StockController = StockController;
//# sourceMappingURL=stock.controller.js.map