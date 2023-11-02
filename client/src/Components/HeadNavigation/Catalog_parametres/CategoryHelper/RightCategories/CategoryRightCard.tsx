import React,{useState,useEffect,FC,useContext} from 'react' 
import classes from './RightCategories_styles/category-right-Card.module.css'
import { BrandListSquares } from './BrandsSquare/BrandsListSquare'
import { Ibrands,ArrayBrands } from '../../../../../Utils/ArrayHelper/brandsArray'
import { ObjectCategoryContext } from '../../catalog'
import { CategoriesWideList } from './WideRightCategories/CategoriesShuffleWideList'
import ICategories from '../LeftCategories/CategoryLeftCard'

const filterBrands = (brands: Ibrands[], link: string): Ibrands[] => {
    switch (link) {
        case "/smartphones":
            return brands.filter(brand => !["/lg", "/haier", "/beko"].includes(brand.BrandLinks));
        case "/computerstechincs":
            return brands.filter(brand => !["/haier", "/beko"].includes(brand.BrandLinks));
        case "/kitchenappliances":
            return brands;
        default:
            return [];
    }
}

export type IWideCategories  = {
    Sells: string[];
    SellsLinks: string[];
}

export const CategoryRightCard = () => {
    const [stateArrayBrandsSquare,setStateArrayBrandsSquare] = useState<Ibrands[]>([])
    const CategoriesRight = useContext(ObjectCategoryContext)
    const isHidden:boolean | undefined = CategoriesRight?.link.includes('/actions') 
                                        || CategoriesRight?.link.includes('/playzone')
                                        || CategoriesRight?.link.includes('/audio')
    const [stateWideCategories, setStateWideCategories] = useState<IWideCategories | null>(CategoriesRight?.advanceCategories || null)
    useEffect(() => {
        if (CategoriesRight?.link) {
            if (["/actions"].includes(CategoriesRight.link)) {
                setStateArrayBrandsSquare([]);
            } else {
                const isFiltered = filterBrands(ArrayBrands, CategoriesRight.link);
                setStateArrayBrandsSquare(isFiltered);
            }
        }
        setStateWideCategories(CategoriesRight?.advanceCategories || null)
    }, [CategoriesRight, ArrayBrands]);
    
    return (
        <div className={classes.main}>
            {
                !isHidden && <BrandListSquares  stateArrayBrandsSquare = {stateArrayBrandsSquare} />
            }
            <CategoriesWideList stateWideCategories={stateWideCategories}/>
        </div>
    )
}