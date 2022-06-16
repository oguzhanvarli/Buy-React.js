import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../network/env/config";
import { baseService } from '../../network/services/baseService'



export const getProducts = createAsyncThunk('post/categories',async() => {
    return fetch('https://dummyjson.com/products').then(res => res.json()).catch(err => console.log('get data error',err))
} )




export const categories = createSlice({
    name: 'categories',
    initialState:{
        posts:[],
        loading:false
    },
    extraReducers: {
        [getProducts.pending]: (state,action) => {
            state.loading = true;
        },
        [getProducts.fulfilled]:(state,action) => {
            state.loading= false;
            state.posts = action.payload
        },
        [getProducts.rejected]:(state,action) => {
            state.loading=false;
        }
    }
})
    
    


//export const { showCategories, addCategory } = categories.actions
export default categories.reducer