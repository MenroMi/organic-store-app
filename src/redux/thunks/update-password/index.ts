import userService from '@/services/userService';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs';

const onUpdatePasswordThunk = createAsyncThunk(
  'updatePassword/newPassword',
  async (email: string) => {
    try {
      const error = await userService.resetPassword(email);

      if (error) {
        return error;
      }
    } catch (error) {
      console.log('Update password: ', error.message);
      return error.message;
    }
  },
);

export default onUpdatePasswordThunk;
