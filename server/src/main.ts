import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import router  from './Routes/routes.js'
dotenv.config();

const PORT:number = Number(process.env.PORT) || 1212;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api',router)

function start():void {
    try{
        app.listen(PORT,() => {
            console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
        }) 
    }catch(error){
        console.log(error)
    }
}
start(); 




