import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv'
import  cors  from 'cors'
import mongoose from 'mongoose';
import router  from './router/router'
dotenv.config();
const PORT = process.env.PORT || 5000;
const DB_URL:string | undefined = process.env.DB_URL;

const app:Application = express();

app.use(express.json());
app.use(cors())

app.use('/api',router)

const start = async() => {
    try{
        if(DB_URL){
            await mongoose
                    .connect(DB_URL)
                    .then(() => console.log('DB is running'))
                    .catch((err) => console.log(err))
        } else {
            console.log('DB_URL is undefined')
        }
        app.listen(PORT,() => {
            console.log(`server is started on PORT ${PORT}`)
        })
    }catch(err) {
        console.log(err)
    }
}


start();
