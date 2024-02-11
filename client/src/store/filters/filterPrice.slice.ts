import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IFilterPrice } from '../types/filters.types'
/* import { MIN_PRICE,MAX_PRICE } from '../../Components/CategoriesComponent/leftFilters_products.tsx/rangeInputs/price_inputs' */

const MIN_PRICE = 100;
const MAX_PRICE = 6000;

const filterPriceSlice = createSlice({
    name: 'filterPrice',
    initialState: {
        min:MIN_PRICE,
        max:MAX_PRICE
    },
    reducers: {
        priceProductFilter(state:IFilterPrice,action:PayloadAction<IFilterPrice>){
            const { min,max } = action.payload;
            if(min && max) {
                state.min = min;
                state.max = max;
            }
            return state;
        }
    }
})
export const { priceProductFilter} = filterPriceSlice.actions;
export default filterPriceSlice.reducer;