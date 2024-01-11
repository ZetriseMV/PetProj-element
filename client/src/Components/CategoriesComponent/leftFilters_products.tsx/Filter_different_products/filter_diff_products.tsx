import React,{ useState,useEffect,FC } from 'react'
import classes from './styles/filter_diff_prod.module.css'
import { TFiltersLeft } from '../leftFilters'
import { categoryMap } from '../leftFilters'
import { categoryData,TCategoryData } from '../../helper-categoryType'
import { InputCheckboxUI } from '../../../Ui/InputCheckbox/input_checkbox'

export const FilterDifferentProducts:FC<TFiltersLeft> = ({ elementsCategoryArray,QUERY_FILTER }:TFiltersLeft):JSX.Element => {
    const { label1, label2, label3, label4, label5 } = categoryData[QUERY_FILTER as keyof TCategoryData];

    const filteredArrayForBrand = elementsCategoryArray?.filter((item, index, self) => self.findIndex(t => t.firsLine === item.firsLine) === index);

    return (
        <>
            {
                <div className={classes.qb_line1}>
                    <h3>{ label1 }</h3>
                    {
                        filteredArrayForBrand?.map((item,index) => (
                            <div className={classes.toggle_container}>
                                <InputCheckboxUI categoryArray = { filteredArrayForBrand } index = {index}/>
                                <label key={item.firsLine}>{item.firsLine}</label>
                            </div>
                        ))
                    }
                </div>
            }
        </>
    )
} 