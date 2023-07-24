import {ResponseMsgs} from '@/constants';
import userService from '@/services/userService';
import {createAsyncThunk} from '@reduxjs/toolkit';

interface IRegistrationData {
  name: string;
  email: string;
  password: string;
}

const onRegisterThunk = createAsyncThunk(
  'registration/registerNewUser',
  async ({name, email, password}: IRegistrationData) => {
    const {data: user, error} = await userService.signUp(name, email, password);

    if (user && user?.identities.length > 0) {
      return {
        success: true,
        response: ResponseMsgs.acceptRegistration,
      };
    }

    if (user && !error && user?.user?.identities.length === 0) {
      return {
        success: false,
        response: ResponseMsgs.rejectRegistration,
      };
    }

    if (error) {
      return {
        success: false,
        response: `Error: ${error?.status}. ${error?.message}`,
      };
    }
  },
);

export default onRegisterThunk;
