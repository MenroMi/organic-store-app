import {createClientComponentClient} from '@supabase/auth-helpers-nextjs';
import {SupabaseClient} from '@supabase/supabase-js';

abstract class SupabaseClientService {
  readonly supabase: SupabaseClient<any, 'public', any>;

  constructor() {
    this.supabase = createClientComponentClient();
  }
}

export default SupabaseClientService;
