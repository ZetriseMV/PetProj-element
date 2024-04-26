import { createAsyncThunk } from "@reduxjs/toolkit";
import axios,{ AxiosResponse } from "axios";
import { IProductsHeatsAndNews,ApiDataState } from '../../API/interface_requests'
import { API_ROUTE } from '../../API/api'


export const fetchHeatsAndNewsData = createAsyncThunk(
    'apiData/fetchHeatsAndNewsData',
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


