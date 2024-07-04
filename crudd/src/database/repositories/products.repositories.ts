// In your repositories/products.repositories.ts
import { IProduct, Product } from "@/src/database/models/products.model";

export class ProductRepository {
    // get all 
    public async getAllProducts(sort?: string, filter?: string, category?: string, price?: number): Promise<IProduct[]> {
        try {
            const query: any = {};
    
            if (filter) {
                query.name = { $regex: filter, $options: 'i' };
            }
    
            if (category) {
                query.category = { $regex: category, $options: 'i' };
            }
    
            if (price !== undefined) {
                query.price = price;
            }

    
            return await Product.find(query).sort(sort);
        } catch (error) {
            console.log('Cannot get products', error);
            throw error;
        }
    }
    
    // create 
    public async createProduct(data: IProduct): Promise<IProduct> {
        try {
            const newProduct = new Product(data);
            return await newProduct.save();
        } catch (error) {
            console.log('Cannot create product', error);
            throw error;
        }
    }

    // findbyId
    public async getproductById(id: string): Promise<IProduct | null> {
        try {
            return await Product.findById(id);
        } catch (error) {
            throw error
        }
    }

    // update 
    public async updateProduct(id: string, data: Partial<IProduct>): Promise<IProduct | null> {
        try {
            return await Product.findByIdAndUpdate(id, data, {new: true});
        } catch (error) {
            throw error
        }
    }

    // delete
    public async deleteProduct(id: string): Promise<IProduct | null> {
        try {
            return await Product.findByIdAndDelete(id);
        } catch (error) {
            throw error
        }
    }
}

export const productRepository = new ProductRepository();
