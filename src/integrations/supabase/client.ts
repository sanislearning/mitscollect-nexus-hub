// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://yuhrlnvuldioakxckgdi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1aHJsbnZ1bGRpb2FreGNrZ2RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgzMzc4MDQsImV4cCI6MjA2MzkxMzgwNH0.V2L4kd6wc2aN4VB7gPsRiP7pB6fwpF1Gqw5cKS5SIRc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);