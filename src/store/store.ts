import { configureStore } from "@reduxjs/toolkit";

import signInFormSlice from "@/src/features/SignInForm/signInFormSlice";

export const store = configureStore({
  reducer: {
    signInForm: signInFormSlice,
  },
});


