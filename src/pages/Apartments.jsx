import ApartmentsTable from "../base-blocks/apartments/ApartmentsTable";
import Row from "../ui-blocks/Row";
import Heading from "../ui-blocks/Heading";
import Button from "../ui-blocks/Button";
import { useState } from "react";
import ApartmentsCreatingForm from "../base-blocks/apartments/ApartmentsCreatingForm";

function Apartments() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">List of the apartments</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <ApartmentsTable />
        <Button onClick={() => setShowForm(!showForm)}>
          Add new apartment
        </Button>
        {showForm && <ApartmentsCreatingForm />}
      </Row>
    </>
  );
}

export default Apartments;
