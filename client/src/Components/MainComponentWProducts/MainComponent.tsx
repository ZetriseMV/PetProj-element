import React,{useState,useEffect,FC} from "react";
import classes from './styles/mainCompon.module.css'
import { SliderCenter } from '../Slider/slider'

export const MainComponent:FC = ():JSX.Element => {
    return (
        <div className={classes.mainContainer_content}>
            <div className={classes.main_slider}>
                <SliderCenter/>
            </div>
            <div className={classes.products_main}>
                
            </div>
        </div>
    )
}