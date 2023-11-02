export function RandomNumber(min:number,max:number):number{
    return Math.floor(Math.random() * (max - min) + min);
}
export interface ICategoriesContent {
    id:number;
    link:string;
    imageSrc:string;
    altImage:string;
    textName:string;
    advanceCategories: {
        Sells: string[];
        SellsLinks: string[];
    };
}
export const ArrayCategories:ICategoriesContent[] = [
    {
        id:RandomNumber(1,1000),
        link:'/actions',
        imageSrc:'https://5element.by/desktop/images/catalog/catalog-nav/catalog-nav-1.png',
        altImage:'logo_actions',
        textName:'Акции',
        advanceCategories:{
            Sells:[
                'ВСЕ Аукционные товары','Лидеры продаж','Супер цены','Уцененные товары','Premium товары',
                'Скидки','Суперцены на смарт-часы Huawei','Скидки до 20% на стиральные машины LG',
                'Смартфоны Honor выгодно','Рассрочка на 18 месяцев',
                'Акустические системы Sven + подарок','Умный ночник Xiaomi + подарок',
                'Рассрочка до 18 месяцев по карте Халва','Подарки','Рюкзак MIRU для ноутбука + подарок',
                'Смартфон Honor 90 + подарок',
            ],
            SellsLinks:[
                'all-auction-products','top-sellers','super-prices','discounted-products','premium-products',
                'discounts','super-prices-on-Huawei-smart-watches', 'up-to-20%-discounts-on-LG-washing-machines',
                'Honor-smartphones-are-profitable','instalments-for-18-months-with-a-down-payment',
                'sven-speaker-systems-+-gift','Xiaomi-smart-night-light-sensor-controller-as-a-gift',
                'installments-up-to-18-months-with-Halva-card', 'gifts','MIRU-laptop-backpack',
                'honor-90-smartphone-+-gift'
            ]
        }
    },
    {
        id:RandomNumber(1,1000),
        link:'/smartphones',
        imageSrc:'https://5element.by/upload/5element/374/3747a06569941339128cc0b1836c336f.jpg',
        altImage:'logo_smartphones',
        textName:'Смартфоны и гаджеты',
        advanceCategories:{
            Sells:[
                'Смартфоны','Смартфоны Apple iPhone','Смартфоны Samsung','Смартфоны Xiomi','Чехлы для телефонов',
                'Наушники','Наушники и гарнитуры','Наушники беспроводные(Bluetuth)','Наушники с плеером',
                'Кабели и переходники','Подставки и штативы для планшетов','Чехлы и клавиатуры для планшетов',
                'Защитные стекла','Портативные зарядные устройства','Кабели для смартфонов','Док-станции'
            ],
            SellsLinks:[
                'smartphones','smartphonesApple','smartphonesSamsung','smartphonesXiomi','smartphonecovers',
                'headphones','headphonesandheadsets','wirelessheadphones','headphonesWplayers',
                'cables-and-adapters', 'stands-and-tripods-for-tablets', 'cases-and-keyboards-for-tablets', 
                'protective-glasses','portable-chargers', 'cables-for-smartphones', 'docking-stations'

            ]
        }
    },
    {
        id:RandomNumber(1,1000),
        link:'/computerstechincs',
        imageSrc:'https://5element.by/upload/5element/d16/d16f5f907e55951aa01e306d1e8bd1bc.jpg',
        altImage:'logo_computer',
        textName:'Ноутбуки и компьютеры',
        advanceCategories:{
            Sells:[
                'Ноутбуки','Моноблоки','Системные блоки','Мониторы','Планшеты','Принтеры','Электронные книги',
                'Карты памяти','Клавиатуры','Мыши','Коврики для мыши','Жесткие диски,SSD',
                'Компьютерные кресла','Видеокарты','Оперативная память','Корпуса ПК','Блоки питания',
                'Материнские платы','Камеры видеонаблюдения','3D принтеры'
            ],
            SellsLinks:[
                'notebooks','monoblocks','systemblocks','mpnitors','tablets','printers','e-books',
                'memory cards','keyboards','mices','mice-pads','SSD-disks',
                'computer-chairs','video-cards','ram', 'pc-cases', 'power-supplies', 
                'motherboards', 'cctv-cameras', '3d-printers'
            ]
        }
    },
    {
        id:RandomNumber(1,1000),
        link:'/kitchenappliances',
        imageSrc:'https://5element.by/upload/5element/19e/19e5902581487e6f4953f0e2846f0aee.jpg',
        altImage:'',
        textName:'Техника для кухни',
        advanceCategories:{
            Sells:[
                'Холодильники','Морозильники','Однокамерные холодильники','Винные шкафы','Блендеры',
                'Мясорубки','Миксеры','Весы кухонные','Измельчители','Кофемашины','Фильтры для воды',
                'Аэрогрили','Мороженицы','Микроволновые печи','Микроволновые печи','Электрогрили',
                'Бутербродницы','Наборы столовой посуды','Аксессуары для кухонной техники','Посуда для кофе и чая'
            ],
            SellsLinks:[
                'fridges','freezers','single-chamber-refrigerators','wine coolers','blenders',
                'meat grinders','mixers','kitchen scales','choppers','coffee-machines','water-filters',
                'air-grills','icecream-makers','microwave-ovens', 'microwave-ovens', 'electric-grills',
                'sandwich-makers', 'dinnerware-sets', 'accessories-for-kitchen-appliances','coffee-and-teaware'
            ]
        }
    },
    {
        id:RandomNumber(1,1000),
        link:'/audio',
        imageSrc:'https://5element.by/upload/5element/e9b/e9b5007008dfdb81f6770108e35c9ef2.jpg',
        altImage:'logo_audio',
        textName:'Аудио',
        advanceCategories:{
            Sells:[
                'Наушники и гарнитуры','Звуковые панели и саундбары','Портативная акустика','Компьютерные колонки',
                'Домашние кинотеатры','MP3 плееры','Диктофоны','Автомобильные колонки','Автомагнитолы',
                'CD и DVD диски','Акустика Hi-Fi активная','Акустика Hi-Fi','Готовые Hi-Fi решения'

            ],
            SellsLinks:[
                'headphones-and-headsets','soundbars-and-soundbars','portable-acoustics','computer-speakers', 
                'home-theatres','MP3-players','dictaphones','carspeakers','car-radios',
                'cd-dvd-discs', 'active-hi-fi-acoustics', 'hi-fi-acoustics', 'ready-hi-fi-solutions'

            ]
        }
    },
    {
        id:RandomNumber(1,1000),
        link:'/playzone',
        imageSrc:'https://5element.by/upload/5element/f3b/f3b5884428cab224c62b3a1c93db7fdb.jpg',
        altImage:'logo_playzone',
        textName:'Игровая зона',
        advanceCategories:{
            Sells:[
                'Игры для Playstation 5','Игры для Playstation 4','Хиты Playstation','Аксессуары для Playstation 5',
                'Игры для Xbox Series X|S','Игры для Xbox One','Аксессуары для Xbox One','Игры для Nintendo',
                'Игровые аксессуары для ПК','Игровые мыши','Клавиатуры игровые','Микрофоны для стриминга',
                'Рули для PC','Геймпады и джойстики','Очки виртуальной реальности'

            ],
            SellsLinks:[
                'games-ps5','games-ps4','heats-playstation','accessories-ps5',
                'games-xbox-series-x|s','games-xbox1','accessories-xbox1','games-nintendo',
                'gaming-accessories', 'gaming-mice', 'gaming-keyboards', 'microphones-streaming',
                'steering-wheels', 'gamepads-joysticks', 'virtual-reality-glasses'
            ]
        }
    }
]
