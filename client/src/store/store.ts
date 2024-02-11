import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filters/filters.slice'
import priceProductFilter from './filters/filterPrice.slice'

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        filterPrice: priceProductFilter
    },
})

export type RootState = ReturnType<typeof store.getState>