import React,{useState,useEffect,FC,ReactNode} from 'react'
import classes from './button-style.module.css'


interface ButtonUiProps {
    className?:string;
    children?:ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonUi:FC<ButtonUiProps> = ({ children,onClick,...rest }): JSX.Element => {
    return (
        <button onClick={onClick} className={classes.main_btn} {...rest}>
            { children }
        </button>
    )
}
