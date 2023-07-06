import { createAsyncThunk } from "@reduxjs/toolkit";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
interface ILogInData {
  email: string;
  password: string;
}
const supabase = createClientComponentClient();

const onSignInThunk = createAsyncThunk(
  "auth/login",
  async ({ email, password }: ILogInData) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error && error?.message) {
        const { name, message, status } = error;
        return {
          name,
          message,
          status,
        };
      }

      const {
        role,
        id,
        user_metadata: { avatar_url, full_name },
      } = data?.user;

      return {
        role,
        id,
        user_metadata: {
          name: full_name,
          avatar: avatar_url,
        },
      };
    } catch (error) {
      console.log(error);
      return {
        name: error?.name,
        message: error?.message,
      };
    }
  }
);

const onSignInGoogleThunk = createAsyncThunk("auth/loginGoogle", async () => {
  try {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    return null;
  } catch (error) {
    return error;
  }
});

const onSignInFacebookThunk = createAsyncThunk(
  "auth/loginFacebook",
  async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: "facebook",
      });

      return null;
    } catch (error) {
      return error;
    }
  }
);

const onSignInGitHubThunk = createAsyncThunk("auth/loginGithub", async () => {
  try {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    return null;
  } catch (error) {
    return error;
  }
});

const getAuthUserThunk = createAsyncThunk("auth/relogin", async () => {
  try {
    const { data } = await supabase.auth.getUser();

    if (data && data?.user) {
      const { role, id, user_metadata } = data?.user;

      const { full_name, avatar_url } = user_metadata;

      return {
        role,
        id,
        user_metadata: {
          name: full_name,
          avatar: avatar_url,
        },
      };
    }

    return null;
  } catch (error) {
    alert("onUserFetch: " + error);
    return null;
  }
});

const onLogOutThunk = createAsyncThunk("auth/logout", async () => {
  try {
    await supabase.auth.signOut();
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
