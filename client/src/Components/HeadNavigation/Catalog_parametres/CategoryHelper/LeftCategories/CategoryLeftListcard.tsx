import React,{useState,useEffect,FC} from 'react'
import { CategoryCard } from './CategoryLeftCard'
import { ArrayCategories,ICategoriesContent } from '../../../../../Utils/ArrayHelper/categoriesArray'
import ICategories from './CategoryLeftCard'

interface IleftListCardLeft {
    setStateInfo:(stateInfo:ICategories) => void;
}

export const CategoryLeftListCard:FC<IleftListCardLeft> = ({ setStateInfo }): JSX.Element => {
    return (
        <div>
            {
                ArrayCategories.map((item:ICategoriesContent) => (
                    <CategoryCard 
                        key={item.id}
                        id={item.id}
                        link={item.link}
                        imageSrc={item.imageSrc}
                        textName={item.textName}
                        altImage={item.altImage}
                        advanceCategories={item.advanceCategories}
                        setStateInfo = {setStateInfo}
                    />
                ))
            }
        </div>
    )
}