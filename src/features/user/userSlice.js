import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLoggedInUser } from "./userAPI";

const initialState = {
	userInfo: 0,
	orders: [],
	currentOrder: null,
};

export const fetchLoggedInUserAsync = createAsyncThunk(
	"user/fetchLoggedInUser",
	async (userId) => {
		const response = await fetchLoggedInUser(userId);
		return response.data;
	}
);

export const userSlice = createSlice({
	name: "order",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLoggedInUserAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.userInfo = action.payload;
			});
	},
});

// export const { resetOrder } = userSlice.actions;

export default userSlice.reducer;
