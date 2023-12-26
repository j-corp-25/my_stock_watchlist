import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  // if theere is  a user in local storage then use it
  user: null ? user : null,
  isError: false,
  isSucess: false,
  isLoading: false,
  message: "",
};

// register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        return thunkAPI.rejectWithValue(message)
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  // these reducers wont be async
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSucess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: () => {},
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
