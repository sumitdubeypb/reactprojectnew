import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice'
import listofactions from './actionlist';

export const mydatastore = configureStore({
  reducer: {
    // counter: counterReducer,
    counter: listofactions,
  },
});