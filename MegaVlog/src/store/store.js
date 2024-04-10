import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
// Import other reducers here if needed

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here
  },
});

export default store;
