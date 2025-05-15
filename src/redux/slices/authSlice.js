import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	token: null,
	isAuthenticated: false,
	error: null,
	loading: false
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginStart(state)
		{
			state.loading = true;
			state.error = null;
		},
		loginSuccess(state, action)
		{
			state.token = action.payload.token;
			state.isAuthenticated = true;
			state.loading = false;
			state.error = null;
		},
		loginFailure(state, action)
		{
			state.loading = false;
			state.error = action.payload;
		},
		profileLoaded(state, action)
		{
			state.user = action.payload;
		},
		logout(state)
		{
			state.user = null;
			state.token = null;
			state.isAuthenticated = false;
			state.error = null;
			state.loading = false;
		}
	}
});

export const {
	loginStart,
	loginSuccess,
	loginFailure,
	profileLoaded,
	logout
} = authSlice.actions;

export default authSlice.reducer;
