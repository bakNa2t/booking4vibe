import supabase from "./supabase";

// Log in with email and password
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

// Get current user during session (returns null if not logged in)
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  // console.log(data);

  if (error) throw new Error(error.message);

  return data?.user;
}
