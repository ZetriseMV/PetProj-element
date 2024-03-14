import { generateRandomString } from './brandsArray'

export interface IarrayOnMainPageNames {
    _id:string,
    [key:string]:string
}

export const ArrayNames:IarrayOnMainPageNames[] = [
    {
        _id:generateRandomString(),
        smartphones:'Смартфоны',
    },
    {
        _id:generateRandomString(),
        washmachine:'Стиральные машины',
    },
    {
        _id:generateRandomString(),
        vacuum:'Пылесосы',
    },
    {
        _id:generateRandomString(),
        tv:'Телевизоры',
    },
    {
        _id:generateRandomString(),
        headphones:'Наушники',
    },
    {
        _id:generateRandomString(),
        fridge:'Холодильники',
    },
    {
        _id:generateRandomString(),
        bake:'Микроволновые печи'
    }
]