import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number;
};

const appSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 } as CounterState,
  reducers: {
    // We can mutate state directly because immer.js is used by default
    // when creating reducers via redux-toolkit.
    increment(state) {
      state.value++;
    },
    incrementBy(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
})

export const { increment, incrementBy } = appSlice.actions;
export const counterReducer = appSlice.reducer;