// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice'; // we'll create this next

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Types for dispatch and state (for use in components)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
