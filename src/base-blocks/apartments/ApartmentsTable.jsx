import { useSearchParams } from "react-router-dom";

import ApartmentsRow from "./ApartmentsRow";
import Spinner from "../../ui-blocks/Spinner";
import Table from "../../ui-blocks/Table";
import MenuRow from "../../ui-blocks/MenuRow";

import { useApartments } from "./useApartments";

function ApartmentsTable() {
  const { isLoading, apartments } = useApartments();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  // Filter apartments by discount
  const filterValue = searchParams.get("discount") || "all";

  let filteredApartments;

  if (filterValue === "all") filteredApartments = apartments;

  if (filterValue === "no-discount")
    filteredApartments = apartments.filter(
      (apartment) => apartment.discount === 0
    );

  if (filterValue === "with-discount")
    filteredApartments = apartments.filter(
      (apartment) => apartment.discount > 0
    );

  // Sort apartments by name, price, capacity
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [sortField, sortDirection] = sortBy.split("-");
  const modifier = sortDirection === "asc" ? 1 : -1;
  const sortedApartments = filteredApartments.sort(
    (a, b) => (a[sortField] - b[sortField]) * modifier
  );

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
          // data={filteredApartments}
          data={sortedApartments}
          render={(apartment) => (
            <ApartmentsRow key={apartment.id} apartment={apartment} />
          )}
        />
      </Table>
    </MenuRow>
  );
}

export default ApartmentsTable;
