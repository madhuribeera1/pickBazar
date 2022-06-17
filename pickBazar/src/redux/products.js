import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import Axios from 'axios';

export const getProducts = createAsyncThunk('fetchProducts', async () =>{
    const products = await Axios.get('https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&search=type.slug:bakery')
    return products.data
})
export const searchProducts = createAsyncThunk('searchProducts', async ({searchTerm}) =>{
    const products = await Axios.get('https://mock.redq.io/api/products?searchJoin=and&with=type%3Bauthor&limit=30&search=type.slug:bakery%3Bname'+searchTerm)
    return products.data
})

export const productSlice=createSlice({
    name:'products',
    initialState:{
        value:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state,action)=>{
            state.status="loading"
        })
            .addCase(getProducts.fulfilled,(state,action)=>{
                state.status="succeeded"
                state.value=action.payload
            })
                .addCase(getProducts.rejected,(state,action)=>{
                    state.status="failed"
                    state.value=action.error
                })

                builder.addCase(searchProducts.pending,(state,action)=>{
                    state.status="loading"
                })
                    .addCase(searchProducts.fulfilled,(state,action)=>{
                        state.status="succeeded"
                        state.value=action.payload
                    })
                        .addCase(searchProducts.rejected,(state,action)=>{
                            state.status="failed"
                            state.value=action.error
                        })

    }

})