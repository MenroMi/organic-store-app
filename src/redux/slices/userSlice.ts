import {createSlice} from '@reduxjs/toolkit';
import {initUserStates} from '@/redux/initialStates';
import {
  onRegisterThunk,
  onSignInThunk,
  onUpdateAvatarUserThunk,
  onUpdatePasswordThunk,
  getAuthUserThunk,
  onLogOutThunk,
  onSignInFacebookThunk,
  onSignInGitHubThunk,
  onSignInGoogleThunk,
} from '@/redux/thunks';

const userSlice = createSlice({
  name: 'user',
  initialState: initUserStates,
  reducers: {
    setOpenLoginForm: state => {
      return {...state, isOpenLoginForm: !state.isOpenLoginForm};
    },
    setResetResponse: state => ({
      ...state,
      response: {success: false, response: ''},
    }),
    setRepeatPassword: (state, action) => {
      const {value, error, name, msg} = action.payload;

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
    setLoading: (state, action) => {
      return {
        ...state,
        isLoading: action.payload,
      };
    },
  },
  extraReducers: builder => {
    // PENDING

    // // AUTH
    builder.addCase(onSignInThunk.pending, state => {
      return {...state, isLoading: true};
    });
    builder.addCase(onSignInGoogleThunk.pending, state => {
      return {...state, isLoading: true};
    });
    builder.addCase(onSignInFacebookThunk.pending, state => {
      return {...state, isLoading: true};
    });

    builder.addCase(onSignInGitHubThunk.pending, state => {
      return {...state, isLoading: true};
    });
    builder.addCase(getAuthUserThunk.pending, state => {
      return {...state, isLoading: true};
    });
    builder.addCase(onLogOutThunk.pending, state => {
      return {...state, isLoading: true};
    });

    // // RESET PASSWORD

    builder.addCase(onUpdatePasswordThunk.pending, state => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(onUpdateAvatarUserThunk.pending, state => ({
      ...state,
      isLoading: true,
    }));

    // FULFILLED

    // // AUTH

    builder.addCase(onSignInThunk.fulfilled, (state, action) => {
      if (action.payload?.id) {
        const {id, role, user_metadata} = action.payload;

        return {
          ...state,
          user: {
            id,
            role,
            user_metadata,
          },
          isLogin: true,
          isError: false,
          error: {name: '', msg: '', status: ''},
          isLoading: false,
        };
      }

      const {name, message} = action.payload;
      return {
        ...state,
        user: null,
        isLogin: false,
        isError: true,
        error: {name, msg: message},
        isLoading: false,
      };
    });

    builder.addCase(getAuthUserThunk.fulfilled, (state, action) => {
      if (action.payload?.id) {
        const {id, role, user_metadata} = action.payload;

        return {
          ...state,
          user: {
            id,
            role,
            user_metadata,
          },
          isLogin: true,
          isLoading: false,
        };
      }

      return {
        ...state,
        user: null,
        isLogin: false,
        isLoading: false,
        error: {msg: '', name: ''},
      };
    });

    builder.addCase(onLogOutThunk.fulfilled, (state, action) => {
      if (action.payload && action?.payload?.name) {
        return state;
      }

      return {
        ...state,
        user: null,
        isLogin: false,
        isError: false,
        isLoading: false,
        error: {msg: '', name: ''},
      };
    });

    builder.addCase(onRegisterThunk.fulfilled, (state, action) => {
      const {success, response} = action.payload;

      return {
        ...state,
        response: {
          success,
          response,
        },
      };
    });

    // //  RESET PASSWORD

    builder.addCase(onUpdatePasswordThunk.fulfilled, (state, action) => {
      if (action.payload) {
        return {
          ...state,
          error: {
            name: 'Error',
            msg: action.payload,
          },
          isError: true,
          isLoading: false,
        };
      }

      return {
        ...state,
        error: {
          name: '',
          msg: '',
        },
        isError: false,
        isLoading: false,
      };
    });

    builder.addCase(onUpdateAvatarUserThunk.fulfilled, (state, action) => {
      if (action.payload?.name) {
        const {name, message: msg} = action.payload;

        return {
          ...state,
          isLoading: false,
          isError: true,
          error: {
            name,
            msg,
          },
        };
      }

      return {
        ...state,
        isLoading: false,
        isError: false,
        error: {name: '', msg: ''},
        user: {...action.payload.user, avatar: action.payload.avatar},
      };
    });

    // onUpdateUserData
  },
});

const {actions, reducer} = userSlice;
export default reducer;
export const {
  setLoading,
  setOpenLoginForm,
  setRepeatPassword,
  setResetResponse,
} = actions;
