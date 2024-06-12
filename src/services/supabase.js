import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://celamgsaxrexxdabtnlt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlbGFtZ3NheHJleHhkYWJ0bmx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwMDkzMzMsImV4cCI6MjAzMzU4NTMzM30.7FXFUiqgCpYOzU5MNT1PwQsk4SwslvMIyWmXu4dTf5Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
