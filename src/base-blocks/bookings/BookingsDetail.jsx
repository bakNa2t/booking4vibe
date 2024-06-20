import styled from "styled-components";

import BookingsDataBox from "./BookingsDataBox";
import Row from "../../ui-blocks/Row";
import Heading from "../../ui-block/Heading";
import Tag from "../../ui-blocks/Tag";
import ButtonBlock from "../../ui-blocks/ButtonBlock";
import Button from "../../ui-blocks/Button";
import ButtonText from "../../ui-blocks/ButtonText";

import { useGoBack } from "../../hooks/useGoBack";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const booking = {};
  const status = "checked-in";

  const goBack = useGoBack();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #X</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={goBack}>&larr; Back</ButtonText>
      </Row>

      <BookingsDataBox booking={booking} />

      <ButtonBlock>
        <Button variation="secondary" onClick={goBack}>
          Back
        </Button>
      </ButtonBlock>
    </>
  );
}

export default BookingDetail;
