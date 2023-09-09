import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart } from "./cartAPI";

const initialState = {
	status: "idle",
	items: [],
	cartLoaded: false,
};

export const addToCartAsync = createAsyncThunk(
	"cart/addToCart",
	async (item) => {
		const response = await addToCart(item);
		return response.data;
	}
);

export const counterSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addToCartAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(addToCartAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.items.push(action.payload);
			});
	},
});

export const { increment } = counterSlice.actions;

export const selectItems = (state) => state.cart.value;

export default counterSlice.reducer;
