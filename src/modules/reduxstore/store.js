import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice'
import listofactions from './actionlist';
import cardlist from "./MycardlistSlice";

export const mydatastore = configureStore({
  reducer: {
    // counter: counterReducer,
    counter: listofactions,
    card : cardlist
  },
});