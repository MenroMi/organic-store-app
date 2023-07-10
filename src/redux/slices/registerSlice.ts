// slice from redux-toolkit
import { createSlice } from "@reduxjs/toolkit";

// initial state
import { initRegisterStates } from "../initialStates";
import { onRegisterThunk } from "../thunks";

const registerSlice = createSlice({
  name: "registration",
  initialState: initRegisterStates,
  reducers: {
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

export const { setResetResponse } = actions;
