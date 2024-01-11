import React,{ useState,useEffect,FC } from 'react'
import classes from './styles/checkbox.module.css'

type TInputCheckboxUI = {
    categoryArray:any,
    index:number,
}

export const InputCheckboxUI:FC<TInputCheckboxUI> = ({ categoryArray,index }:TInputCheckboxUI):JSX.Element => {
    const [checkedArray, setCheckedArray] = useState(new Array(categoryArray.length).fill(false));
    const handleCheckboxChange = (index: number) => {
        const newArray = [...checkedArray];
        newArray[index] = !newArray[index];
        setCheckedArray(newArray);
    };
    return (
        <div className={classes.category_radio}>
            <input
                type="checkbox"
                onChange={() => handleCheckboxChange(index)}
                checked={checkedArray[index]}
            />
        </div>
    )
} 
