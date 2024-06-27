import styled from "styled-components";

import BookingsDataBox from "./BookingsDataBox";
import Row from "../../ui-blocks/Row";
import Heading from "../../ui-blocks/Heading";
import Tag from "../../ui-blocks/Tag";
import ButtonBlock from "../../ui-blocks/ButtonBlock";
import Button from "../../ui-blocks/Button";
import ButtonText from "../../ui-blocks/ButtonText";
import Empty from "../../ui-blocks/Empty";
import Spinner from "../../ui-blocks/Spinner";

import useBookingSingle from "./useBookingSingle";
import { useGoBack } from "../../hooks/useGoBack";
import { useNavigate } from "react-router-dom";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingsDetail() {
  const { booking, isLoading } = useBookingSingle();
  const goBack = useGoBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  if (!booking) return <Empty resourceName={"booking"} />;

  const { status, id: bookingId } = booking;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={goBack}>&larr; Back</ButtonText>
      </Row>

      <BookingsDataBox booking={booking} />

      <ButtonBlock>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}

        <Button variation="secondary" onClick={goBack}>
          Back
        </Button>
      </ButtonBlock>
    </>
  );
}

export default BookingsDetail;
