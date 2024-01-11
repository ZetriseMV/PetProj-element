import React,{useState,useEffect,FC} from 'react'
import classes from './leftFilters_style/leftFilter.module.css'
import { IProductsApi } from '../../../API/interface_requests'
import { InputUi } from '../../Ui/input/input'
import { PriceRange } from './rangeInputs/price_inputs'
import { FilterDifferentProducts } from './Filter_different_products/filter_diff_products'
import { InputCheckboxUI } from '../../Ui/InputCheckbox/input_checkbox' 

interface CategoryMap {
    [key: string]: string;
}

export type TFiltersLeft = {
    elementsCategoryArray:IProductsApi[] | undefined;
    QUERY_FILTER:string
}

export const categoryMap:CategoryMap = {
    WashMachine: 'Стиральные Машины',
    tv: 'Телевизоры',
    smartphones: 'Смартфоны',
    vacuum: 'Пылесосы',
    Fridge: 'Холодильники',
    Bake: 'Микроволнновые печи',
    HeadPhones:'Наушники',
    NoteBooks:'Ноутбуки',
    Streamers:'Отпариватели'
};

export const LeftFilters:FC<TFiltersLeft> = ({ elementsCategoryArray,QUERY_FILTER }: TFiltersLeft ):JSX.Element => {
    const [nameProduct,setNameProduct] = useState<string>('');

    useEffect(() => {
        if (elementsCategoryArray) {
            setNameProduct(categoryMap[elementsCategoryArray[0].category] || '');
        }
    }, [elementsCategoryArray]);

    const categoryArray = Object.keys(categoryMap).map(key => {
        return { key, value: categoryMap[key] };
    });
    console.log(categoryArray)
    return (
        <div className={classes.container_filters}>
            <div className={classes.text_filter}>
                <h2>{ nameProduct }</h2>
                <h5>( { elementsCategoryArray?.length } )</h5>
            </div>
            <h3>Фильтры</h3>
            <div className={classes.search_navigate}>
                <InputUi className={classes.input_ui} placeholder ='Поиск по фильтрам' type = 'text'>
                    <span className="material-symbols-outlined">search</span>
                </InputUi>
            </div>
            <div>
                <PriceRange/>
            </div> 
            <h3>Категория</h3>
            <div className={classes.search_navigate}>
                <InputUi className={classes.input_ui} placeholder ='Поиск по категориям' type = 'text'>
                    <span className="material-symbols-outlined">search</span>
                </InputUi>
                <div className={classes.categories_search}>
                    {
                        categoryArray.map((item: CategoryMap, index: number) => (
                            <div className={classes.toggle_container}>
                                <InputCheckboxUI categoryArray = { categoryArray } index = {index}/> 
                                <label>{ item.value }</label>
                            </div>
                        ))
                    } 
                </div>
                <div className={classes.filters_differentProducts}>
                    <FilterDifferentProducts 
                        elementsCategoryArray = { elementsCategoryArray }
                        QUERY_FILTER = { QUERY_FILTER }
                    />
                </div>
            </div>

        </div>
    )
}

