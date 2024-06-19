import ApartmentsTable from "../base-blocks/apartments/ApartmentsTable";
import ApartmentAddingByModal from "../base-blocks/apartments/ApartmentAddingByModal";
import ApartmentsTableOperations from "../base-blocks/apartments/ApartmentsTableOperations";
import Row from "../ui-blocks/Row";
import Heading from "../ui-blocks/Heading";

function Apartments() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">List of the apartments</Heading>
        <ApartmentsTableOperations />
      </Row>
      <Row>
        <ApartmentsTable />
        <ApartmentAddingByModal />
      </Row>
    </>
  );
}

export default Apartments;
