import Heading from "../ui-blocks/Heading";
import Row from "../ui-blocks/Row";
import BookingsTable from "../base-blocks/bookings/BookingsTable";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Bookings list</Heading>
        <p>Lorem ipsum dolor sit amet.</p>
      </Row>
      <BookingsTable />
    </>
  );
}

export default Bookings;
