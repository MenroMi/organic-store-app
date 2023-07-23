import {createAsyncThunk} from '@reduxjs/toolkit';
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs';
interface ILogInData {
  email: string;
  password: string;
}

interface IUserOnDB {
  id: string;
  username?: string;
  name: string;
  email: string;
  avatar: string | null;
  birthday?: string;
}

const supabase = createClientComponentClient();

const onSignInThunk = createAsyncThunk(
  'auth/login',
  async ({email, password}: ILogInData) => {
    try {
      const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error && error?.message) {
        const {name, message, status} = error;
        return {
          name,
          message,
          status,
        };
      }

      const {
        session: {access_token},
        user: {role, id, user_metadata},
      } = data;

      const {full_name, avatar} = user_metadata;

      if (access_token) {
        localStorage.setItem('access_token', access_token);
      }

      return {
        role,
        id,
        user_metadata: {
          full_name,
          avatar,
        },
        accessToken: access_token,
      };
    } catch (error) {
      console.log(error);
      return {
        name: error?.name,
        message: error?.message,
      };
    }
  },
);

const onSignInGoogleThunk = createAsyncThunk('auth/loginGoogle', async () => {
  try {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });

    return null;
  } catch (error) {
    return error;
  }
});

const onSignInFacebookThunk = createAsyncThunk(
  'auth/loginFacebook',
  async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'facebook',
      });

      return null;
    } catch (error) {
      return error;
    }
  },
);

const onSignInGitHubThunk = createAsyncThunk('auth/loginGithub', async () => {
  try {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
    });

    return null;
  } catch (error) {
    return error;
  }
});

const getAuthUserThunk = createAsyncThunk('auth/relogin', async () => {
  try {
    const {
      data: {session},
    } = await supabase.auth.getSession();
    const {access_token, refresh_token} = session;
    const localStorageToken = localStorage.getItem('access_token');

    if (
      access_token &&
      localStorageToken &&
      access_token !== localStorageToken
    ) {
      const {data: refresh} = await supabase.auth.refreshSession({
        refresh_token,
      });
      localStorage.setItem('access_token', refresh.session?.access_token);
    }

    const {data: users} = await supabase
      .from('users')
      .select()
      .eq('id', session.user.id);

    const [user] = users as IUserOnDB[];

    if (users && users.length > 0 && user) {
      const {id, name, avatar} = user;

      return {
        role: session.user.role,
        id,
        user_metadata: {
          full_name: name,
          avatar,
        },
      };
    }

    return null;
  } catch (error) {
    return null;
  }
});

const onLogOutThunk = createAsyncThunk('auth/logout', async () => {
  try {
    await supabase.auth.signOut();

    if (localStorage.getItem('access_token')) {
      localStorage.removeItem('access_token');
    }

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
