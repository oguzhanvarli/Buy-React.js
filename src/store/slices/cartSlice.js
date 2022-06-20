import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems:[],
    value:0
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        increment:(state,action) => {
            const tempProduct = {...action.payload}
            state.value += 1
            state.cartItems.push(tempProduct);
        },
        decrement:(state,action) => {
            state.value -= 1
            state.cartItems.pop(action.payload)
        }
    }
})
export const {increment, decrement} = cartSlice.actions
export default cartSlice.reducer