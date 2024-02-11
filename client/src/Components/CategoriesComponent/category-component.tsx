import React,{ useState,useEffect,FC } from 'react'
import axios,{ AxiosResponse } from 'axios'
import { API_ROUTE } from '../../API/api'
import classes from './styles_category/category-component.module.css'
import { useLocation,Location } from 'react-router-dom'
import { ListCategoryProductsWithFilter } from './helper-categories/ListCategProducts'
import RequestsServer from '../../API/Requests'
import { IProductsApi } from '../../API/interface_requests'
import { PaginationPages } from '../Pagination/pagination'
import { LeftFilters } from './leftFilters_products.tsx/leftFilters'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store'
import { IFilterStateSuccess } from '../../store/types/filters.types'
import { usePathName } from '../../hooks/pathName'


export const CategoriesComponent:FC = ():JSX.Element => { 
    const [elementsCategoryArray,setElementsCategoryArray] = useState<IProductsApi[]>()
    const [currentProducts,setCurrentProducts] = useState<IProductsApi[] | undefined>()
    const [currentPage,setCurrentPage] = useState<number>(1)
    const [productsPerPage] = useState<number>(4)
    const filters = useSelector((state: RootState) => state.filter);
    const filterPrice = useSelector((state:RootState) => state.filterPrice);
    const QUERY_FILTER:string = usePathName();
    const lastProductIndex: number = currentPage * productsPerPage; 
    const firstProductIndex: number = lastProductIndex - productsPerPage;
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => { // useEffect для пагинации
        if (dataLoaded) {
            const calculateCurrentProducts = () => {
                const lastProductIndex: number = currentPage * productsPerPage;
                const firstProductIndex: number = lastProductIndex - productsPerPage;
                setCurrentProducts(elementsCategoryArray?.slice(firstProductIndex, lastProductIndex));
            };
            calculateCurrentProducts();
        }
    }, [currentPage, dataLoaded, elementsCategoryArray, productsPerPage]);    

    useEffect(() => { // useEffect для получения данных с сервера
        RequestsServer.getCategoryWithFilter(
            setDataLoaded,
            QUERY_FILTER,
            setCurrentProducts,
            setElementsCategoryArray,
            firstProductIndex,
            lastProductIndex
        )
        setCurrentPage(1)
    }, [QUERY_FILTER]);

    //что-то придумать с этим useEffect,так как он фильтрует уже отфильтрованный массив объектов(как я понимаю)
    useEffect(() => { //useEffect для фильтрации цены 
        // надо создать копию массива 
        const { min,max } = filterPrice; 
        const arrayWpriceFilter = elementsCategoryArray?.slice(); 
        console.log(filterPrice) 
        if(arrayWpriceFilter) { 
            const filteredArray = arrayWpriceFilter.filter(value => { 
                return Number(value.price.replace(/\s/g, '')) >= min && Number(value.price.replace(/\s/g, '')) <= max  
            }); 
            console.log(filteredArray); 
            if(filteredArray.length !== 0) { 
                setElementsCategoryArray(filteredArray) 
            } else { 
                 
            } 
            console.log(filteredArray); 
        }  
    },[filterPrice])
    
    useEffect(() => { //useEffect для фильтрации товаров по input checkbox
        if (!dataLoaded) {
            return;
        }
        const keys: string[] = Object.keys(filters);
    
        if (keys.length <= 1) {
            setCurrentProducts(elementsCategoryArray?.slice(firstProductIndex, lastProductIndex));
        } else {
            const filteredArray = elementsCategoryArray?.filter((product) => {
                return Object.entries(filters).every(([key, value]) => {
                    return product[key as keyof IProductsApi] === value;
                });
            });
            console.log(filteredArray)
            setCurrentProducts(filteredArray || []);
        }
    }, [filters, dataLoaded]);
    

    /* useEffect(() => { // useEffect для фильтрации (old version)
        if (!dataLoaded) {
            return;
        }
        const keys: string[] = Object.keys(filters);
        if (keys.length <= 1) {
            setCurrentProducts(elementsCategoryArray?.slice(firstProductIndex, lastProductIndex));
        } else {
            const applyFilters = (products: IProductsApi[], filters: Record<string, any>): IProductsApi[] => {
                return products.filter((product) => {
                    return Object.entries(filters).every(([key, value]) => {
                        return product[key as keyof IProductsApi] === value;
                    });
                });
            };
            setCurrentProducts(elementsCategoryArray ? applyFilters(elementsCategoryArray, filters) : []);
        }
    }, [filters, dataLoaded]); */

    const paginate = (pageNumber:number) => { 
        setCurrentPage(pageNumber) 
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        }); 
    } 
    
    return (
        <div className={classes.main_products}> 
            <div className={classes.left_filters}>
                <LeftFilters 
                    elementsCategoryArray = {elementsCategoryArray}
                    QUERY_FILTER = { QUERY_FILTER }
                />
            </div>
            <div className={classes.products_W}>
                {currentProducts && elementsCategoryArray && (
                    <>
                        <ListCategoryProductsWithFilter
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