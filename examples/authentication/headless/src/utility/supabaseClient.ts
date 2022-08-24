import { createClient } from "@pankod/refine-supabase";

const SUPABASE_URL = "https://svtkbbtmqdppwdweqtkt.supabase.co";
const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2dGtiYnRtcWRwcHdkd2VxdGt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEzMTc3MjQsImV4cCI6MTk3Njg5MzcyNH0.8oRvzGAvSlS7cxBBIHIlCElZS3dvw1y9ZZA6IkmTdHk";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
