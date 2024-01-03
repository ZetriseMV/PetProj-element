import React,{useState,useEffect,FC} from 'react'
import { Link } from 'react-router-dom';
import { BtnCard } from './btnCard'
import classes from './listcardbtns_styles/listcard.module.css'

interface INavigateItems{
    id:number;
    icon:string;
    text:string;
    link:string;
}
const itemsStyles: INavigateItems[] = [ 
    {id:1,icon:'equalizer',text:'Сравнение',link:'comparison'}, 
    {id:2,icon:'favorite',text:'Избранное',link:'favorites'}, 
    {id:3,icon:'shopping_cart',text:'Корзина',link:'basket'} 
] 
export const ListCardBtn: FC = (): JSX.Element => { 
    const [openBurger,setOpenBurger] = useState<boolean>(false)

    const navBtnsStyle = {
        display: openBurger ? 'flex' : 'none'
    };

    return ( 
        <div className={classes.container}> 
            {itemsStyles.map((item: INavigateItems) => ( 
                <BtnCard key={item.id} icon={item.icon} text={item.text} link={item.link}/> 
            ))} 
            <div className={classes.burger_menu} onClick={() => setOpenBurger(!openBurger)}>
                <span className="material-symbols-outlined">menu</span>
            </div>
            {
                openBurger && 
                <div className={classes.openNavBtnCard}>
                    <ul className={classes.navBtns} style={navBtnsStyle}>
                        <li>
                            <Link className = {classes.Link_burger} to = '/comparison'>Сравнение</Link>
                        </li>
                        <li>
                            <Link className = {classes.Link_burger} to='/favorites'>Избранное</Link>
                        </li>
                        <li>
                            <Link className = {classes.Link_burger} to='/basket'>Корзина</Link>
                        </li>
                    </ul>
                </div>
            }
        </div> 
    ) 
} 