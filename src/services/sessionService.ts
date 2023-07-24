import SupabaseClientService from '.';

class SessionService extends SupabaseClientService {
  constructor() {
    super();
  }

  async getActualSession() {
    const {
      data: {session},
    } = await this.supabase.auth.getSession();

    return session;
  }

  async refreshActualSession(refresh_token: string) {
    const {data} = await this.supabase.auth.refreshSession({
      refresh_token,
    });

    return data.session;
  }
}

const sessionService = new SessionService();
export default sessionService;
