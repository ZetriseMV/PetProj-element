import React,{useState,useEffect,FC,InputHTMLAttributes } from 'react'
import classes from './stylesInput/input.module.css' 

interface InputUiProps extends
InputHTMLAttributes<HTMLInputElement>{
    className?: string;
}

export const InputUi:FC<InputUiProps> = ({ className,children,...rest }): JSX.Element => {
    return (
        <div className = {classes.input_toggle}>
            <input {...rest} className={className}/>
            {children}
        </div>
    )
}