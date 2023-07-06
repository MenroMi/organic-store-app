import { createSlice } from "@reduxjs/toolkit";
import { initUpdatePassStates } from "../initialStates";
import { onUpdatePasswordThunk } from "../thunks";

const updatePassSlice = createSlice({
  name: "updatePassword",
  initialState: initUpdatePassStates,
  reducers: {
    setEmail: (state, action) => {
      return {
        ...state,
        email: action.payload,
      };
    },
    setNewPassword: (state, action) => {
      return {
        ...state,
        newPassword: action.payload,
      };
    },
    setRepeatPassword: (state, action) => {
      const { value, error, name, msg } = action.payload;

      return {
        ...state,
        repeatPassword: value,
        isError: error,
        error: {
          name,
          msg,
        },
      };
    },
    setPassError: (state, action) => {
      return {
        ...state,
        errorPass: action.payload,
      };
    },
    setLoading: (state, action) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(onUpdatePasswordThunk.pending, (state) => ({
      ...state,
      isLoading: true,
    }));

    // FULFILLED

    builder.addCase(onUpdatePasswordThunk.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          error: {
            name: "Error",
            msg: action.payload,
          },
          isError: true,
          isLoading: false,
        };
      }

      return {
        ...state,
        error: {
          name: "",
          msg: "",
        },
        isError: false,
        isLoading: false,
      };
    });
  },
});

const { actions, reducer } = updatePassSlice;
export default reducer;
export const {
  setNewPassword,
  setRepeatPassword,
  setPassError,
  setEmail,
  setLoading,
} = actions;
