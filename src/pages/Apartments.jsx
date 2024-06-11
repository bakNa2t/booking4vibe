import ApartmentsTable from "../base-blocks/apartments/ApartmentsTable";
import Row from "../ui-blocks/Row";
import Heading from "../ui-blocks/Heading";

function Apartments() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">List of the apartments</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <ApartmentsTable />
      </Row>
    </>
  );
}

export default Apartments;
