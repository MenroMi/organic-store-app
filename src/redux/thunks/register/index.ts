import supabase from '@/configs/supabaseConfig';
import {createAsyncThunk} from '@reduxjs/toolkit';

interface IRegistrationData {
  name: string;
  email: string;
  password: string;
}

const onRegisterThunk = createAsyncThunk(
  'registration/registerNewUser',
  async ({name, email, password}: IRegistrationData) => {
    const {data: userForm, error} = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
        data: {
          full_name: name,
        },
      },
    });

    if (userForm?.user && userForm?.user?.identities.length > 0) {
      await supabase.from('users').insert({id: userForm.user.id, name, email});
      return {
        success: true,
        response: 'Great! Now check your email for further work with account.',
      };
    }

    if (userForm && !error && userForm?.user?.identities.length === 0) {
      return {
        success: false,
        response:
          'Oh no. This email already exists. Please log in or rember your password.',
      };
    }

    if (error) {
      console.log('Error: ', error.message);
      return {
        success: false,
        response: 'Error',
      };
    }
  },
);

export default onRegisterThunk;
