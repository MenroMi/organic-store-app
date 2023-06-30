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

const getAuthUserThunk = createAsyncThunk("auth/relogin", async () => {
  try {
    const { data } = await supabase.auth.getUser();

    if (data && data?.user) {
      return {
        role: data?.user?.role,
        id: data?.user?.id,
        user_metadata: data?.user?.user_metadata,
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

export { onSignInThunk, getAuthUserThunk, onLogOutThunk };
