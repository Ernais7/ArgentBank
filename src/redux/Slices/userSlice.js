import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userName: "",
    firstName: "",
    lastName: "",
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.token = action.payload.token;
    },
    clearUser: (state) => {
      state.userName = "";
      state.firstName = "";
      state.lastName = "";
      state.token = null;
    },
    updateName: (state, action) => {
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { setUser, clearUser, updateName } = userSlice.actions;
export default userSlice.reducer;
