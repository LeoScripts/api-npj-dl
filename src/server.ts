import { config } from 'dotenv';
import express from 'express';

config();
const port = process.env.SERVER_PORT
const app = express();

app.get('/',(req,res)=> {
  res.status(200).json({message:'Ola seja bem vindo'})
})

app.listen(port || 3333, () => {
  console.log(`Server running in ${port || 3333}`);
});

console.log(process.env.DB_NAME)
