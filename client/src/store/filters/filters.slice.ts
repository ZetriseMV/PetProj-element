import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import * as IFilterState  from '../types/filters.types'
import { IFilterPrice } from '../types/filters.types'

interface IFilterState {
    category?: string;
}
  
const filterSlice = createSlice({
    name: 'filters',
    initialState: {},
    reducers: {
      setFilter(state: IFilterState, action: PayloadAction<Partial<IFilterState>>) {
          const dataFilter = { ...state, ...action.payload };
          if (Object.keys(action.payload).length > 0) return dataFilter;
          return state; 
      },
      clearFilter(state: IFilterState, action: PayloadAction<Partial<IFilterState>>){
        for (let key in action.payload) {
          const { [key]: omit, ...rest } = state as Record<string, any>;
          state = rest as IFilterState; 
        }
        return state;
      },
    },
});
  
  
export const { setFilter,clearFilter } = filterSlice.actions;
export default filterSlice.reducer;
