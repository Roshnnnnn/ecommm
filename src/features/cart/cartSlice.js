import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./cartAPI";

const initialState = {
	value: 0,
	status: "idle",
};

export const addToCartAsync = createAsyncThunk(
	"counter/addToCart",
	async (amount) => {
		const response = await fetchCount(amount);
		return response.data;
	}
);

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(addToCartAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(addToCartAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.value = action.payload;
			});
	},
});

export const { increment } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
