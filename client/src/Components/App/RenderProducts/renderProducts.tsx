
import React,{ useState,useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import { ArrayBrands } from '../../../Utils/ArrayHelper/brandsArray'
import { BrandComponent } from '../../MainComponentWProducts/Brands/brandComponent'
import { CategoryProductBrands } from '../../MainComponentWProducts/Brands/BrandCategories/BrandProduct'

export const renderBrandCategoryRoutes = () => {
    return ArrayBrands.map((item) => (
        <Route key={item._id} path={`/brandzone${item.BrandLinks}`} element={<BrandComponent />} />
    ));
}
export const renderCategoryProduct = () => {
    return ArrayBrands.map((item) => (
        <Route key={item._id} path={`/brandzone${item.BrandLinks}/:categoryProduct`} element={<CategoryProductBrands />} />
    ));
}