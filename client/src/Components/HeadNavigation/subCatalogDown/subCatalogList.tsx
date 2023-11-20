import React,{useState,useEffect,FC} from "react";
import { Link } from "react-router-dom";
import subCatalogArray,{ IsubCatalog } from '../../../Utils/ArrayHelper/subCatalogArray'
import  { SubCatalog } from './subcatalog'
import classes from './subCatalog_styles/subCatalogstyle.module.css'

export const SubCatalogList:FC = ():JSX.Element => {
    return (
        <div className={classes.mainSubCatalog}>
            {
                subCatalogArray.map((item:IsubCatalog) => (
                    <SubCatalog
                        key={item._id}
                        _id={item._id}
                        text={item.text}
                        link={item.link}
                    />
                ))   
            }
        </div>
    )
}