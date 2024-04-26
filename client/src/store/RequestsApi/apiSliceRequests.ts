import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { fetchHeatsAndNewsData } from './requests';
import { ApiDataState } from '../../API/interface_requests';
import { IProductsHeatsAndNews } from '../../API/interface_requests';

const ApiSlice = createSlice({
    name: 'apiData',
    initialState: {
        data: {} as any, /*  в будущем исправить тип,так как если поставить тип IProductsHeatsAndNews[] то оно видит это как массив  */ 
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder 
            .addCase(fetchHeatsAndNewsData.pending, (state:ApiDataState) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchHeatsAndNewsData.fulfilled, (state:ApiDataState, action: PayloadAction<IProductsHeatsAndNews[]>) => {
                state.status = 'resolved';
                state.data = action.payload;
            })
            .addCase(fetchHeatsAndNewsData.rejected, (state:ApiDataState) => {
                state.error = 'discovered';
            });
    }
});


export default ApiSlice.reducer;