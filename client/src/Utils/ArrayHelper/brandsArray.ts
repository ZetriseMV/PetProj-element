
function generateRandomString(): string {
    const length = 32;
    const characters:string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result:string = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

export interface Ibrands{
    _id:string,
    BrandLinks:string,
    BrandImageSrc:string,
    altBrands:string;
}

export const ArrayBrands:Ibrands[] = [
    {
        _id:generateRandomString(),
        BrandLinks:'/huawei',
        BrandImageSrc:'https://5element.by/upload/uf/0b3/0b3e8b5579c66b56c69a81f9e0bdff03.jpg',
        altBrands:'logo-huawei'
    },
    {
        _id:generateRandomString(),
        BrandLinks:'/xiaomi',
        BrandImageSrc:'https://5element.by/upload/uf/3b6/3b6208073f3b6e66a96e4f9174c0684d.jpg',
        altBrands:'logo-xiaomi'
    },
    {
        _id:generateRandomString(),
        BrandLinks:'/lg',
        BrandImageSrc:'https://5element.by/upload/uf/2ee/2ee4c04e8bd0fbfd18c2a46409203c55.jpg',
        altBrands:'logo-lg'
    },
    {
        _id:generateRandomString(),
        BrandLinks:'/samsung',
        BrandImageSrc:'https://5element.by/upload/uf/172/172b75b774217c5b57c2cece9ae14f6d.jpg',
        altBrands:'logo-samsung'
    },
    {
        _id:generateRandomString(),
        BrandLinks:'/haier',
        BrandImageSrc:'https://5element.by/upload/uf/2a9/2a9d57db88137bb03a0fcd1bd4385736.jpg',
        altBrands:'logo-hailer'
    },
    {
        _id:generateRandomString(),
        BrandLinks:'/beko',
        BrandImageSrc:'https://5element.by/upload/uf/8db/8dbb39785f49ddeeb4f9167971050a82.svg',
        altBrands:'logo-beko'
    }
]