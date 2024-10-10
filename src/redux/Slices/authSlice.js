import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
  errorMessage: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.body.token;
      state.errorMessage = ""; 
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.errorMessage = "";
    },
    setError(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const { login, logout, setError } = authSlice.actions;
export default authSlice.reducer;
