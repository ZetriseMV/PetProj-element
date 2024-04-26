import React,{FC,useState,useEffect} from 'react'
import { ArrayBrands,Ibrands } from '../../../Utils/ArrayHelper/brandsArray'
import { Link } from 'react-router-dom'
import classes from './BrandCategories/style/BrandComponent_style/BrandComponent_style.module.css'
import { CategoryProductBrands } from './BrandCategories/BrandProduct'
import { usePathName } from '../../../hooks/pathName'

export const BrandComponent:FC = ():JSX.Element => {
    const pathName = usePathName();
    
    const [brandEmpty, setBrandEmpty] = useState<Ibrands | undefined>();

    useEffect(() => {
        const brand = ArrayBrands.find((item) => item.BrandLinks === `/${pathName.replace("brandzone/", "")}`);
        if (brand) {
            setBrandEmpty(brand);
        }
    }, [pathName]);
    
    return (
        <>
            {
                brandEmpty && brandEmpty.deepCategory ?
                <div className = {classes.brandEmpty_container}>
                    {
                        brandEmpty.deepCategory.linkDeepCategory.map((link, index) => (
                            <div key={index}>
                                <Link to={`${link}`} className={classes.link_container}>
                                    <img 
                                        src={brandEmpty.deepCategory?.imageCategoryDeep[index]}
                                        alt='product_imageBrand' 
                                        className={classes.image_brandCategory}
                                    />
                                    <h4>{brandEmpty.deepCategory?.textCategoryDeep[index]}</h4>
                                </Link>
                            </div>
                        ))
                    }
                </div> : 
                <>
                    <h2>React loading</h2>
                </>
            }
        </>
    )
}