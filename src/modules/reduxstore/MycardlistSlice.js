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
            state.cardvalue=400;
        },
        addTocart : (state,actions) => {
            state.cartvalue.push(actions.payload);
        }
    }

})

export const {printcard,addTocart} = cardAction.actions
export default cardAction.reducer