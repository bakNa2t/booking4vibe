// import styled from "styled-components";
// import BookingDataBox from "../../base-blocks/bookings/BookingDataBox";

import Row from "../../ui-blocks/Row";
import Heading from "../../ui-blocks/Heading";
import ButtonBlock from "../../ui-blocks/ButtonBlock";
import Button from "../../ui-blocks/Button";
import ButtonText from "../../ui-blocks/ButtonText";

import { useGoBack } from "../../hooks/useGoBack";

// const Box = styled.div`
//   /* Box */
//   background-color: var(--color-emerald-0);
//   border: 1px solid var(--color-emerald-100);
//   border-radius: var(--border-radius-md);
//   padding: 2.4rem 4rem;
// `;

function CheckinBooking() {
  const goBack = useGoBack();

  //   const booking = {};

  //   const {
  //     id: bookingId,
  //     guests,
  //     totalPrice,
  //     quantityGuests,
  //     hasBreakfast,
  //     quantityNights,
  //   } = booking;

  function handleCheckin() {}

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{}</Heading>
        <ButtonText onClick={goBack}>&larr; Back</ButtonText>
      </Row>

      {/* <BookingDataBox booking={booking} /> */}

      <ButtonBlock>
        <Button onClick={handleCheckin}>Check in booking #{}</Button>
        <Button variation="secondary" onClick={goBack}>
          Back
        </Button>
      </ButtonBlock>
    </>
  );
}

export default CheckinBooking;
