import {createSlice} from "@reduxjs/toolkit";

const signInFormSlice = createSlice({
  name: "signInForm",
  initialState: {
    errors: {
      username: "",
      password: "",
    },
  },
  reducers: {
    signIn: (state, action) => {},
  },
});


export const { signIn } = signInFormSlice.actions;

export default signInFormSlice.reducer;