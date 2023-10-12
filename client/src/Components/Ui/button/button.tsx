import React,{useState,useEffect,FC,ReactNode} from 'react'

interface ButtonUiProps {
    className?:string;
    children?:ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonUi:FC<ButtonUiProps> = ({ children,onClick,className,...rest }): JSX.Element => {
    return (
        <button onClick={onClick} className={className} {...rest}>
            { children }
        </button>
    )
}
