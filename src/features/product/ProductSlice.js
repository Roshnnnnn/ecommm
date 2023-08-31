import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductByFilters } from "./ProductAPI";

const initialState = {
	products: [],
	brand: [],
	categories: [],
	status: "idle",
	totalItems: 0,
};

export const fetchAllProductsAsync = createAsyncThunk(
	"product/fetchAllProducts",
	async () => {
		const response = await fetchAllProducts();
		return response.data;
	}
);

export const fetchProductByFiltersAsync = createAsyncThunk(
	"product/fetchProductByFilters",
	async ({ filter, sort, pagination }) => {
		const response = await fetchProductByFilters(filter, sort, pagination);
		return response.data;
	}
);

export const ProductSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllProductsAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.products = action.payload;
			})
			.addCase(fetchProductByFiltersAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchProductByFiltersAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.products = action.payload.products;
				state.totalItems = action.payload.totalItems;
			});
	},
});

export const { increment } = ProductSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default ProductSlice.reducer;
