import { formatCurrency } from "../../utils/utilsFunctions";
import styled from "styled-components";

import PropTypes from "prop-types";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  background-color: var(--color-emerald-100);

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-emerald-100);
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

  const { image, name, maxCapacity, regularPrice, discount } = apartment;

  return (
    <TableRow role="row">
      <Img src={image} />
      <Apartment>{name}</Apartment>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <button>Delete</button>
    </TableRow>
  );
}

export default ApartmentsRow;
