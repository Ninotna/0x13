import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest, getUserProfileRequest } from "../services/authService";

/**
 * Thunk – Connexion utilisateur (récupération du token)
 */
export const loginUser = createAsyncThunk(
	"auth/loginUser",
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const result = await loginRequest(email, password);
			return result; // { token }
		}
		catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

/**
 * Thunk – Récupération du profil utilisateur
 */
export const getUserProfile = createAsyncThunk(
	"auth/getUserProfile",
	async (_, { getState, rejectWithValue }) => {
		try {
			const token = getState().auth.token;
			const profile = await getUserProfileRequest(token);
			return profile; // { firstName, lastName, email }
		}
		catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

/**
 * État initial
 */
const initialState = {
	user: null,
	token: null,
	isAuthenticated: false,
	status: "idle",     // idle | loading | succeeded | failed
	error: null,
};

/**
 * Slice – Authentification
 */
const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: (state) => {
			state.user = null;
			state.token = null;
			state.isAuthenticated = false;
			state.status = "idle";
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			// LOGIN
			.addCase(loginUser.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.token = action.payload.token;
				state.isAuthenticated = true;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload;
			})

			// GET USER PROFILE
			.addCase(getUserProfile.fulfilled, (state, action) => {
				state.user = action.payload;
			})
			.addCase(getUserProfile.rejected, (state, action) => {
				state.error = action.payload;
			});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
