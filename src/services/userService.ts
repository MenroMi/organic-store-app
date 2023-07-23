import {AuthError, User} from '@supabase/supabase-js';
import SupabaseClientService from '.';

class UserService extends SupabaseClientService {
  constructor() {
    super();
  }

  async signIn(email: string, password: string) {
    const {data, error} = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error && error?.message) {
      const {name, message, status} = error;
      return {
        data: null,
        error: {
          name,
          message,
          status,
        },
      };
    }

    const {
      session: {access_token},
      user: {role, id, user_metadata},
    } = data;

    const {full_name, avatar} = user_metadata;

    if (access_token) {
      localStorage.setItem('access_token', access_token);
    }

    return {
      data: {
        role,
        id,
        user_metadata: {
          full_name,
          avatar,
        },
        accessToken: access_token,
      },
      error: null,
    };
  }

  async signInGoogle() {
    await this.supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });
  }

  async signInFacebook() {
    await this.supabase.auth.signInWithOAuth({
      provider: 'facebook',
    });
  }

  async signInGithub() {
    await this.supabase.auth.signInWithOAuth({
      provider: 'github',
    });
  }

  async signUp(name: string, email: string, password: string) {
    const {data, error} = await this.supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
        data: {
          full_name: name,
        },
      },
    });

    if (data) {
      return {data: data.user, error: null};
    }

    return {data: null, error};
  }

  async signOut() {
    await this.supabase.auth.signOut();

    if (localStorage.getItem('access_token')) {
      localStorage.removeItem('access_token');
    }
  }

  async resetPassword(email: string) {
    const {error} = await this.supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_FRONT_API}/auth/update-password`,
    });

    if (error?.message) {
      return {name: error.name, message: error.message, status: error.status};
    }

    return null;
  }

  async onUpdateUser(field: string, newValue: string) {
    let data: User;
    let error: AuthError;

    if (field === 'password' || field === 'email') {
      const {
        data: {user},
        error: updateError,
      } = await this.supabase.auth.updateUser({
        [field]: newValue,
      });
      data = user;
      error = updateError;
    } else {
      const {
        data: {user},
        error: updateError,
      } = await this.supabase.auth.updateUser({
        data: {
          [field]: newValue,
        },
      });
      data = user;
      error = updateError;
    }

    if (data && data.id) {
      return {data, error: null};
    }

    return {
      data: null,
      error: {name: error.name, message: error.message, status: error.status},
    };
  }
}

const userService = new UserService();
export default userService;
