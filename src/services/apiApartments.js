import supabase from "./supabase";

export async function getApartments() {
  const { data, error } = await supabase.from("apartments").select("*");

  if (error) {
    console.error(error);
    throw new Error("Apartments could not be loaded");
  }

  return data;
}
