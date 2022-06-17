import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import Axios from 'axios';


export const  getCategories=createAsyncThunk('fetchProducts',async()=>{

        const categories= await Axios.get('https://mock.redq.io/api/categories?searchJoin=and&limit=1000&parent=null&search=type.slug:bakery')
        return categories.data
    
})
export const categorieSlice=createSlice({
    name:'categories',
    initialState:{
        value:{}
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCategories.pending,(state,action)=>{
            state.status="loading"
        })
            .addCase(getCategories.fulfilled,(state,action)=>{
                state.status="succeeded"
                state.value=action.payload
            })
                .addCase(getCategories.rejected,(state,action)=>{
                    state.status="failed"
                    state.value=action.error
                })

    }

})