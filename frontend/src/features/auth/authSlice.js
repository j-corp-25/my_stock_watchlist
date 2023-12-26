import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

export const { reset } = authSlice.actions
export default authSlice.reducer
