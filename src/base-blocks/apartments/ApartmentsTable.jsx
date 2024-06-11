import { useQuery } from "@tanstack/react-query";
import { getApartments } from "../../services/apiApartments";

import styled from "styled-components";
import Spinner from "../../ui-blocks/Spinner";
import ApartmentsRow from "./ApartmentsRow";

const Table = styled.div`
  border: 1px solid var(--color-emerald-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function ApartmentsTable() {
  const {
    isLoading,
    data: apartments,
    error,
  } = useQuery({
    queryKey: ["apartments"],
    queryFn: getApartments,
  });

  if (isLoading) return <Spinner />;

  console.log(apartments, error);

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Apartment</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {apartments.map((apartment) => (
        <ApartmentsRow key={apartment.id} apartment={apartment} />
      ))}
    </Table>
  );
}

export default ApartmentsTable;
