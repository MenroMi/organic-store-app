import {ResponseMsgs} from '@/constants';
import dbService from '@/services/dbService';
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
      await dbService.onInsertUserToDB(user?.id, name, email);
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
      console.log('Error: ', error.message);
      return {
        success: false,
        response: error?.message,
      };
    }
  },
);

export default onRegisterThunk;
