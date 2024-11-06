import { configureStore } from '@reduxjs/toolkit';
import pinReducer from './pinSlice.ts';
export const store = configureStore({
  reducer: {
    pin: pinReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;