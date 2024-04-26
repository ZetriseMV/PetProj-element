import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filters/filters.slice'
import priceProductFilter from './filters/filterPrice.slice'
import ApiSlice from './RequestsApi/apiSliceRequests' 

export const store = configureStore({
    reducer: {
        filter: filterSlice,
        filterPrice: priceProductFilter,
        apiData:ApiSlice 
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch