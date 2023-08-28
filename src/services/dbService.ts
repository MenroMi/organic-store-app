import SupabaseClientService from '.';

export interface IUserOnDB {
  id: string;
  username?: string;
  name: string;
  email: string;
  avatar: string | null;
  bg_image: string | null;
  birthday?: string;
}

class DbService extends SupabaseClientService {
  constructor() {
    super();
  }

  async onRepeatFileInStorage(bucket: string, subfolder: string, file: File) {
    try {
      const isRepeat: any[] = (
        await this.supabase.storage.from(bucket).list(subfolder)
      ).data.filter(item => item.name === file.name);

      if (isRepeat.length > 0) {
        return {data: {isRepeat: true, repeatFiles: isRepeat}, error: null};
      }

      return {data: {isRepeat: false, repeatFiles: isRepeat}, error: null};
    } catch (error) {
      return {
        data: null,
        error: {
          name: error?.name,
          message: error?.message,
        },
      };
    }
  }

  async onRemoveFileInStorage(bucket: string, path: string) {
    try {
      await this.supabase.storage.from(bucket).remove([path]);
    } catch (error) {
      return {
        name: error?.name,
        message: error?.message,
      };
    }
  }

  async onUploadFileToStorage(bucket: string, path: string, file: File) {
    try {
      const {data, error} = await this.supabase.storage
        .from(bucket)
        .upload(path, file);

      if (data.path) {
        return {data, error: null};
      }

      return {data: null, error};
    } catch (error) {
      return {
        data: null,
        error: {
          name: error?.name,
          message: error?.message,
        },
      };
    }
  }

  async onUpdateDataInTable(
    table: string,
    field: string,
    value: string | null,
    id: string,
  ) {
    try {
      await this.supabase
        .from(table)
        .update({[field]: value})
        .eq('id', id);
    } catch (error) {
      return {
        name: error?.name,
        message: error?.message,
      };
    }
  }

  async onSelectUserFromDB(id: string) {
    const {data: users, error} = await this.supabase
      .from('users')
      .select()
      .eq('id', id);

    const [user] = users as IUserOnDB[];

    if (users && users.length > 0 && user) {
      return {data: user, error: null};
    } else {
      return {data: null, error};
    }
  }

  // deprecated
  async onInsertUserToDB(id: string, name: string, email: string) {
    return await this.supabase.from('users').insert({id, name, email});
  }
}

const dbService = new DbService();
export default dbService;
