import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import styled from "styled-components";
import PropTypes from "prop-types";

import { useApartmentsDeleting } from "./useApartmentsDeleting";
import { useApartmentsCreating } from "./useApartmentsCreating";
import { formatCurrency } from "../../utils/utilsFunctions";
import ApartmentsCreatingForm from "./ApartmentsCreatingForm";
import Modal from "../../ui-blocks/Modal";
import ConfirmDelete from "../../ui-blocks/ConfirmDelete";
import Table from "../../ui-blocks/Table";
import MenuRow from "../../ui-blocks/MenuRow";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;
//   background-color: var(--color-emerald-100);

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-emerald-200);
//   }
// `;

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
    <Table.Row>
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
        <Modal>
          <Modal.Open opens="edit">
            <button>
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name="edit">
            <ApartmentsCreatingForm apartmentToEditing={apartment} />
          </Modal.Window>

          <Modal.Open opens="delete">
            <button>
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="apartments"
              disabled={isDeleting}
              onConfirm={() => deleteApartment(apartmentId)}
            />
          </Modal.Window>
        </Modal>

        <MenuRow.Menu>
          <MenuRow.Toggle id={apartmentId} />

          <MenuRow.List id={apartmentId}>
            <MenuRow.Button
              icon={<HiSquare2Stack />}
              onClick={handleDuplicateApartment}
            >
              Duplicate
            </MenuRow.Button>

            <MenuRow.Button icon={<HiPencil />}>Edit</MenuRow.Button>

            <MenuRow.Button icon={<HiTrash />}>Delete</MenuRow.Button>
          </MenuRow.List>
        </MenuRow.Menu>
      </div>
    </Table.Row>
  );
}

export default ApartmentsRow;
