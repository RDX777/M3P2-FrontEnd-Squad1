import { createSlice } from '@reduxjs/toolkit';
import { PlaceMenu } from '../../interfaces/local.interface';

const initialState: PlaceMenu = {
  places_id: JSON.parse(window.localStorage.getItem('place'))?.places_id || '',
  places_name: JSON.parse(window.localStorage.getItem('place'))?.places_name || '',
  places_latitude: JSON.parse(window.localStorage.getItem('place'))?.places_latitude || 0,
  places_longitude: JSON.parse(window.localStorage.getItem('place'))?.places_longitude || 0,
  num_devices: JSON.parse(window.localStorage.getItem('place'))?.num_devices || 0,
};

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    setSelectedPlace: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setSelectedPlace } = placeSlice.actions;

export default placeSlice.reducer;
