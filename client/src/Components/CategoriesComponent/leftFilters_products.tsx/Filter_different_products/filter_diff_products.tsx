import React,{ useState,useEffect,FC } from 'react'
import classes from './styles/filter_diff_prod.module.css'
import { TFiltersLeft } from '../leftFilters'
import { categoryData,TCategoryData } from '../../helper-categoryType'
import { InputCheckboxUI } from '../../../Ui/InputCheckbox/input_checkbox'
import { IProductsApi } from '../../../../API/interface_requests'

export type TFilterCheckbox = {
    category:string;
    [nameLine:string]:string;
}

export const FilterDifferentProducts:FC<TFiltersLeft> = ({ elementsCategoryArray,QUERY_FILTER }:TFiltersLeft):JSX.Element => {

    const { label1, label2, label3, label4, label5, label6, label7 } = categoryData[QUERY_FILTER as keyof TCategoryData];

    const filteredArraysLine = (line: keyof IProductsApi):IProductsApi[] | undefined => {
        if(elementsCategoryArray) 
            return elementsCategoryArray?.filter((item, index, self) => self.findIndex(t => t[line] === item[line]) === index);
        else
            return undefined
    }
    const filteredObjectforLine = (item:IProductsApi,line:string) => {
        const category = item.category;
        let value:string = '';
        switch(line) {
            case 'firsLine':
                value = item.firsLine;
                break;
            case 'secondLine':
                value = item.secondLine
                break;
            case 'thirdLine':
                value = item.thirdLine;
                break;
            case 'fourthLine':
                value = item.fourthLine;
                break;
            case 'fifthLine':
                value = item.fifthLine;
                break;
            case 'sixthLine':
                value = item.sixthLine;
                break;
            case 'seventhLine':
                value = item.seventhLine;
                break;
            default:
                break;
        }
        const objectForFilter:TFilterCheckbox = {
            category:category,
            [line]: value
        }
        return objectForFilter;
    }

    return (
        <>
            {
                <div className={classes.qb_line1}>
                    <div className={classes.category_container}>
                        <div className={classes.text_filter}>
                            <h4>{ label1 }</h4>
                        </div>
                        {
                            filteredArraysLine('firsLine')?.map((item,index) => (
                                <div className={classes.toggle_container} key = {item._id}>
                                    <InputCheckboxUI 
                                        categoryArray = { filteredArraysLine('firsLine') }
                                        index = {index}
                                        clickFilter = { filteredObjectforLine(item,'firsLine') }
                                        
                                    />
                                    <label >{item.firsLine}</label>
                                </div>
                            ))
                        }
                    </div>
                    <div className={classes.category_container}>
                        <div className={classes.text_filter}>
                                <h4>{ label3 }</h4>
                            </div>
                        {
                            filteredArraysLine('thirdLine')?.map((item,index) => (
                                <div className={classes.toggle_container} key = {item._id}>
                                    <InputCheckboxUI 
                                        categoryArray = { filteredArraysLine('thirdLine') }
                                        index = {index}
                                        clickFilter = { filteredObjectforLine(item,'thirdLine') }
                                        
                                    />
                                    <label >{item.thirdLine}</label>
                                </div>
                            ))
                        }
                    </div>
                    <div className={classes.category_container}>
                        <div className={classes.text_filter}>
                            <h4>{ label4 }</h4>
                        </div>
                        {
                            filteredArraysLine('fourthLine')?.map((item,index) => (
                                <div className={classes.toggle_container} key = {item._id}>
                                    <InputCheckboxUI 
                                        categoryArray = { filteredArraysLine('fourthLine') }
                                        index = {index}
                                        clickFilter = { filteredObjectforLine(item,'fourthLine') }
                                        
                                    />
                                    <label >{item.fourthLine}</label>
                                </div>
                            ))
                        }
                    </div>
                    {
                        QUERY_FILTER === 'tv' ? 
                        <>
                            <div className={classes.category_container}>
                                <div className={classes.text_filter}>
                                    <h4>{ label2 }</h4>
                                </div>
                                {
                                    filteredArraysLine('secondLine')?.map((item,index) => (
                                        <div className={classes.toggle_container} key = {item._id}>
                                            <InputCheckboxUI 
                                                categoryArray = { filteredArraysLine('secondLine') }
                                                index = {index}
                                                clickFilter = { filteredObjectforLine(item,'secondLine') }
                                                
                                            />
                                            <label >{item.secondLine}</label>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={classes.category_container}>
                                <div className={classes.text_filter}>
                                    <h4>{ label7 }</h4>
                                </div>
                                {
                                    filteredArraysLine('seventhLine')?.map((item,index) => (
                                        <div className={classes.toggle_container} key = {item._id}>
                                            <InputCheckboxUI 
                                                categoryArray = { filteredArraysLine('seventhLine') }
                                                index = {index}
                                                clickFilter = { filteredObjectforLine(item,'seventhLine') }
                                                
                                            />
                                            <label >{item.seventhLine}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </> :
                        <>
                            <div className={classes.category_container}>
                                <div className={classes.text_filter}>
                                    <h4>{ label5 }</h4>
                                </div>
                                {
                                    filteredArraysLine('fifthLine')?.map((item,index) => (
                                        <div className={classes.toggle_container} key = {item._id}>
                                            <InputCheckboxUI 
                                                categoryArray = { filteredArraysLine('fifthLine') }
                                                index = {index}
                                                clickFilter = { filteredObjectforLine(item,'fifthLine') }
                                                
                                            />
                                            <label >{item.fifthLine}</label>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={classes.category_container}>
                                <div className={classes.text_filter}>
                                    <h4>{ label6 }</h4>
                                </div>
                                {
                                    filteredArraysLine('sixthLine')?.map((item,index) => (
                                        <div className={classes.toggle_container} key = {item._id}>
                                            <InputCheckboxUI 
                                                categoryArray = { filteredArraysLine('sixthLine') }
                                                index = {index}
                                                clickFilter = { filteredObjectforLine(item,'sixthLine') }
                                                
                                            />
                                            <label >{item.sixthLine}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    }
                </div>
            }
        </>
    )
} 

