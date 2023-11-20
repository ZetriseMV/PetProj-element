import React,{useState,useEffect,FC} from "react";
import { Link } from "react-router-dom";
import classes from './subCatalog_styles/subCatalogstyle.module.css'
import { IsubCatalog } from '../../../Utils/ArrayHelper/subCatalogArray'
/* переделать ul li в ui */

export const SubCatalog:FC<IsubCatalog> = ({ _id,link,text }):JSX.Element => {
    return (
        <Link to = {link} className={classes.link_navigationSubCatalog}>
            <li className={classes.li_navigationSubCatalog}>{text}</li>
        </Link>
    )
}       