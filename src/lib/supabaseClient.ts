import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iiunlrzrcgkjrcpamvhz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpdW5scnpyY2dranJjcGFtdmh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5MzI3MTksImV4cCI6MjA3NjUwODcxOX0.X9DzMwcA2Iu71dCMzENjngYoWLW5WGMw9Nh9v-vZyho"; // 프론트에서는 anon key 사용

export const supabase = createClient(supabaseUrl, supabaseAnonKey);