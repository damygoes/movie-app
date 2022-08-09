import { createSlice } from "@reduxjs/toolkit";

const user = {
	isLoggedIn: false,
	data: {},
};

const userDetails = createSlice({
	name: "userDetails",
	initialState: user,
	reducers: {
		getUserData(state, action) {
			return state.user.data;
		},
		setUserData(state, action) {
			state.isLoggedIn = action.payload.isLoggedIn;
			state.data = action.payload.data;
		},
		getUserLoggedIn(state) {
			return state.user.isLoggedIn;
		},
		setUserLoggedIn(state, action) {
			state.user.isLoggedIn = action.payload;
		},
	},
});

export const { getUserData, setUserData, getUserLoggedIn, setUserLoggedIn } =
	userDetails.actions;

export default userDetails.reducer;
