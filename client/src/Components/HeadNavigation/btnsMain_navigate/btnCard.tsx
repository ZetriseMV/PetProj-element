import React,{useState,useEffect,FC} from 'react'
import { Link } from 'react-router-dom';
import classes from './btnsList_styles/btnCard.module.css'

interface IBtnCard{
    icon:string;
    text:string;
    link:string;
}

export const BtnCard:FC<IBtnCard> = ({ icon,text,link }):JSX.Element => {
    return (
        <Link className={classes.link_btnsMain} to = {`/${link}`}>
            <div className={classes.navBtn_Card}>
                <span className="material-symbols-outlined">{icon}</span>
                <p>{text}</p>
            </div>
        </Link>
    )
}
