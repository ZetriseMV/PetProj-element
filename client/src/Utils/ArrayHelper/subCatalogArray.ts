import { generateRandomString } from './brandsArray'

export interface IsubCatalog{
    _id:string;
    text:string;
    link:string;
}

const subCatalogArray:IsubCatalog[] = [
    {
        _id:generateRandomString(),
        text:'АКЦИИ',
        link:'/actions'
    },
    {
        _id:generateRandomString(),
        text:'Смартфоны',
        link:'/smartphones'
    },
    {
        _id:generateRandomString(),
        text:'Телевизоры',
        link:'/tv'
    },
    {
        _id:generateRandomString(),
        text:'Стиральные машины',
        link:'/WashMachine'
    },
    {
        _id:generateRandomString(),
        text:'Пылесосы',
        link:'/vacuum'
    },
    {
        _id:generateRandomString(),
        text:'Холодильники',
        link:'/Fridge'
    },
    {
        _id:generateRandomString(),
        text:'Микроволновые печи',
        link:'/Bake'
    },
    {
        _id:generateRandomString(),
        text:'Наушники',
        link:'/HeadPhones'
    },
    {
        _id:generateRandomString(),
        text:'Ноутбуки',
        link:'/NoteBooks'
    },
    {
        _id:generateRandomString(),
        text:'Отпариватели',
        link:'/Streamers'
    },
]

export default subCatalogArray