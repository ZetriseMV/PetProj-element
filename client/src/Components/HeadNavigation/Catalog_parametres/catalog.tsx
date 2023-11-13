import React,{useEffect,useState,FC,createContext} from 'react'
import axios,{ AxiosResponse } from 'axios'
import { CategoryLeftListCard } from './CategoryHelper/LeftCategories/CategoryLeftListcard'
import classes from './catalog_styles/catalog_styles.module.css'
import { CategoryRightCard } from './CategoryHelper/RightCategories/CategoryRightCard'
import { ArrayCategories } from '../../../Utils/ArrayHelper/categoriesArray'
import  ICategories  from './CategoryHelper/LeftCategories/CategoryLeftCard'
import { DB_URL } from '../../../API/api'

export const ObjectCategoryContext = createContext<ICategories | null>(null)

export const NavigateCatalog : FC = (): JSX.Element => {
    useEffect(() => {
        try{
            axios.get(DB_URL + '/infonavigate')
                .then((response:AxiosResponse) => console.log(response.data))
                .catch((err) => console.log(err))
        }catch(error) {
            throw new Error(error as string)
        }
    },[])
    const [stateInfo, setStateInfo] = useState<ICategories>({
        link:ArrayCategories[0].link,
        advanceCategories: ArrayCategories[0].advanceCategories
    });
    return (
        <div className={classes.catalog_background}>
            <div className={classes.categories_content}>
            <ObjectCategoryContext.Provider value={ stateInfo }>
                <div className={classes.categoryLeft}>
                    <CategoryLeftListCard setStateInfo = {setStateInfo}/>
                </div>
                <div className={classes.categoryRight}>
                    <CategoryRightCard/>
                </div>
            </ObjectCategoryContext.Provider>
            </div>
        </div>
    )
}
