import { config } from 'dotenv';
import express from 'express';

config();

const app = express();

app.get('/',(req,res)=> {
  res.status(200).json({message:'Ola seja bem vindo'})
})

app.listen(3333, () => {
  console.log(`Server running in ${process.env.PORT}`);
});
