import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart, fetchItemsByUserId, updateCart } from "./cartAPI";

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

export const fetchItemsByUserIdAsync = createAsyncThunk(
	"cart/fetchItemsByUserId",
	async (userId) => {
		const response = await fetchItemsByUserId(userId);
		return response.data;
	}
);

export const updateCartAsync = createAsyncThunk(
	"cart/addToCart",
	async (update) => {
		const response = await updateCart(update);
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
			})
			.addCase(fetchItemsByUserIdAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.items = action.payload;
			})
			.addCase(updateCartAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(updateCartAsync.fulfilled, (state, action) => {
				const index = state.items.findIndex(
					(item) => item.id === action.payload
				);
				state.items[index] = action.payload;
			});
	},
});

export const { increment } = counterSlice.actions;

export const selectItems = (state) => state.cart.items;

export default counterSlice.reducer;
