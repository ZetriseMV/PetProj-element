import React,{ useState,useEffect,FC } from 'react'
import classes from './styles_category/category-component.module.css'
import { useLocation,Location } from 'react-router-dom'
import { ListCategoryProductsWithFilter } from './helper-categories/ListCategProducts'
import RequestsServer from '../../API/Requests'
import { IProductsApi } from '../../API/interface_requests'
import { PaginationPages } from '../Pagination/pagination'
import { LeftFilters } from './leftFilters_products.tsx/leftFilters'

export const CategoriesComponent:FC = ():JSX.Element => {
    const [elementsCategoryArray,setElementsCategoryArray] = useState<IProductsApi[]>()
    const [loading,setLoading] = useState<boolean>(false)
    
    const [currentPage,setCurrentPage] = useState<number>(1)
    const [productsPerPage] = useState<number>(4)

    const location: Location<{ query: string }> = useLocation();
    const QUERY_FILTER:string = location.pathname.slice(1,location.pathname.length);

    const lastProductIndex: number = currentPage * productsPerPage;
    const firstProductIndex: number = lastProductIndex - productsPerPage;
    const currentProducts:IProductsApi[] | undefined = elementsCategoryArray?.slice(firstProductIndex,lastProductIndex);

    const paginate = (pageNumber:number) => {
        setCurrentPage(pageNumber)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        RequestsServer.getCategoryWithFilter(setLoading,QUERY_FILTER,setElementsCategoryArray)
    },[QUERY_FILTER])

    return (
        <div className={classes.main_products}> 
            <div className={classes.left_filters}>
                <LeftFilters 
                    elementsCategoryArray = {elementsCategoryArray}
                />
            </div>
            <div className={classes.products_W}>
                {currentProducts && elementsCategoryArray && (
                    <>
                        <ListCategoryProductsWithFilter
                            loading={loading} 
                            currentProducts = {currentProducts}
                        />
                        <PaginationPages 
                            productsPerPage = {productsPerPage}
                            totalProducts = {elementsCategoryArray.length}
                            paginate = {paginate}
                        />
                    </>
                )}
            </div>
        </div>
    )
}