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
        link:'/washmachine'
    },
    {
        _id:generateRandomString(),
        text:'Пылесосы',
        link:'/vaccumclean'
    },
    {
        _id:generateRandomString(),
        text:'Холодильники',
        link:'/fridges'
    },
    {
        _id:generateRandomString(),
        text:'Микроволновые печи',
        link:'/microwave-ovens'
    },
    {
        _id:generateRandomString(),
        text:'Наушники',
        link:'/headphones-and-headsets'
    },
    {
        _id:generateRandomString(),
        text:'Ноутбуки',
        link:'/notebooks'
    },
    {
        _id:generateRandomString(),
        text:'Отпариватели',
        link:'/steamers'
    },
]

export default subCatalogArray