import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {
            items: [],
            totalPrice: 0,
            totalQuantity: 0
        }
    },
    reducers: {
        add: (state, action) => {
            const product = action.payload;
            if (state.value.items.length > 0) {
                const isPresent = state.value.items.filter((e) => e.product.id == product.id);
                if (isPresent.length !== 0) {
                    state.value.items = state.value.items.map((e) => {
                        if (product.id == e.product.id) {
                            return {
                                product,
                                quantity: e.quantity + 1
                            }
                        } else {
                            return e;
                        }
                    })
                }
                else {
                    state.value.items.push({
                        product,
                        quantity: 1
                    });
                }
            }
            else {
                state.value.items.push({
                    product,
                    quantity: 1
                });
            }
            state.value.totalPrice += product.sale_price !== null ? product.sale_price : product.price;
            state.value.totalQuantity += 1;
        },
        remove: (state, action) => {
            const product = action.payload;
            if (state.value.items.length > 0) {
                const isPresent = state.value.items.filter((e) => e.product.id == product.id);
                // ispresent= [{product:{}, quantity: number}]
                if (isPresent.length !== 0) {
                    state.value.totalPrice -= product.sale_price !== null ? product.sale_price : product.price;
                    state.value.totalQuantity -= 1;
                    if (isPresent[0].quantity > 1) {
                        state.value.items = state.value.items.map((e) => {
                            if (product.id == e.product.id) {
                                return {
                                    product: e.product,
                                    quantity: e.quantity - 1
                                }
                            }
                            else {
                                return 0;
                            }
                        })
                    }
                    else {
                        state.value.items = state.value.items.filter((e) => e.product.id !== product.id)
                    }
                }
            }
        }
    }
})

export const { add, remove } = cartSlice.actions;


