import Heading from "../ui-blocks/Heading";
import Row from "../ui-blocks/Row";
import BookingsTable from "../base-blocks/bookings/BookingsTable";
import BookingsTableOperations from "../base-blocks/bookings/BookingsTableOperation";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Bookings list</Heading>
        <BookingsTableOperations />
      </Row>
      <BookingsTable />
    </>
  );
}

export default Bookings;
