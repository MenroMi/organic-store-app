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

      return {
        role: data?.user?.role,
        id: data?.user?.id,
        user_metadata: data?.user?.user_metadata,
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

const getAuthUserThunk = createAsyncThunk("auth/relogin", async () => {
  try {
    const { data } = await supabase.auth.getUser();

    if (data && data?.user) {
      const { role, id, user_metadata } = data?.user;

      if (
        data?.user?.app_metadata?.providers &&
        Array.isArray(data?.user?.app_metadata?.providers) &&
        data?.user?.app_metadata?.providers.includes("google")
      ) {
        const { full_name, email_verified, avatar_url } = user_metadata;

        return {
          role,
          id,
          user_metadata: {
            name: full_name,
            avatar: avatar_url,
          },
        };
      } else if (
        data?.user?.app_metadata?.providers &&
        Array.isArray(data?.user?.app_metadata?.providers) &&
        data?.user?.app_metadata?.providers.includes("facebook")
      ) {
        const { full_name, email_verified, avatar_url } = user_metadata;

        return {
          role,
          id,
          user_metadata: {
            name: full_name,
            avatar: avatar_url,
          },
        };
      }
      return {
        role,
        id,
        user_metadata,
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
  getAuthUserThunk,
  onLogOutThunk,
};
