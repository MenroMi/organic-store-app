// slice from redux-toolkit
import { createSlice } from "@reduxjs/toolkit";

// thunks
import {
  getAuthUserThunk,
  onLogOutThunk,
  onSignInThunk,
} from "@/redux/thunks/auth";

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
    setEmailError: (state, action) => ({
      ...state,
      errorEmail: action.payload,
    }),
    setPassError: (state, action) => ({
      ...state,
      errorPass: action.payload,
    }),
  },
  extraReducers: (builder) => {
    // PENDING
    builder.addCase(onSignInThunk.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(getAuthUserThunk.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(onLogOutThunk.pending, (state) => {
      return { ...state, isLoading: true };
    });

    // FULFILLED
    builder.addCase(onSignInThunk.fulfilled, (state, action) => {
      if (action.payload?.id) {
        const { id, role, user_metadata } = action.payload;

        return {
          ...state,
          user: {
            id,
            role,
            user_metadata,
          },
          isError: false,
          error: { name: "", msg: "" },
          isLoading: false,
          isLogin: true,
        };
      }

      const { name, message } = action.payload;
      return {
        ...state,
        isError: true,
        isLoading: false,
        error: { name, msg: message },
        isLogin: false,
      };
    });

    builder.addCase(getAuthUserThunk.fulfilled, (state, action) => {
      if (action.payload?.id) {
        return {
          ...state,
          user: action.payload,
          isLogin: true,
          isLoading: false,
          error: { msg: "", name: "" },
        };
      }

      return {
        ...state,
        user: action.payload,
        isLogin: false,
        isLoading: false,
        error: { msg: "", name: "" },
      };
    });

    builder.addCase(onLogOutThunk.fulfilled, (state, action) => {
      if (action.payload && action?.payload?.name) {
        return state;
      }

      return {
        ...state,
        user: null,
        isError: false,
        isLogin: false,
        isLoading: false,
        error: { msg: "", name: "" },
      };
    });

    // REJECTED
    builder.addCase(onSignInThunk.rejected, (state, action) => {
      return {
        ...state,
      };
    });
  },
});

const { actions, reducer } = authSlice;

export default reducer;
export const {
  setOpenLoginForm,
  setEmail,
  setPassword,
  setEmailError,
  setPassError,
} = actions;
