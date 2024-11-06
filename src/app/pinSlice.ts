import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PinState {
  value: string;
  status: 'granted' | 'denied' | null;
}

const initialState = {
  value: "",
  status: null,
}

export const pinSlice = createSlice({
  name: "pin",
  initialState,
  reducers: {
    addDigit: (state: PinState, action: PayloadAction<string>) => {
      if (state.value.length < 4) {
        state.value += action.payload;
      }
    },
    removeDigit: (state: PinState) => {
      state.value = state.value.slice(0, - 1);
    },
    checkPin: (state: PinState) => {
      if (state.value === '3333') {
        state.status = 'granted';
      } else {
        state.status = 'denied';
      }
    }
  }
});
export const {actions} = pinSlice;
export default pinSlice.reducer;