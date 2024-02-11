import React, { useState,FC, useEffect } from 'react';
import classes from './styles_inputs/inputs.module.css'
import { useDispatch } from 'react-redux';
import { priceProductFilter } from '../../../../store/filters/filterPrice.slice'
import { usePathName } from '../../../../hooks/pathName'
export const MIN_PRICE = 100;
export const MAX_PRICE = 6000;

type PriceInputProps = {
    value: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PriceInput = ({ value, onChange }: PriceInputProps): JSX.Element => {
    return (
        <input
            type="number"
            className={classes.input_model}
            min={MIN_PRICE}
            max={MAX_PRICE}
            value={value}
            onChange={onChange}
        />
    );
};

export const PriceRange:FC = (): JSX.Element => {
    const [minPrice, setMinPrice] = useState<number>(MIN_PRICE);
    const [maxPrice, setMaxPrice] = useState<number>(MAX_PRICE);
    const dispatch = useDispatch();
    const location_URL = usePathName();

    useEffect(() => {
        setMinPrice(MIN_PRICE);
        setMaxPrice(MAX_PRICE)
    },[location_URL])

    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const newMinPrice = parseInt(event.target.value); 
        if (newMinPrice >= MIN_PRICE && newMinPrice <= MAX_PRICE) { 
            setMinPrice(newMinPrice); 
            dispatch(priceProductFilter({ min: minPrice, max: maxPrice })) 
        } 
    }; 
    
    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        const newMaxPrice = parseInt(event.target.value); 
        if (newMaxPrice <= MAX_PRICE && newMaxPrice >= minPrice) { 
            setMaxPrice(newMaxPrice); 
            dispatch(priceProductFilter({ min: minPrice, max: maxPrice })); 
        } 
    };
    

    return (
        <div className={classes.container_range}>
            <h3>Цена</h3>
            <div className={classes.toggle_inputs}>
                <PriceInput value={minPrice} onChange={handleMinPriceChange} />
                <PriceInput value={maxPrice} onChange={handleMaxPriceChange} />
            </div>
            <div className={classes.toggle_move_inputs}>
                <input
                    type="range"
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    value={minPrice}
                    className={classes.move_inputs}
                    onChange={handleMinPriceChange}
                />
                <input
                    type="range"
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    value={maxPrice}
                    className={classes.move_inputs}
                    onChange={handleMaxPriceChange}
                />
            </div>
        </div>
    );
};