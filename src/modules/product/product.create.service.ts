import { IProductRepository, ProductCreate } from './repositories/IProductRepository';

class CreateProductService {
  constructor(private productRepository: IProductRepository) {}

  async execute(data: ProductCreate) {
    // verificar se o produto ja existe
    const product = await this.productRepository.findByBarCode(data.bar_code);

    if(product) {
      // se existir da um erro
      throw new Error('Produto já existe')
    }

    // se nao , deixar salvar
    const productCreated = await this.productRepository.save(data); 

    return productCreated;
  }
}

export { CreateProductService };

