import { useEffect, useState } from "react";
import styled from "styled-components";
import BookingDataBox from "../../base-blocks/bookings/BookingsDataBox";

import Row from "../../ui-blocks/Row";
import Heading from "../../ui-blocks/Heading";
import ButtonBlock from "../../ui-blocks/ButtonBlock";
import Button from "../../ui-blocks/Button";
import ButtonText from "../../ui-blocks/ButtonText";
import Spinner from "../../ui-blocks/Spinner";
import Checkbox from "../../ui-blocks/Checkbox";

import useBookingSingle from "../bookings/useBookingSingle";
import { useGoBack } from "../../hooks/useGoBack";
import { formatCurrency } from "../../utils/utilsFunctions";

const Box = styled.div`
  background-color: var(--color-emerald-0);
  border: 1px solid var(--color-emerald-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmedPaid, setConfirmedPaid] = useState(false);
  const { isLoading, booking } = useBookingSingle();
  const goBack = useGoBack();

  useEffect(
    function () {
      setConfirmedPaid(booking?.isPaid ?? false);
    },
    [booking]
  );

  if (isLoading) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    //   quantityGuests,
    //   hasBreakfast,
    //   quantityNights,
  } = booking;

  function handleCheckin() {}

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={goBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <Box>
        <Checkbox
          checked={confirmedPaid}
          onChange={() => setConfirmedPaid((confirm) => !confirm)}
          id="confirm"
          disabled={confirmedPaid}
        >
          Confirmed {guests.fullName} has paid the total amount of{" "}
          {formatCurrency(totalPrice)} for booking
        </Checkbox>
      </Box>

      <ButtonBlock>
        <Button onClick={handleCheckin} disabled={!confirmedPaid}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={goBack}>
          Back
        </Button>
      </ButtonBlock>
    </>
  );
}

export default CheckinBooking;
