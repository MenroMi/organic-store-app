// slice from redux-toolkit
import { createSlice } from "@reduxjs/toolkit";

// initial state
import { initAuthStates } from "@/redux/initialStates";

const authSlice = createSlice({
  name: "auth",
  initialState: initAuthStates,
  reducers: {
    setEmail: (state, action) => {
      return {
        ...state,
        email: action?.payload ?? "",
      };
    },
    setPassword: (state, action) => {
      return {
        ...state,
        password: action?.payload ?? "",
      };
    },
    setOpenLoginForm: (state) => {
      return { ...state, isOpenLoginForm: !state.isOpenLoginForm };
    },
    setLogIn: (state) => {
      return { ...state, isLogin: !state.isLogin };
    },
  },
});

const { actions, reducer } = authSlice;

export default reducer;
export const { setLogIn, setOpenLoginForm, setEmail, setPassword } = actions;
