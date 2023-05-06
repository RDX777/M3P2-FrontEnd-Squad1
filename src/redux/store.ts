import { configureStore } from '@reduxjs/toolkit';
import selectedPlaceSlice from './place/slice';

export const store = configureStore({
  reducer: {
    selectedPlace: selectedPlaceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
