import SupabaseClientService from '.';

interface IUserOnDB {
  id: string;
  username?: string;
  name: string;
  email: string;
  avatar: string | null;
  birthday?: string;
}

class DbService extends SupabaseClientService {
  constructor() {
    super();
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
