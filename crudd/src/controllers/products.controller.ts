import { Controller, Route, Post, Body, Get, Put, Delete, Path, Query } from "tsoa";
import { IProduct } from "@/src/database/models/products.model";
import  ProductService  from "@/src/services/products.service";
import productsService from "@/src/services/products.service";


@Route('/v1/products')
export class ProductController extends Controller {

    @Get('/')
    public async getAllProducts(
        @Query() sort?:string,
        @Query() filter?:string,
        @Query() category?:string,
        @Query() price?: number
    
    ): Promise<IProduct[]> {
        console.log('Query parameter - filter:', "sort:", sort, "filter:", filter, "category:", category);

        try {  
            const products = await ProductService.getAllProducts(sort, filter, category, price);
            return products;
        } catch (error) {
            throw error
        }
    }


    @Post('/')
    public async createProduct(@Body() requestBody: IProduct): Promise<IProduct> {
        try {
            const newProduct = await ProductService.createProduct(requestBody);
            return newProduct;
        } catch (error) {
            console.error('Error creating product:', error);
            throw new Error('Product creation failed');
        }
    }

    @Get('{id}')
    public async getProductById(@Path() id: string): Promise<IProduct | null> {
        try {
            const products = await ProductService.getProductById(id);
            return products
        } catch (error) {
            throw error
        }
    }

    @Put("{id}")
    public async updateProduct(@Path() id: string, @Body() requestBody: Partial<IProduct>): Promise<IProduct | null> {
        try {
            const updateProduct = await productsService.updateProduct(id, requestBody);
            return updateProduct;
        } catch (error) {
            throw error 
        }
    }

    @Delete('{id}')
    public async deleteProduct(@Path() id: string): Promise<IProduct | null > {
        try {
            const deleteProduct = await productsService.deleteProduct(id);
            return deleteProduct;
        } catch (error) {
            throw error
        }
    }
}
