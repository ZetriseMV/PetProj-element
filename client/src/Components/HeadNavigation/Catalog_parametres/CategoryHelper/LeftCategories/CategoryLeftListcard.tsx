import React,{useState,useEffect,FC} from 'react'
import { CategoryCard } from './CategoryLeftCard'
import { ICategoriesContent } from '../../../../../Utils/ArrayHelper/interfaceAllCategories'
import ICategories from './CategoryLeftCard'

interface IleftListCardLeft {
    setStateInfo:(stateInfo:ICategories) => void,
    navigateCategoriesData:ICategoriesContent[]
}

export const CategoryLeftListCard:FC<IleftListCardLeft> = ({ setStateInfo,navigateCategoriesData }): JSX.Element => {
    return (
        <div>
            {
                navigateCategoriesData.map((item:ICategoriesContent) => (
                    <CategoryCard 
                        key={item._id}
                        _id={item._id}
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