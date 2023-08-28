import {createClientComponentClient} from '@supabase/auth-helpers-nextjs';
import {SupabaseClient} from '@supabase/supabase-js';

abstract class SupabaseClientService {
  protected supabase: SupabaseClient<any, 'public', any>;

  constructor() {
    this.getInstance();
  }

  getInstance() {
    if (!this.supabase) {
      this.supabase = createClientComponentClient();
    }

    return this.supabase;
  }
}

export default SupabaseClientService;
