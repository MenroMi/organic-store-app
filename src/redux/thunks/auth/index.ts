import dbService from '@/services/dbService';
import sessionService from '@/services/sessionService';
import userService from '@/services/userService';
import {createAsyncThunk} from '@reduxjs/toolkit';

interface ILogInData {
  email: string;
  password: string;
}

const onSignInThunk = createAsyncThunk(
  'auth/login',
  async ({email, password}: ILogInData) => {
    try {
      const {data, error} = await userService.signIn(email, password);

      if (data) {
        return data;
      } else {
        throw new Error(JSON.stringify(error));
      }
    } catch (error) {
      if (typeof error === 'string') {
        const serverError = JSON.parse(error);

        return {
          name: serverError?.name,
          message: serverError?.message,
        };
      }

      return {
        name: error?.name,
        message: error?.message,
      };
    }
  },
);

const onSignInGoogleThunk = createAsyncThunk('auth/loginGoogle', async () => {
  try {
    await userService.signInGoogle();
    return null;
  } catch (error) {
    console.log(error);
    return error;
  }
});

const onSignInFacebookThunk = createAsyncThunk(
  'auth/loginFacebook',
  async () => {
    try {
      await userService.signInGithub();
      return null;
    } catch (error) {
      return error;
    }
  },
);

const onSignInGitHubThunk = createAsyncThunk('auth/loginGithub', async () => {
  try {
    await userService.signInFacebook();
    return null;
  } catch (error) {
    return error;
  }
});

const getAuthUserThunk = createAsyncThunk('auth/relogin', async () => {
  try {
    let session = await sessionService.getActualSession();
    const {access_token, refresh_token} = session;
    const localStorageToken = localStorage.getItem('access_token');

    console.log(session);
    if (
      access_token &&
      localStorageToken &&
      access_token !== localStorageToken
    ) {
      session = await sessionService.refreshActualSession(refresh_token);
      localStorage.setItem('access_token', session?.access_token);
    }

    // for correct authentication we check our user in DB
    const {data: user, error} = await dbService.onSelectUserFromDB(
      session.user.id,
    );

    if (user) {
      const {id, name, avatar, email} = user;
      return {
        role: session.user.role,
        id,
        user_metadata: {
          email,
          full_name: name,
          avatar,
        },
      };
    } else {
      console.log(error);
    }

    return null;
  } catch (error) {
    return null;
  }
});

const onLogOutThunk = createAsyncThunk('auth/logout', async () => {
  try {
    await userService.signOut();
    return null;
  } catch (error) {
    error = error as Error;
    return {
      name: error?.name,
      msg: error?.message,
    };
  }
});

export {
  onSignInThunk,
  onSignInGoogleThunk,
  onSignInFacebookThunk,
  onSignInGitHubThunk,
  getAuthUserThunk,
  onLogOutThunk,
};
