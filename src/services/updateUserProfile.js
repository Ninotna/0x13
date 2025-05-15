import { updateUserProfileRequest } from "../services/authService";

export const updateUserProfile = createAsyncThunk(
	"auth/updateUserProfile",
	async ({ firstName, lastName }, { getState, rejectWithValue }) => {
		try {
			const token = getState().auth.token;
			return await updateUserProfileRequest(token, firstName, lastName);
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
