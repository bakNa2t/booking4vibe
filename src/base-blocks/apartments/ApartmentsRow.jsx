import { useState } from "react";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import styled from "styled-components";
import PropTypes from "prop-types";

import { useApartmentsDeleting } from "./useApartmentsDeleting";
import { useApartmentsCreating } from "./useApartmentsCreating";
import { formatCurrency } from "../../utils/utilsFunctions";
import ApartmentsCreatingForm from "./ApartmentsCreatingForm";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  background-color: var(--color-emerald-100);

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-emerald-200);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Apartment = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-emerald-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function ApartmentsRow({ apartment }) {
  ApartmentsRow.propTypes = {
    apartment: PropTypes.object.isRequired,
  };

  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteApartment } = useApartmentsDeleting();
  const { isCreating, createApartment } = useApartmentsCreating();

  const {
    id: apartmentId,
    image,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
  } = apartment;

  function handleDuplicateApartment() {
    createApartment({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Apartment>{name}</Apartment>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}

        <div>
          <button disabled={isCreating} onClick={handleDuplicateApartment}>
            <HiSquare2Stack />
          </button>
          <button onClick={() => setShowForm(!showForm)}>
            <HiPencil />
          </button>
          <button
            onClick={() => deleteApartment(apartmentId)}
            disabled={isDeleting}
          >
            <HiTrash />
          </button>
        </div>
      </TableRow>

      {showForm && <ApartmentsCreatingForm apartmentToEditing={apartment} />}
    </>
  );
}

export default ApartmentsRow;
