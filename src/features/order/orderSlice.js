import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./orderAPI";

const initialState = {
	status: "idle",
	orders: [],
	currentOrder: null,
};

export const createOrderAsync = createAsyncThunk(
	"cart/createOrder",
	async (order) => {
		const response = await createOrder(order);
		return response.data;
	}
);

export const counterSlice = createSlice({
	name: "order",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createOrderAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(createOrderAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.orders.push(action.payload);
				state.currentOrder = action.payload;
			});
	},
});

// export const { increment } = counterSlice.actions;

export const selectCurrentOrder = (state) => state.order.currentOrder;

export default counterSlice.reducer;
