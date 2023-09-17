import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, checkUser, fetchLoggedInUser } from "./authAPI";
import { updateUser } from "../user/userAPI";

const initialState = {
	loggedInUser: null,
	status: "idle",
	error: null,
};

export const createUserAsync = createAsyncThunk(
	"user/createUser",
	async (userData) => {
		const response = await createUser(userData);
		return response.data;
	}
);

export const checkUserAsync = createAsyncThunk(
	"user/checkUser",
	async (loginInfo) => {
		const response = await checkUser(loginInfo);
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

export const fetchLoggedInUserAsync = createAsyncThunk(
	"user/fetchLoggedInUser",
	async () => {
		const response = await fetchLoggedInUser();
		return response.data;
	}
);

export const authSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createUserAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(createUserAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.loggedInUser = action.payload;
			})
			.addCase(checkUserAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(checkUserAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.loggedInUser = action.payload;
			})
			.addCase(checkUserAsync.rejected, (state, action) => {
				state.status = "idle";
				state.error = action.error;
			})
			.addCase(updateUserAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(updateUserAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.loggedInUser = action.payload;
			})
			.addCase(fetchLoggedInUserAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.userInfo = action.payload;
			});
	},
});

export const selectLoggedInUser = (state) => state.auth.loggedInUser;

export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
