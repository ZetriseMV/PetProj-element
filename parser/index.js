const puppeteer = require('puppeteer');
const SchemaModel = require('./models/telephoneModel');
const { 
    ObjectCharacteriseTelephone,
    ObjectCharacteriseTV,
    ObjectCharacteriseVacuum, 
    ObjectCharactariseWashMachine,
    ObjectCharactariseFridge,
    ObjectCharactariseBake, 
    ObjectCharactariseHeadPhones,
    ObjectCharactariseNoteBook,
    ObjectCharactariseStreamers
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
    await page.goto('https://5element.by/catalog/739-otparivateli', {
        waitUntil:'domcontentloaded'
    })
    const urls = await page.$$eval('.c-text',(e) => e.map(a => a.href));
    for(const url of urls.slice(1,9)) {
        await page.goto(url)
        const prices = await page.$$eval('.pp-price',e => e.map((price) => price.innerText));
        const namesProduct = await page.$$eval('h1.section-heading__title',e => e.map((name) => name.innerText))
        const characteristics = (await page.$$eval('td > b',(e) => e.map(b => b.innerText))).slice(0,10);
        for(let i = 0;i < characteristics.length;i++) {
            object[Object.keys(object)[i]] = characteristics[i];
        }
        object.price = prices.join('');
        object.nameNoteBook = namesProduct.join(''); 
        object.category = 'Streamers';
        console.log(object)
        /* saveProductInDB(object) */
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
parserPuppeteer(ObjectCharactariseStreamers);  