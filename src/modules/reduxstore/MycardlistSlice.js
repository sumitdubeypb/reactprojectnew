import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cardvalue : 0,
   cartvalue : []
}

export const cardAction = createSlice({
    name : 'card',
    initialState,
    reducers : {
        printcard : (state) => {
            state.cardvalue=30;
        },
        addTocart : (state,actions) => {
            state.cartvalue.push(actions.payload);
        },
        removeItem : (state, actions) => {
            state.cartvalue.splice(actions.payload, 1);
        }

    }

})

export const {printcard,addTocart,removeItem} = cardAction.actions
export default cardAction.reducer