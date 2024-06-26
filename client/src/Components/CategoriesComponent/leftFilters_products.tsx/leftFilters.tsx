import React,{useState,useEffect,FC} from 'react'
import classes from './leftFilters_style/leftFilter.module.css'
import { IProductsApi } from '../../../API/interface_requests'
import { InputUi } from '../../Ui/input/input'
import { PriceRange } from './rangeInputs/price_inputs'
import { FilterDifferentProducts } from './Filter_different_products/filter_diff_products'
import { InputCheckboxUI } from '../../Ui/InputCheckbox/input_checkbox' 
import { categoryMap } from '../helper-categoryType'

export type TFiltersLeft = {
    elementsCategoryArray:IProductsApi[] | undefined;
    QUERY_FILTER?:string
}

export const LeftFilters:FC<TFiltersLeft> = ({ elementsCategoryArray,QUERY_FILTER }: TFiltersLeft ):JSX.Element => {
    const [nameProduct,setNameProduct] = useState<string>('');

    useEffect(() => {
        if (elementsCategoryArray && elementsCategoryArray.length !== 0) {
            setNameProduct(categoryMap[elementsCategoryArray[0].category]);
        } else {
            return;
        }
    }, [elementsCategoryArray]);

    return (
        <div className={classes.container_filters}>
            <div className={classes.text_filter}>
                <h2>{ nameProduct }</h2>
                <h5>( { elementsCategoryArray?.length } )</h5>
            </div>
            <div>
                <PriceRange/>
            </div> 
            <div className={classes.filters_differentProducts}>
                <FilterDifferentProducts 
                    elementsCategoryArray = { elementsCategoryArray }
                    QUERY_FILTER = { QUERY_FILTER }
                />
            </div>
        </div>
    )
}

