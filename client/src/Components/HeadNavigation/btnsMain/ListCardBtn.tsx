import React,{useState,useEffect,FC} from 'react'
import { BtnCard } from './btnCard'

interface INavigateItems{
    id:number;
    icon:string;
    text:string;
    link:string;
}
export const ListCardBtn: FC = (): JSX.Element => { 
    const itemsStyles: INavigateItems[] = [ 
        {id:1,icon:'equalizer',text:'Сравнение',link:'comparison'}, 
        {id:2,icon:'favorite',text:'Избранное',link:'favorites'}, 
        {id:3,icon:'shopping_cart',text:'Корзина',link:'basket'} 
    ] 
    return ( 
        <> 
            {itemsStyles.map((item: INavigateItems) => ( 
                <BtnCard key={item.id} icon={item.icon} text={item.text} link={item.link}/> 
            ))} 
        </> 
    ) 
} 