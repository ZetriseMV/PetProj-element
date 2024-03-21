const puppeteer = require('puppeteer');
const SchemaModel = require('./models/ModelProduct.js');

const { 
    ObjectCaseSmartphones
} = require('./objectInfo.js')

const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config();
const DB_URL = process.env.DB_URL;

const DBconnect = async () => {
    try{
        mongoose
            .connect(DB_URL)
            .then(() => console.log('DB IS WORKING'))
    }catch(err){
        console.log(err)
    }
}


const parserPuppeteer = async(object) =>{
    const browser = await puppeteer.launch({headless: true,  });
    const page = await browser.newPage();
    await page.goto('https://5element.by/catalog/387-chehly-dlya-smartfonov', {
        waitUntil:'domcontentloaded'
    })
    const urls = await page.$$eval('.c-text',(e) => e.map(a => a.href));
    for(const url of urls.slice(1,10)) {
        await page.goto(url)
        const prices = await page.$$eval('.pp-price',e => e.map((price) => price.innerText));
        const namesProduct = await page.$$eval('h1.section-heading__title',e => e.map((name) => name.innerText))
        const characteristics = (await page.$$eval('td > b',(e) => e.map(b => b.innerText.trim()))).slice(0,12);
        for(let i = 0;i < characteristics.length;i++) {
            object[Object.keys(object)[i]] = characteristics[i];
        }
        const regex = /(?<=products\/)[^-]+-(.*)/;
        object.price = prices.join('');
        object.nameProduct = namesProduct.join(''); 
        object.category = 'caseSmartphones';
        object.link = url.match(regex)[1];
        console.log(object)
        saveProductInDB(object) 
    }   
    await browser.close();  
} 

const saveProductInDB = async (object) => {
    try {
        const model = new SchemaModel(object);
        const result = await model.save(); 
        console.log(result); 
    } catch (error) {
        console.log(error)
    }
} 
DBconnect();
parserPuppeteer(ObjectCaseSmartphones);  