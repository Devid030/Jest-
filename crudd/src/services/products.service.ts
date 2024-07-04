// In your services/products.service.ts
import { IProduct } from "@/src/database/models/products.model";
import { productRepository } from "@/src/database/repositories/products.repositories";


class ProductService {

   // get all 
   async getAllProducts(sort?: string, filter?:string, category?:string, price?: number): Promise<IProduct[]> {
      try {
         const products = await productRepository.getAllProducts(sort, filter, category, price);
         return products;
      } catch (error) {
         throw error;
      }
   }

   // create
   async createProduct(data: IProduct): Promise<IProduct> {
      try {
         const newProduct = await productRepository.createProduct(data);
         return newProduct;
      } catch (error) {
         throw error;
      }
   }

   // findbyId
   async getProductById(id: string): Promise<IProduct | null> {
      try {
         const products = await productRepository.getproductById(id);
         return products
      } catch (error) {
         throw error
      }
   }

   // update
   async updateProduct(id: string, params: Partial<IProduct>): Promise<IProduct | null> {
      try {
         return await productRepository.updateProduct(id, params);
      } catch (error) {
         throw error
      }
   }

   // delete 
   async deleteProduct(id: string): Promise<IProduct | null > {
      try {
         return await productRepository.deleteProduct(id);
      } catch (error) {
         throw error
      }
   }
}

// Export an instance of ProductService directly
export default new ProductService();
