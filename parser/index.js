const puppeteer = require('puppeteer');
const SchemaModel = require('./models/telephoneModel');
const { 
    ObjectCharacteriseTelephone,
    ObjectCharacteriseTV,
    ObjectCharacteriseVacuum, //убрать пробелы из DB
    ObjectCharactariseWashMachine,//сделать https://5element.by/catalog/1141-stiralnye-mashiny
    ObjectCharactariseFridge,// сделать https://5element.by/catalog/513-holodilniki
    ObjectCharactariseBake, // сделать https://5element.by/catalog/549-mikrovolnovye-pechi
    ObjectCharactariseHeadPhones,// сделать https://5element.by/catalog/1397-naushniki
    ObjectCharactariseNoteBook, //сделать https://5element.by/catalog/1383-noutbuki
    ObjectCharactariseStreamers //сделать https://5element.by/catalog/739-otparivateli
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
    await page.goto('https://5element.by/catalog/1191-pylesosy', {
        waitUntil:'domcontentloaded'
    })
    const urls = await page.$$eval('.c-text',(e) => e.map(a => a.href)); // массив ссылок на смартфоны
      /* for(const url of urls) {
        await page.goto(url)
        const prices = await page.$$eval('.pp-price',e => e.map((price) => price.innerText));
        const namesProduct = await page.$$eval('h1.section-heading__title',e => e.map((name) => name.innerText))
        const characteristics = (await page.$$eval('td > b',(e) => e.map(b => b.innerText))).slice(0,10);
        for(let i = 0;i < characteristics.length;i++) {
            object[Object.keys(object)[i]] = characteristics[i];
        }
        object.price = prices.join('');
        object.nameVacuum = namesProduct.join(''); 
        object.category = 'vacuum';

    }   */
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
parserPuppeteer();  