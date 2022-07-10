import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const SERVER_URL = "https://elad-test-1.s3.amazonaws.com";
export const ITEMS_ENDPOINT = "items.json";

export const fetchItems = createAsyncThunk(
  "counter/fetchItems",
  async (action, thunkAPI) => {
    const response = await fetch(SERVER_URL + "/" + ITEMS_ENDPOINT);
    const data = await response.json();
    return data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    items: [],
  },

  reducers: {
    increment: (state, action) => {
      const { amount } = action.payload;
      state.value += amount;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state,action) => {
        state.items = action.payload;
    })
  }
});

export const { increment, decrement, loadItems } = counterSlice.actions;

export default counterSlice.reducer;
