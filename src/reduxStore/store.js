

import {  configureStore } from '@reduxjs/toolkit';
import jobsReducer from './jobsReducer';

const store = configureStore({
    reducer: jobsReducer
  });


export default store;
