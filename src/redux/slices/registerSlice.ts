// slice from redux-toolkit
import { createSlice } from "@reduxjs/toolkit";

// initial state
import { initRegisterStates } from "../initialStates";
import { onRegisterThunk } from "../thunks";

const registerSlice = createSlice({
  name: "registration",
  initialState: initRegisterStates,
  reducers: {
    setRegName: (state, action) => ({ ...state, name: action.payload }),
    setRegEmail: (state, action) => ({ ...state, email: action.payload }),
    setRegPass: (state, action) => ({ ...state, password: action.payload }),
    setRegNameError: (state, action) => ({
      ...state,
      errorName: action.payload,
    }),
    setRegEmailError: (state, action) => ({
      ...state,
      errorEmail: action.payload,
    }),
    setRegPassError: (state, action) => ({
      ...state,
      errorPass: action.payload,
    }),
    setResetResponse: (state) => ({
      ...state,
      response: { success: false, response: "" },
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(onRegisterThunk.fulfilled, (state, action) => {
      const { success, response } = action.payload;

      return {
        ...state,
        response: {
          success,
          response,
        },
      };
    });
  },
});

const { actions, reducer } = registerSlice;
export default reducer;

export const {
  setRegEmail,
  setRegName,
  setRegPass,
  setRegEmailError,
  setRegNameError,
  setRegPassError,
  setResetResponse,
} = actions;
