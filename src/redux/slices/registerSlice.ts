// slice from redux-toolkit
import { createSlice } from "@reduxjs/toolkit";

// initial state
import { initRegisterStates } from "../initialStates";

const registerSlice = createSlice({
  name: "registration",
  initialState: initRegisterStates,
  reducers: {
    setRegName: (state, action) => ({ ...state, name: action.payload }),
    setRegEmail: (state, action) => ({ ...state, email: action.payload }),
    setRegPass: (state, action) => ({ ...state, password: action.payload }),
  },
});

const { actions, reducer } = registerSlice;
export default reducer;

export const { setRegEmail, setRegName, setRegPass } = actions;
