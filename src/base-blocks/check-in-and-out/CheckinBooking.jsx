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
import { useSettings } from "../settings/useSettings";
import useCheckin from "./useCheckin";

const Box = styled.div`
  background-color: var(--color-emerald-0);
  border: 1px solid var(--color-emerald-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmedPaid, setConfirmedPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { isLoading, booking } = useBookingSingle();
  const { settings, isLoading: isLoadingSettings } = useSettings();
  const goBack = useGoBack();

  const { checkin, isCheckingIn } = useCheckin();

  useEffect(
    function () {
      setConfirmedPaid(booking?.isPaid ?? false);
    },
    [booking]
  );

  if (isLoading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    quantityGuests,
    hasBreakfast,
    quantityNights,
  } = booking;

  const optionalBreakfastPrice =
    settings.breakfastPrice * quantityNights * quantityGuests;

  function handleCheckin() {
    if (!confirmedPaid) return;

    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={goBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmedPaid(false);
            }}
            id="breakfast"
          >
            Do you want to add breakfast for{" "}
            {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          checked={confirmedPaid}
          onChange={() => setConfirmedPaid((confirm) => !confirm)}
          id="confirm"
          disabled={confirmedPaid || isCheckingIn}
        >
          Confirmed {guests.fullName} has paid the total amount of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakfastPrice
              )})
          `}{" "}
          for booking
        </Checkbox>
      </Box>

      <ButtonBlock>
        <Button
          onClick={handleCheckin}
          disabled={!confirmedPaid || isCheckingIn}
        >
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
