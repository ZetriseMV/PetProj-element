import { createSlice,createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";
import axios,{ AxiosResponse } from "axios";
import { IProductsHeatsAndNews,ApiDataState } from '../../API/interface_requests'
import { API_ROUTE } from '../../API/api'


export const axiosData = createAsyncThunk(
    'apiData/axiosData',
    async function () {
        try{
            const response = await axios.get<IProductsHeatsAndNews[]>(`${API_ROUTE}/getHeats&&New`);
            return response.data
        }catch(err){
            console.log(err)
            throw err
        }
    } 
)

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
            .addCase(axiosData.pending, (state:ApiDataState) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(axiosData.fulfilled, (state:ApiDataState, action: PayloadAction<IProductsHeatsAndNews[]>) => {
                state.status = 'resolved';
                state.data = action.payload;
            })
            .addCase(axiosData.rejected, (state:ApiDataState) => {
                state.error = 'discovered';
            });
    }
});


export default ApiSlice.reducer;