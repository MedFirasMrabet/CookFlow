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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockSchema = exports.Stock = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const stockCategory_enum_1 = require("../enum/stockCategory.enum");
const restaurent_schema_1 = require("../../restaurent/models/restaurent.schema");
let Stock = class Stock {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() }),
    __metadata("design:type", mongoose.Types.ObjectId)
], Stock.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Stock.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Stock.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], Stock.prototype, "expiryDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Stock.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Stock.prototype, "minimumStockLevel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [], required: false }),
    __metadata("design:type", Array)
], Stock.prototype, "comments", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Stock.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Stock.prototype, "supplier", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: stockCategory_enum_1.StockCategory }),
    __metadata("design:type", String)
], Stock.prototype, "stockCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Restaurent', required: true }),
    __metadata("design:type", restaurent_schema_1.Restaurent)
], Stock.prototype, "restaurent", void 0);
Stock = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Stock);
exports.Stock = Stock;
exports.StockSchema = mongoose_1.SchemaFactory.createForClass(Stock);
//# sourceMappingURL=stock.schema.js.map