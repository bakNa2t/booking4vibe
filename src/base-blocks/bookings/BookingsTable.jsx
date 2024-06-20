import BookingsRow from "./BookingsRow";
import Table from "../../ui-blocks/Table";
import MenuRow from "../../ui-blocks/MenuRow";

function BookingTable() {
  const bookings = [];

  return (
    <MenuRow>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
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
      </Table>
    </MenuRow>
  );
}

export default BookingTable;
