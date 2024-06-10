import { useEffect } from "react";
import Heading from "../ui-blocks/Heading";
import Row from "../ui-blocks/Row";
import { getApartments } from "../services/apiApartments";

function Apartments() {
  useEffect(function () {
    getApartments().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">List of the apartments</Heading>
      <p>This is Apartments</p>
    </Row>
  );
}

export default Apartments;
