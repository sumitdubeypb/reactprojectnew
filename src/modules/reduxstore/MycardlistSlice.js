import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cardvalue : 0
    
}
export const cardAction = createSlice({
    name : 'card',
    initialState,
    reducers : {
        printcard : (state) => {
            state.cardvalue=400;
        }
    }

})

export const {printcard} = cardAction.actions
export default cardAction.reducer