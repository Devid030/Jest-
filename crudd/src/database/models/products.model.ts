import { Schema, model } from "mongoose";

export interface IProduct {
    name: string;
    category: string;
    price: number;
}

const productSchema = new Schema<IProduct>({
    name: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true}
});

export const Product = model<IProduct>('Product', productSchema);
