import supabase, { supabaseUrl } from "./supabase";

export async function getApartments() {
  const { data, error } = await supabase.from("apartments").select("*");

  if (error) {
    console.error(error);
    throw new Error("Apartments could not be loaded");
  }

  return data;
}

export async function createEditApartment(newApartment, id) {
  const hasImagePath = newApartment.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()} - ${newApartment.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newApartment.image
    : `${supabaseUrl}/storage/v1/object/public/apartment-images/${imageName}`;

  // Edit or add new apartment row to table
  let query = supabase.from("apartments");
  //add
  if (!id) query = query.insert([{ ...newApartment, image: imagePath }]);
  //edit
  if (id)
    query = query.update({ ...newApartment, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  // const { data, error } = await supabase
  //   .from("apartments")
  //   .insert({ ...newApartment, image: imagePath })
  //   .select()
  //   .single();

  if (error) {
    console.error(error);
    throw new Error("Apartment could not be created");
  }

  // Add new apartment image to table
  const { error: storageError } = await supabase.storage
    .from("apartment-images")
    .upload(imageName, newApartment.image);

  // If error, delete new apartment row from table
  if (storageError) {
    await supabase.from("apartments").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Image could not be uploaded and apartment could not be created"
    );
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
