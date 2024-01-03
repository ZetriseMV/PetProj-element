import { Link } from 'react-router-dom'
import React,{ useState,useEffect,FC } from 'react'
import axios,{ AxiosResponse }  from 'axios'
import classes from './categories-components_styles/categories.module.css'
import { useLocation,Location } from 'react-router-dom'
import { API_ROUTE } from '../../API/api'

interface IProductsApi {
    _id:number,
    firsLine:string,
    secondLine:string,
    thirdLine:string,
    fourthLine:string,
    fifthLine:string,
    sixthLine:string,
    seventhLine:string,
    eighthLine:string,
    ninethLine?:string,
    tenthLine?:string,
    eleventhLine?:string,
    price:string,
    nameProduct:string,
    category:string,
    __v:number;
}

export const CategoriesComponent:FC = ():JSX.Element => {
    const [elementsCategoryArray,setElementsCategoryArray] = useState<IProductsApi[]>()
    const location: Location<{ query: string }> = useLocation();
    const QUERY_FILTER:string = location.pathname.slice(1,location.pathname.length);
    useEffect(() => {
        try {
            axios.get<IProductsApi[]>(`${API_ROUTE}/getCategoryElelements`,{
                params: {
                    queryFilter: QUERY_FILTER
                }
            })
            .then((response:AxiosResponse<IProductsApi[]>) => setElementsCategoryArray(response.data))
            .catch((error) => console.log(error))
        } catch (error) {
            console.log(error)
        }
    },[QUERY_FILTER])
    console.log(elementsCategoryArray)
    return (
        <div>
        
        </div>
    )
}