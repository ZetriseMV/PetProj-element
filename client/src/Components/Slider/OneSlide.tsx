import React,{useState,useEffect,FC} from "react";
import { Link } from "react-router-dom";
import classes from './slider_styles/slider_style.module.css'
import { TsliderInfo } from '../../Utils/importImages'

export const Oneslide:FC<TsliderInfo> = ({ _id,link,alt,image }):JSX.Element => {
    return (
        <div className={classes.container_slide}>
            <Link to={link}>
                <img 
                    src={image}
                    alt={alt}
                />
            </Link>
        </div>
    )
}