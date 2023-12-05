const puppeteer = require('puppeteer');
const SchemaModel = require('./models/telephoneModel');
const { ObjectCharacteriseTelephone,ObjectCharacteriseTV } = require('./objectInfo.js')
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

const parserPuppeteer = async() =>{
    const browser = await puppeteer.launch({headless: true,  });
    const page = await browser.newPage();
    await page.goto('https://5element.by/catalog/1403-televizory', {
        waitUntil:'domcontentloaded'
    })
    const urls = await page.$$eval('.c-text',(e) => e.map(a => a.href)); // массив ссылок на смартфоны
    console.log(urls)
     /* for(const url of urls) {
        await page.goto(url)
        const prices = await page.$$eval('.pp-price',e => e.map((price) => price.innerText));
        const namesPhones = await page.$$eval('h1.section-heading__title',e => e.map((name) => name.innerText))
        const characteristics = (await page.$$eval('td > b',(e) => e.map(b => b.innerText))).slice(0,11);
        for(let i = 0;i < characteristics.length;i++) {
            ObjectCharacteriseTV[Object.keys(ObjectCharacteriseTV)[i]] = characteristics[i];
        }
        ObjectCharacteriseTV.price = prices.join('');
        ObjectCharacteriseTV.nameTV = namesPhones.join(''); 
        ObjectCharacteriseTV.category = 'tv';
        saveProductInDB(ObjectCharacteriseTV)  
    }  */ 
    await browser.close(); 
} 

const saveProductInDB = async (object) => {
    try {
        const telephone = new SchemaModel(object);
        const result = await telephone.save();
        console.log(result);
    } catch (error) {
        console.log(error)
    }
} 
DBconnect();
parserPuppeteer();  