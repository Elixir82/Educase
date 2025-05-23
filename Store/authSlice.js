import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  userData: null
}

let authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload;
    },
    signup: (state, action) => {
      state.userData = action.payload;
    }
  }
})
export const { login, signup } = authSlice.actions;
export default authSlice.reducer