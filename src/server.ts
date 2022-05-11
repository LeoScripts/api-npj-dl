import { config } from 'dotenv';
import express from 'express';
import { productRouter } from './modules/product/routes';

config();
const port = process.env.SERVER_PORT
const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.listen(port || 3333, () => {
  console.log(`Server running in ${port || 3333}`);
});

console.log(process.env.DB_NAME)
