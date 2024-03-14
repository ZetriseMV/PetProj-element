import { generateRandomString } from './brandsArray'

export interface IsubCatalog{
    _id:string;
    text:string;
    link:string;
    img?:string;
}

const subCatalogArray:IsubCatalog[] = [
    {
        _id:generateRandomString(),
        text:'АКЦИИ',
        link:'/actions',
        img:'https://5element.by/upload/5element/b3e/b3e0ca8fb90b81609ce8b091c93db85a.jpg'
    },
    {
        _id:generateRandomString(),
        text:'Смартфоны',
        link:'/smartphones',
        img:'https://5element.by/upload/5element/b3e/b3e0ca8fb90b81609ce8b091c93db85a.jpg'
    },
    {
        _id:generateRandomString(),
        text:'Телевизоры',
        link:'/tv',
        img:'https://5element.by/upload/5element/975/975dac61c8985f900a4e961332874260.jpg'
    },
    {
        _id:generateRandomString(),
        text:'Стиральные машины',
        link:'/WashMachine',
        img:'https://5element.by/upload/5element/913/9136d2941210fef1450bcc9e060278db.jpg'
    },
    {
        _id:generateRandomString(),
        text:'Пылесосы',
        link:'/vacuum',
        img:'https://5element.by/upload/5element/459/459cf8a582a08e51ab0939ceab311f1e.jpg'
    },
    {
        _id:generateRandomString(),
        text:'Холодильники',
        link:'/Fridge',
        img:'https://5element.by/upload/5element/356/35685dbb0701ff707db3ba7af6fe11d0.jpg'
    },
    {
        _id:generateRandomString(),
        text:'Микроволновые печи',
        link:'/Bake',
        img:'https://5element.by/upload/5element/e96/e968f7960b15b2ab636c63b1fd12390f.jpg'
    },
    {
        _id:generateRandomString(),
        text:'Наушники',
        link:'/HeadPhones',
        img:'https://5element.by/upload/5element/459/459cf8a582a08e51ab0939ceab311f1e.jpg'
    },
    {
        _id:generateRandomString(),
        text:'Ноутбуки',
        link:'/NoteBooks',
        img:'https://5element.by/upload/5element/a03/a03b2d17bf9a8e83ddd54955f7665806.jpg'
    },
    {
        _id:generateRandomString(),
        text:'Отпариватели',
        link:'/Streamers',
        img:'https://content2.onliner.by/catalog/device/header/ca72041bf70e701ede93116acfab60a8.jpeg'
    },
]

export default subCatalogArray