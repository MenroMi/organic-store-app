import { createAsyncThunk } from "@reduxjs/toolkit";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

const onUpdatePasswordThunk = createAsyncThunk(
  "updatePassword/newPassword",
  async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "http://localhost:3000/auth/update-password",
      });

      if (error) {
        return error.message;
      }
    } catch (error) {
      return error.message;
    }
  }
);

export default onUpdatePasswordThunk;
