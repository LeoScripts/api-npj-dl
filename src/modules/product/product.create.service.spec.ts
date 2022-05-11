import { CreateProductService } from "./product.create.service";
import { ProductInMemoryRepository } from "./repositories/ProductInMemoryRepository";

let createProductService: CreateProductService;
let productInMemoryRepository: ProductInMemoryRepository;

describe('Create Product', () => {

  beforeAll(() => {
    productInMemoryRepository = new ProductInMemoryRepository();
    createProductService = new CreateProductService(productInMemoryRepository);   
  })

  it('should be possible to create a product', async () => {


    const product = {
      name: 'Product_test',
      bar_code: 'bar_code_test',
      price: 100
    }

    const result = await createProductService.execute(product)

    expect(result).toHaveProperty('id')
  })

  it('should not be possible to create a product with the bar_code that already exists', async  () => {

    const product = {
      name: 'Product_test',
      bar_code: 'bar_code_test_2',
      price: 100
    }

    await createProductService.execute(product)
    await expect(createProductService.execute(product)).rejects.toEqual(new Error('Produto já cadastrado'));

    
  })

})