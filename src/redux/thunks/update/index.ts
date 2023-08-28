import dbService from '@/services/dbService';
import userService from '@/services/userService';
import {IUser} from '@/types/reduxTypes';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

const onUpdatePasswordThunk = createAsyncThunk(
  'user/resetPassword',
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

const onUpdateAvatarUserThunk = createAsyncThunk(
  'user/updateAvatar',
  async (inputData: {file: File; user: IUser}) => {
    try {
      const {data: images, error} = await supabase.storage
        .from('images')
        .list('users');

      const repeatImages = images.filter(
        img => img.name === inputData.file.name,
      );
      const isRepeatImage: boolean = repeatImages.length > 0;

      if (isRepeatImage) {
        const avatar = supabase.storage
          .from('images')
          .getPublicUrl(`users/${repeatImages[0].name}`).data.publicUrl;

        await dbService.onUpdateDataInTable(
          'users',
          'avatar',
          avatar,
          inputData.user.id,
        );

        return {
          user: inputData.user,
          avatar,
        };
      }

      const uploadResponse: {
        data: {path: string};
        error: {name: string; message: string};
      } = await dbService.onUploadFileToStorage(
        'images',
        `users/${inputData.file.name}`,
        inputData.file,
      );

      const {data, error: uploadError} = uploadResponse;

      if (uploadError?.name) {
        throw new Error(`${uploadError?.name} - ${uploadError?.message}`);
      }

      const avatar = supabase.storage.from('images').getPublicUrl(data.path)
        .data.publicUrl;
      await dbService.onUpdateDataInTable(
        'users',
        'avatar',
        avatar,
        inputData.user.id,
      );
      return {
        user: inputData.user,
        avatar,
      };
    } catch (error) {
      return {
        name: error?.name,
        message: error?.message,
      };
    }
  },
);

const onUpdateBGImageUserThunk = createAsyncThunk(
  'user/updateBGImage',
  async (inputData: {file: File; user: IUser}) => {
    try {
      const {data: images, error} = await supabase.storage
        .from('images')
        .list('bgs');

      const repeatImages = images.filter(
        img => img.name === inputData.file.name,
      );
      const isRepeatImage: boolean = repeatImages.length > 0;

      if (isRepeatImage) {
        const bgImage = supabase.storage
          .from('images')
          .getPublicUrl(`bgs/${repeatImages[0].name}`).data.publicUrl;

        await dbService.onUpdateDataInTable(
          'users',
          'bg_image',
          bgImage,
          inputData.user.id,
        );

        return {
          user: inputData.user,
          bgImage,
        };
      }

      const uploadResponse: {
        data: {path: string};
        error: {name: string; message: string};
      } = await dbService.onUploadFileToStorage(
        'images',
        `bgs/${inputData.file.name}`,
        inputData.file,
      );

      const {data, error: uploadError} = uploadResponse;

      if (uploadError?.name) {
        throw new Error(`${uploadError?.name} - ${uploadError?.message}`);
      }

      const bgImage = supabase.storage.from('images').getPublicUrl(data.path)
        .data.publicUrl;
      await dbService.onUpdateDataInTable(
        'users',
        'bg_image',
        bgImage,
        inputData.user.id,
      );
      return {
        user: inputData.user,
        bgImage,
      };
    } catch (error) {
      return {
        name: error?.name,
        message: error?.message,
      };
    }
  },
);

export {
  onUpdatePasswordThunk,
  onUpdateAvatarUserThunk,
  onUpdateBGImageUserThunk,
};
