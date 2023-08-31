import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/retrieve-products')
  async getProducts(): Promise<Product[]> {
    return await this.productsService.getProducts();
  }

  @Post('/add-product')
  // async create(
  //   @Body() createProductDto: CreateProductDto[],
  // ): Promise<Product[]> {
  //   // return await this.productsService.create(createProductDto);
  //   const products: Product[] = [];

  //   for (const createProductDto of createProductDto) {
  //     const product = await this.productsService.create(createProductDto);
  //     products.push(product);
  //   }

  //   return products;
  // }
  @Post('/add-products')
  async createProducts(
    @Body() createProductDtos: CreateProductDto[],
  ): Promise<Product[]> {
    const products: Product[] = [];

    for (const dto of createProductDtos) {
      const product = await this.productsService.create(dto);
      products.push(product);
    }

    return products;
  }
}
