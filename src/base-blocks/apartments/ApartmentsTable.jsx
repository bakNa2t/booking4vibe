// import styled from "styled-components";

import ApartmentsRow from "./ApartmentsRow";
import Spinner from "../../ui-blocks/Spinner";
import Table from "../../ui-blocks/Table";

import { useApartments } from "./useApartments";
import MenuRow from "../../ui-blocks/MenuRow";

// const Table = styled.div`
//   border: 1px solid var(--color-emerald-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;

function ApartmentsTable() {
  const { isLoading, apartments } = useApartments();
  if (isLoading) return <Spinner />;

  return (
    <MenuRow>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Apartment</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={apartments}
          render={(apartment) => (
            <ApartmentsRow key={apartment.id} apartment={apartment} />
          )}
        />
      </Table>
    </MenuRow>
  );
}

export default ApartmentsTable;
