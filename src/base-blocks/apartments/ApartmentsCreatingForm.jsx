import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import Input from "../../ui-blocks/Input";
import Form from "../../ui-blocks/Form";
import Button from "../../ui-blocks/Button";
import FileInput from "../../ui-blocks/FileInput";
import Textarea from "../../ui-blocks/Textarea";
import FormRow from "../../ui-blocks/FormRow";
import { useApartmentsCreating } from "./useApartmentsCreating";
import { useApartmentsEditing } from "./useApartmentsEditing";

function ApartmentCreatingForm({ apartmentToEditing = {}, onCloseModal }) {
  ApartmentCreatingForm.propTypes = {
    apartmentToEditing: PropTypes.object,
    onCloseModal: PropTypes.func,
  };
  const { createApartment, isCreating } = useApartmentsCreating();
  const { editApartment, isEditing } = useApartmentsEditing();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = apartmentToEditing;
  const isEditingSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditingSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditingSession)
      editApartment(
        { newApartmentData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createApartment(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  // Monitoring error during form submission. Add to second arg of onSubmit
  // function onError(errors) {
  //   console.log(errors);
  // }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
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
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
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
