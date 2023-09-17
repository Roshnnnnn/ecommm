import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	fetchLoggedInUserOrders,
	updateUser,
	// fetchLoggedInUser,
} from "./userAPI";

const initialState = {
	userInfo: null,
	userOrders: [],
	status: "idle",
};

// export const fetchLoggedInUserAsync = createAsyncThunk(
// 	"user/fetchLoggedInUser",
// 	async () => {
// 		const response = await fetchLoggedInUser();
// 		return response.data;
// 	}
// );

export const fetchLoggedInUserOrderAsync = createAsyncThunk(
	"user/fetchLoggedInUserOrders",
	async (id) => {
		const response = await fetchLoggedInUserOrders(id);
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
			// .addCase(fetchLoggedInUserAsync.pending, (state) => {
			// 	state.status = "loading";
			// })
			// .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
			// 	state.status = "idle";
			// 	state.userInfo = action.payload;
			// });
			.addCase(updateUserAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(updateUserAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.userInfo = action.payload;
			})
			.addCase(fetchLoggedInUserOrderAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchLoggedInUserOrderAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.userOrders.orders = action.payload;
			});
	},
});

export const selectUserOrders = (state) => state.user.userInfo.orders;
export const selectUserInfo = (state) => state.user.userInfo;
// export const selectUserInfoStatus = (state) => state.user.status;

export default userSlice.reducer;
