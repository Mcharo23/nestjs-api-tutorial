import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    console.log('Received DTO:', createProductDto);
    const product = this.productRepository.create({
      title: createProductDto.title,
      price: createProductDto.price,
      discount: createProductDto.discount,
      description: createProductDto.description,
      productInStock: createProductDto.productInStock,
      productUrl: createProductDto.productUrl,
    });

    console.log(await product.save());

    return product;
  }

  async getProducts(): Promise<Product[]> {
    const products = await this.productRepository.find({});
    return products;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
