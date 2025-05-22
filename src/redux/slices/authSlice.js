import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginRequest,
  getUserProfileRequest,
  updateUserProfileRequest
} from '../services/authService';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      return await loginRequest(email, password);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  'auth/getUserProfile',
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      return await getUserProfileRequest(token);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile',
  async ({ firstName, lastName }, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;
      return await updateUserProfileRequest(token, firstName, lastName);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    status: 'idle',
    error: null
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.status = 'idle';
      state.error = null;
      // localStorage.removeItem('token');
      // localStorage.removeItem('user');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.status = 'succeeded';
        // localStorage.setItem('token', action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        // localStorage.setItem('user', JSON.stringify(action.payload));
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.user.firstName = action.payload.firstName;
        state.user.lastName = action.payload.lastName;
        // localStorage.setItem('user', JSON.stringify(state.user));
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
