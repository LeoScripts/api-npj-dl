import { Product } from '@prisma/client';
import { randomUUID } from 'crypto';
import { IProductRepository, ProductCreate, ProductSave } from "./IProductRepository";


class ProductInMemoryRepository implements IProductRepository {
  products: any[] = [];

  async save(data: ProductCreate): Promise<ProductSave> {
    const id = randomUUID();
    const product: ProductSave = {
      ...data,
      id,
    }
    this.products.push(product);
    return product;
    
  }
  async findByBarCode(bar_code: String): Promise <Product | null > {
      return this.products.find(product => product.bar_code === bar_code);
    }
}

export { ProductInMemoryRepository };

