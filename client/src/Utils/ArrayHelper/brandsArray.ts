
export function generateRandomString(): string {
    const length = 32;
    const characters:string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result:string = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export interface IBrandsDeepCategories {
    imageCategoryDeep:string[],
    textCategoryDeep:string[],
    linkDeepCategory:string[],
}

export interface Ibrands{
    _id:string,
    BrandLinks:string,
    BrandImageSrc:string,
    altBrands:string;
    deepCategory?:IBrandsDeepCategories
}

export const ArrayBrands:Ibrands[] = [
    {
        _id:generateRandomString(),
        BrandLinks:'/huawei',
        BrandImageSrc:'https://5element.by/upload/uf/0b3/0b3e8b5579c66b56c69a81f9e0bdff03.jpg',
        altBrands:'logo-huawei',
        deepCategory:{
            imageCategoryDeep:[
                'https://5element.by/upload/medialibrary/7f0/7f0d74aba5e68ebf29833811e1ed8b1a.jpg',
                'https://5element.by/upload/medialibrary/8b2/8b2e755e7f616a2fcb3ffd7b8b6855be.jpg',
                'https://5element.by/upload/medialibrary/47a/47a673bc610e717734f361c28b3efe4f.jpg',
                'https://5element.by/upload/medialibrary/188/188eb6db01f058975f31d9f3c4058fbf.jpg',
                'https://5element.by/upload/medialibrary/050/0508a650da1aa0bae2757d3b2d26a721.jpg',
                'https://5element.by/upload/medialibrary/a12/a12ec0c33a06486c9ef239c9b6343371.jpg'
            ],
            textCategoryDeep:[
                'Смартфоны',
                'Ноутбуки',
                'Планшеты',
                'Мониторы',
                'Носимые устройства',
                'Аудио'
            ],
            linkDeepCategory:[
                'smartphones',
                'NoteBooks',
                'tablets',
                'monitors',
                'nosimye-ustroystva',
                'audio'
            ]
        }
    },
    {
        _id:generateRandomString(),
        BrandLinks:'/xiomi',
        BrandImageSrc:'https://5element.by/upload/uf/3b6/3b6208073f3b6e66a96e4f9174c0684d.jpg',
        altBrands:'logo-xiaomi',
        deepCategory:{
            imageCategoryDeep:[
                'https://5element.by/upload/medialibrary/ced/ced81687a443bc1787245a785f781b04.jpg',
                'https://5element.by/upload/medialibrary/36d/36d9a791bfd961e44dfb2c53bc920a06.jpg',
                'https://5element.by/upload/medialibrary/3b2/3b21a9f6f34aa2094586d568421f0476.jpg',
                'https://5element.by/upload/medialibrary/63d/63dd9ddc0e26ddd0d4c0a1069f080e4b.jpg',
                'https://5element.by/upload/medialibrary/fd6/fd6cf051ea36a0953caf623c9e5ca179.jpg',
                'https://5element.by/upload/medialibrary/331/331d084e595ead66f9c85301d0abc45b.jpg',
                'https://5element.by/upload/medialibrary/c49/c49190e9024df59588ba0b7e39887112.jpg',
                'https://5element.by/upload/medialibrary/cbe/cbe7a8f54132b4512cb63aa5869dafe8.jpg'
            ],
            textCategoryDeep:[
                'Смартфоны',
                'Планшеты',
                'Телевизоры',
                'Ноутбуки',
                'АудиоТехника',
                'Носимые устройства',
                'Пылесосы',
                'Умный дом'
            ],
            linkDeepCategory:[
                'smartphones',
                'tablets',
                'tv',
                'NoteBooks',
                'Audio',
                'WearableDevices',
                'vacuum',
                'smartHouse' 
            ]
        }
    },
    {
        _id:generateRandomString(),
        BrandLinks:'/lg',
        BrandImageSrc:'https://5element.by/upload/uf/2ee/2ee4c04e8bd0fbfd18c2a46409203c55.jpg',
        altBrands:'logo-lg',
        deepCategory:{
            imageCategoryDeep:[
                'https://5element.by/upload/medialibrary/e5a/e5a829563f55611ba5cb46066a38681a.jpg',
                'https://5element.by/upload/medialibrary/857/857774c872cce77fef2faee5f1fdbd04.jpeg',
                'https://5element.by/upload/medialibrary/547/547d48b9c42cbc131c4a19924b4fc77e.jpeg',
                'https://5element.by/upload/medialibrary/68e/68efcf226859c1c17cb5507556ad68b6.jpeg',
                'https://5element.by/upload/medialibrary/fcd/fcd1b1cdf7b14ff48a0ec60cf40b6af8.jpeg',
                'https://5element.by/upload/medialibrary/e1f/e1fdd9bf987eef9a9a27f9843030cb91.jpg',
                'https://5element.by/upload/medialibrary/23a/23a5a73e7fef65411beb2fe743e54784.jpg',
                'https://5element.by/upload/medialibrary/c3a/c3ae160b7f02844b216d9dc77a5185b3.jpg'
            ],
            textCategoryDeep:[
                'Телевизоры',
                'Холодильники',
                'Стиральные машины',
                'Пылесосы',
                'Микроволновые печи',
                'Духовки',
                'Ноутбуки',
                'Мониторы',
                'Акустика'
            ],
            linkDeepCategory:[
                'tv',
                'Fridges',
                'WashMachine',
                'vacuum',
                'Bake',
                'NoteBooks',
                'monitors',
                'hi-fi-acoustics'
            ]
        }
    },
    {
        _id:generateRandomString(),
        BrandLinks:'/samsung',
        BrandImageSrc:'https://5element.by/upload/uf/172/172b75b774217c5b57c2cece9ae14f6d.jpg',
        altBrands:'logo-samsung',
        deepCategory:{
            imageCategoryDeep:[
                'https://ir.ozone.ru/s3/multimedia-s/c200/6641931088.jpg',
                'https://techlabs.by/wp-content/uploads/2021/06/planshet-samsung-galaxy-tab-s6-lite-wi-fi-64gb-goluboj.jpg',
                'https://img.5element.by/import/images/ut/goods/good_96635f32-a39e-11ed-bb92-005056012465/ue32t5300auxce-televizor-samsung-1_600.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST_638iS0Rt_uh7smKRNhaK1QF-dpGt2g5KE-iNlue0g&s',
                'https://img.5element.by/import/images/ut/goods/good_4b2db17f-0a18-11e7-80e7-005056842056/vcc8835v37-xev-pylesos-samsung-1_600.jpg',
                'https://5element.by/upload/medialibrary/547/547d48b9c42cbc131c4a19924b4fc77e.jpeg',
                'https://img.5element.by/import/images/ut/goods/good_70ad1759-2d6a-11eb-bb92-0050560120e8/rs64r5331b4-wt-holodilnik-samsung-2_600.jpg',
                'https://img.5element.by/import/images/ut/goods/good_c4058107-2539-11e5-813c-00505684b891/ms23f302tqs-bw-mikrovolnovaya-pech-samsung-1_600.jpg'
            ],
            textCategoryDeep:[
                'Смартфоны',
                'Планшеты',
                'Телевизоры',
                'Аудио',
                'Пылесосы',
                'Стиральные машины',
                'Холодильники',
                'Микроволновые печи',
            ],
            linkDeepCategory:[
                'Smartphones',
                'tablets',
                'tv',
                'audio',
                'vacuum',
                'WashMacine',
                'Fridge',
                'Bake',
            ]
        }
    },
    {
        _id:generateRandomString(),
        BrandLinks:'/haier',
        BrandImageSrc:'https://5element.by/upload/uf/2a9/2a9d57db88137bb03a0fcd1bd4385736.jpg',
        altBrands:'logo-hailer',
        deepCategory:{
            imageCategoryDeep:[
                'https://5element.by/upload/medialibrary/f57/f57ed1b52eb2e1183921252437ac040b.jpg',
                'https://5element.by/upload/medialibrary/5a7/5a74d30f965b17d3ba7f8e27eff27d68.jpg',
                'https://5element.by/upload/medialibrary/590/59023fa5f8eb15866d8f5d5b1af43946.jpg',
                'https://5element.by/upload/medialibrary/8e0/8e0c72d0f44ce231ddbeb78e0db184b0.jpg',
            ],
            textCategoryDeep:[
                'Холодильники и морозильники',
                'Стиральные машины',
                'Водонагреватели',/* добавить */
                'Микроволновые печи',
            ],
            linkDeepCategory:[
                'Fridges',
                'WachMachine',
                'Bake',
                'WaterHeaters'
            ]
        }
    },
    {
        _id:generateRandomString(),
        BrandLinks:'/beko',
        BrandImageSrc:'https://5element.by/upload/uf/8db/8dbb39785f49ddeeb4f9167971050a82.svg',
        altBrands:'logo-beko',
        deepCategory:{
            imageCategoryDeep:[
                'https://5element.by/images/2022/duh.jpg',
                'https://5element.by/images/2022/hol.jpg',
                'https://5element.by/images/2022/stm.jpg',
                'https://5element.by/images/2022/posud.jpg',
            ],
            textCategoryDeep:[
                'Духовые шкафы',
                'Варочные панели',/* добавить */
                'Холодильники и морозильники',
                'Посудомоечные машины', /* добавить */
            ],
            linkDeepCategory:[
                'Bake',
                'hobs',
                'Fridges',
                'dishwashers',
            ]
        }
    }
]