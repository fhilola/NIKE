import { createSlice } from "@reduxjs/toolkit";
import { Product as ProductType } from "../../types/ElementTypes.d";
import { PayloadAction } from "@reduxjs/toolkit";
import Product from "../../routes/product/Product";

interface initialStateType {
    cart: ProductType[],
    total: number
}

const initialState: initialStateType = {
    cart: [],
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart : (state, action: PayloadAction<ProductType>)=>{
            const productIndex = state.cart.findIndex((product)=> product._id === action.payload._id && product.selectedVariant.variant_value === action.payload.selectedVariant.variant_value)
            if(productIndex === -1){
                state.cart = [...state.cart, action.payload]
                state.total += action.payload.selectedVariant.variant_sale_price
            }
            else{
                state.cart[productIndex].count += 1
                state.total += action.payload.selectedVariant.variant_sale_price
            }
        },
        removeFromCart : (state, action: PayloadAction<ProductType>)=>{
            const productIndex = state.cart.findIndex((product)=> product._id === action.payload._id && product.selectedVariant.variant_value === action.payload.selectedVariant.variant_value)
            if(productIndex !== -1){
                state.cart.splice(productIndex, 1)
                state.total -= action.payload.selectedVariant.variant_sale_price
            }
            console.log(state);
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer