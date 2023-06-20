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
exports.RestaurentSchema = exports.Restaurent = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const user_schema_1 = require("../../auth/user/user.schema");
let Restaurent = class Restaurent {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() }),
    __metadata("design:type", mongoose.Types.ObjectId)
], Restaurent.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Restaurent.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Restaurent.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [user_schema_1.UserSchema], required: false }),
    __metadata("design:type", Array)
], Restaurent.prototype, "users", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [user_schema_1.UserSchema], required: false }),
    __metadata("design:type", user_schema_1.User)
], Restaurent.prototype, "chef", void 0);
Restaurent = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Restaurent);
exports.Restaurent = Restaurent;
exports.RestaurentSchema = mongoose_1.SchemaFactory.createForClass(Restaurent);
//# sourceMappingURL=restaurent.schema.js.map