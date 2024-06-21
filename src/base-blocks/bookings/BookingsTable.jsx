import BookingsRow from "./BookingsRow";
import Table from "../../ui-blocks/Table";
import MenuRow from "../../ui-blocks/MenuRow";
import Empty from "../../ui-blocks/Empty";
import Spinner from "../../ui-blocks/Spinner";
import Pagination from "../../ui-blocks/Pagination";

import { useBookings } from "./useBookings";

function BookingsTable() {
  const { isLoading, bookings } = useBookings();

  if (isLoading) return <Spinner />;
  if (!bookings.length) return <Empty resourceName="bookings" />;

  return (
    <MenuRow>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Apartment</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingsRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination count={50} />
        </Table.Footer>
      </Table>
    </MenuRow>
  );
}

export default BookingsTable;
