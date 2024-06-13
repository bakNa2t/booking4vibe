import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditApartment } from "../../services/apiApartments";

import toast from "react-hot-toast";
import Input from "../../ui-blocks/Input";
import Form from "../../ui-blocks/Form";
import Button from "../../ui-blocks/Button";
import FileInput from "../../ui-blocks/FileInput";
import Textarea from "../../ui-blocks/Textarea";
import FormRow from "../../ui-blocks/FormRow";

import PropTypes from "prop-types";

function ApartmentCreatingForm({ apartmentToEditing = {} }) {
  ApartmentCreatingForm.propTypes = {
    apartmentToEditing: PropTypes.object,
  };

  const { id: editId, ...editValues } = apartmentToEditing;
  const isEditingSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditingSession ? editValues : {},
  });
  const { errors } = formState;

  const queryClient = useQueryClient();

  //Create new apartment
  const { mutate: createApartment, isLoading: isCreating } = useMutation({
    mutationFn: createEditApartment,
    onSuccess: () => {
      toast.success("New apartment created successfully");
      queryClient.invalidateQueries({
        queryKey: ["apartments"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  //Edit existing apartment
  const { mutate: editApartment, isLoading: isEditing } = useMutation({
    mutationFn: ({ newApartmentData, id }) =>
      createEditApartment(newApartmentData, id),
    onSuccess: () => {
      toast.success("Apartment updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["apartments"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditingSession)
      editApartment({ newApartmentData: { ...data, image }, id: editId });
    else createApartment({ ...data, image: image });
  }

  // Monitoring error during form submission. Add to second arg of onSubmit
  // function onError(errors) {
  //   console.log(errors);
  // }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Apartment name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Minimum capacity is 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Minimum capacity is 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) => {
              value <= getValues().regularPrice ||
                "Discount should be less than regular price";
            },
          })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <Textarea
          type="text"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Apartment photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditingSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditingSession ? "Edit apartment" : "Add apartment"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default ApartmentCreatingForm;
