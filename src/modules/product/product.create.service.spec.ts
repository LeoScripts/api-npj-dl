import { CreateProductService } from "./product.create.service";
import { ProductInMemoryRepository } from "./repositories/ProductInMemoryRepository";

describe('Create Product', () => {

  it('should be possible to create a product', async () => {
    const productInMemoryRepository = new ProductInMemoryRepository();
    const createService = new CreateProductService(productInMemoryRepository);

    const product = {
      name: 'Product_test',
      bar_code: 'bar_code_test',
      price: 100
    }

    const result = await createService.execute(product)

    expect(result).toHaveProperty('id')
  })


})