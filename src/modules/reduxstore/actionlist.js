import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: 0,
    // name : "kumar"
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload
    },
    myadd :(state) =>{
        state.value=800;
    }
  },
  
 
  
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount ,myadd} = counterSlice.actions

export default counterSlice.reducer