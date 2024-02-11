import React,{ useState,useEffect,FC } from 'react'
import classes from './styles/checkbox.module.css'
import { useDispatch } from 'react-redux';
import { setFilter,clearFilter } from '../../../store/filters/filters.slice'
import { IFilterStateSuccess,IFilterStateDelete } from '../../../store/types/filters.types'
import { usePathName } from '../../../hooks/pathName'

type TInputCheckboxUI = {
    categoryArray:any,
    index:number,
    clickFilter:IFilterStateSuccess;
}

export const InputCheckboxUI:FC<TInputCheckboxUI> = ({ categoryArray,index,clickFilter }:TInputCheckboxUI):JSX.Element => {
    const [checkedArray, setCheckedArray] = useState(new Array(categoryArray.length).fill(false));
    const dispatch = useDispatch();
    const currentPath = usePathName();
    
    useEffect(() => {
        setCheckedArray(new Array(categoryArray.length).fill(false));
    }, [currentPath]);

    const handleCheckboxChange = (index: number) => {
        const newArray = [...checkedArray];
        newArray[index] = !newArray[index];
        setCheckedArray(newArray);
        let selectedFilter = clickFilter; 
        if (newArray[index]) {
            dispatch(setFilter(selectedFilter));
        } else {
            const entryObject = Object.entries(selectedFilter).filter(([key]) => key !== "category")
            let deleteKey:IFilterStateDelete = Object.fromEntries(entryObject)
            dispatch(clearFilter(deleteKey));
        }   
    };

    return (
        <div className={classes.category_radio}>
            <input
                type="checkbox"
                onChange={() => handleCheckboxChange(index)}
                checked={checkedArray[index]}
                key={index}
            />
        </div>
    )
} 
