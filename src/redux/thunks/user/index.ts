import {createAsyncThunk} from '@reduxjs/toolkit';
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

const onUpdateAvatarUserThunk = createAsyncThunk(
  'updateAvatar',
  async (file: FileList) => {
    try {
    } catch (error) {}
  },
);

export default onUpdateAvatarUserThunk;
