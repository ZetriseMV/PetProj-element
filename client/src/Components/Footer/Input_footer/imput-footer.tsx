import React,{useEffect,useState,FC} from 'react'
import classes from './input_styles/inputStyle.module.css'

export const InputFooter:FC = ():JSX.Element => {
    return (
        <>
            <input
                type="e-mail"
                placeholder='Электронная почта'
                className={classes.input_footer}
            />
        </>
    )
}