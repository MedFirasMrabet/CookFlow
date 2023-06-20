import mongoose from 'mongoose';
export declare class UpdateStockQuantityDto {
    _id: mongoose.Schema.Types.ObjectId;
    quantity: number;
    comment: string;
}
