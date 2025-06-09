import {createClient} from "@supabase/supabase-js";
import {Database} from "../../model/supabase/database.types.ts";

const supabaseClient = createClient<Database>(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
)

export default supabaseClient