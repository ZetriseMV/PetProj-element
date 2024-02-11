import React,{ useState,useEffect,FC } from 'react'
import { Link } from 'react-router-dom'
import { OneCategoryWfilter } from './category_w_filter'
import classes from './styles_product/categoryProducts.module.css'
import { IProductsApi } from '../../../API/interface_requests'

type Tproducts = {
    currentProducts: IProductsApi[],
};

export const ListCategoryProductsWithFilter: FC<Tproducts> = ({ currentProducts }): JSX.Element => {

    return (
        <div className={classes.products_W}>
            {
                currentProducts.map((item: IProductsApi) => (
                    <OneCategoryWfilter 
                        key={item._id}
                        _id = {item._id}
                        firsLine = {item.firsLine}
                        secondLine = {item.secondLine}
                        thirdLine = {item.thirdLine}
                        fourthLine = {item.fourthLine}
                        fifthLine = {item.fifthLine}
                        sixthLine = {item.sixthLine}
                        seventhLine = {item.seventhLine}
                        eighthLine = {item.eighthLine}
                        ninethLine = {item.ninethLine}
                        tenthLine = {item.tenthLine}
                        eleventhLine= {item.eleventhLine}
                        price= {item.price}
                        nameProduct= {item.nameProduct}
                        category = {item.category}
                        link = {item.link}
                        image = {item.image}
                        __v = {item.__v}
                    />
                ))
            }
        </div>
    );
};