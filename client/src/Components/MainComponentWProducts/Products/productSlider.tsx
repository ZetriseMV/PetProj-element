import { useEffect,useState,FC,useMemo } from "react";
import { ArrayNames } from '../../../Utils/ArrayHelper/mainPageNames'
import classes from './styles/productSlider/productSlider.module.css'
import { ListProducts } from "./ListProducts";
import { IProducts,IProductsApi } from '../../../API/interface_requests'

type ProductSlider = {
    nameValue:string;
    arrayNeed:IProducts | undefined;
} 

 const getArrayByKey = (key: keyof IProducts,object:IProducts | undefined): IProductsApi[] | undefined => {
    if (object && key) {
        if (object.hasOwnProperty(key)) {
            return object[key];
        } else {
            return undefined;
        }
    }
}; 

export const ProductsSlider: FC<ProductSlider> = ({ nameValue, arrayNeed }): JSX.Element => { 
    const [keyObject, setObjectKey] = useState<keyof IProducts | undefined>(); 

    const filteredData = useMemo(() => {
        if (!arrayNeed) return undefined;
        if (keyObject) {
            return getArrayByKey(keyObject, arrayNeed);
        } else {
            return arrayNeed.smartphones;
        }
    }, [arrayNeed, keyObject]);

    const handleObjectClick = (secondKey: keyof IProducts) => {
        setObjectKey(secondKey);
    }

    return ( 
        <div className={classes.main_productSlider}> 
            <h2>{nameValue}</h2> 
            <div className={classes.categories_slider}>
            { 
                ArrayNames.map((value) => { 
                    const keys = Object.keys(value);
                    const firstKey = keys[0];
                    const secondKey = keys[1]; 

                    return ( 
                        <div key={value._id} onClick={() => handleObjectClick(secondKey as keyof IProducts)} className={classes.item_box}> 
                            {Object.keys(value).map((key) => { 
                                if (key !== firstKey) { 
                                    return <span key={key}>{value[key]}</span>; 
                                } 
                                return null; 
                            })} 
                        </div> 
                    ); 
                }) 
            } 
            </div>
            <ListProducts filteredData={filteredData} /> 
        </div> 
    ) 
}
