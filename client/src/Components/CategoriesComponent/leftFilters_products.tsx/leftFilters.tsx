import React,{useState,useEffect,FC} from 'react'
import classes from './leftFilters_style/leftFilter.module.css'
import { IProductsApi } from '../../../API/interface_requests'
import { InputUi } from '../../Ui/input/input'
import { PriceRange } from './rangeInputs/price_inputs'

interface CategoryMap {
    [key: string]: string;
}

type TFiltersLeft = {
    elementsCategoryArray:IProductsApi[] | undefined;
}

export const LeftFilters:FC<TFiltersLeft> = ({ elementsCategoryArray }: TFiltersLeft ):JSX.Element => {
    const [nameProduct,setNameProduct] = useState<string>('');

    useEffect(() => {
        if (elementsCategoryArray) {
            const categoryMap:CategoryMap = {
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
            setNameProduct(categoryMap[elementsCategoryArray[0].category] || '');
        }
    }, [elementsCategoryArray]);

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

        </div>
    )
}

