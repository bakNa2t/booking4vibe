import supabase from "./supabase";

export async function getApartments() {
  const { data, error } = await supabase.from("apartments").select("*");

  if (error) {
    console.error(error);
    throw new Error("Apartments could not be loaded");
  }

  return data;
}

export async function deleteApartment(id) {
  const { data, error } = await supabase
    .from("apartments")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Apartment could not be deleted");
  }
  return data;
}
