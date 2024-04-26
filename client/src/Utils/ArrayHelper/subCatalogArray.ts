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
        text:'Лидеры продаж',
        link:'/top-sellers',
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

export const DeepNavCategoriesArray = [
    {
        _id:generateRandomString(),
        link:'/smartphonecovers'
    },
    {
        _id:generateRandomString(),
        link:'/headphonesWplayers'
    },
    {
        _id:generateRandomString(),
        link:'/wirelessheadphones'
    },
    {
        _id:generateRandomString(),
        link:'/cables-and-adapters'
    },
    {
        _id:generateRandomString(),
        link:'/stands-and-tripods-for-tablets'
    },
    {
        _id:generateRandomString(),
        link:'/cases-and-keyboards-for-tablets'
    },
    {
        _id:generateRandomString(),
        link:'/protective-glasses'
    },
    {
        _id:generateRandomString(),
        link:'/portable-chargers'
    },
    {
        _id:generateRandomString(),
        link:'/docking-stations'
    },
    {
        _id:generateRandomString(),
        link:'/monoblocks'
    },
    {
        _id:generateRandomString(),
        link:'/systemblocks'
    },
    {
        _id:generateRandomString(),
        link:'/monitors'
    },
    {
        _id:generateRandomString(),
        link:'/tablets'
    },
    {
        _id:generateRandomString(),
        link:'/printers'
    },
    {
        _id:generateRandomString(),
        link:'/e-books'
    },
    {
        _id:generateRandomString(),
        link:'/memoryCards'
    },
    {
        _id:generateRandomString(),
        link:'/keyboards'
    },
    {
        _id:generateRandomString(),
        link:'/mices'
    },
    {
        _id:generateRandomString(),
        link:'/mice-pads'
    },
    {
        _id:generateRandomString(),
        link:'/SSD-disks'
    },
    {
        _id:generateRandomString(),
        link:'/computer-chairs'
    },
    {
        _id:generateRandomString(),
        link:'/video-cards'
    },
    {
        _id:generateRandomString(),
        link:'/ram'
    },
    {
        _id:generateRandomString(),
        link:'/pc-cases'
    },
    {
        _id:generateRandomString(),
        link:'/power-supplies'
    },
    {
        _id:generateRandomString(),
        link:'/motherboards'
    },
    {
        _id:generateRandomString(),
        link:'/cctv-cameras'
    },
    {
        _id:generateRandomString(),
        link:'/3d-printers'
    },
    {
        _id:generateRandomString(),
        link:'/freezers'
    },
    {
        _id:generateRandomString(),
        link:'/wine-coolers'
    },
    {
        _id:generateRandomString(),
        link:'/blenders'
    },
    {
        _id:generateRandomString(),
        link:'/meat-grinders'
    },
    {
        _id:generateRandomString(),
        link:'/mixers'
    },
    {
        _id:generateRandomString(),
        link:'/kitchen-scales'
    },
    {
        _id:generateRandomString(),
        link:'/choppers'
    },
    {
        _id:generateRandomString(),
        link:'/coffee-machines'
    },
    {
        _id:generateRandomString(),
        link:'/water-filters'
    },
    {
        _id:generateRandomString(),
        link:'/air-grills'
    },
    {
        _id:generateRandomString(),
        link:'/icecream-makers'
    },
    {
        _id:generateRandomString(),
        link:'/electric-grills'
    },
    {
        _id:generateRandomString(),
        link:'/sandwich-makers'
    },
    {
        _id:generateRandomString(),
        link:'/dinnerware-sets'
    },
    {
        _id:generateRandomString(),
        link:'/coffee-and-teaware'
    },
    {
        _id:generateRandomString(),
        link:'/soundbars-and-soundbars'
    },
    {
        _id:generateRandomString(),
        link:'/portable-acoustics'
    },
    {
        _id:generateRandomString(),
        link:'/computer-speakers'
    },
    {
        _id:generateRandomString(),
        link:'/MP3-players'
    },
    {
        _id:generateRandomString(),
        link:'/dictaphones'
    },
    {
        _id:generateRandomString(),
        link:'/carspeakers'
    },
    {
        _id:generateRandomString(),
        link:'/car-radios'
    },
    {
        _id:generateRandomString(),
        link:'/cd-dvd-discs'
    },
    {
        _id:generateRandomString(),
        link:'/hi-fi-acoustics'
    },
    {
        _id:generateRandomString(),
        link:'/games-ps5'
    },
    {
        _id:generateRandomString(),
        link:'/games-ps4'
    },
    {
        _id:generateRandomString(),
        link:'/games-xbox-series-xs'
    },
    {
        _id:generateRandomString(),
        link:'/games-xbox1'
    },
    {
        _id:generateRandomString(),
        link:'/games-nintendo'
    },
    {
        _id:generateRandomString(),
        link:'/microphones-streaming'
    },
    {
        _id:generateRandomString(),
        link:'/steering-wheels'
    },
    {
        _id:generateRandomString(),
        link:'/gamepads-joysticks'
    },
    {
        _id:generateRandomString(),
        link:'/virtual-reality-glasses'
    },
    
]

export default subCatalogArray