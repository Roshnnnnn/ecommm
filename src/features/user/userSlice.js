import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchLoggedInUserOrder, updateUser, fetchLoggedIn } from "./userAPI";

const initialState = {
	userOrders: [],
	status: "idle",
	userInfo: null,
};

export const fetchLoggedInUserOrderAsync = createAsyncThunk(
	"user/fetchLoggedInUser",
	async (id) => {
		const response = await fetchLoggedInUserOrder(id);
		return response.data;
	}
);

export const fetchLoggedInAsync = createAsyncThunk(
	"user/fetchLoggedIn",
	async (id) => {
		const response = await fetchLoggedIn(id);
		return response.data;
	}
);

export const updateUserAsync = createAsyncThunk(
	"user/updateUser",
	async (update) => {
		const response = await updateUser(update);
		return response.data;
	}
);

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchLoggedInUserOrderAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchLoggedInUserOrderAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.userInfo.orders = action.payload;
			})
			.addCase(updateUserAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(updateUserAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.userInfo = action.payload;
			})
			.addCase(fetchLoggedInAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchLoggedInAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.userInfo = action.payload;
			});
	},
});

export const selectUserOrders = (state) => state.user.userInfo.orders;
export const selectUserInfo = (state) => state.user.userInfo;
// export const selectUserInfoStatus = (state) => state.user.status;

export default userSlice.reducer;
