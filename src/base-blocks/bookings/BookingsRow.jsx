import { useNavigate } from "react-router-dom";
import { format, isToday } from "date-fns";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import styled from "styled-components";
import PropTypes from "prop-types";

import Tag from "../../ui-blocks/Tag";
import Table from "../../ui-blocks/Table";
import MenuRow from "../../ui-blocks/MenuRow";
import Modal from "../../ui-blocks/Modal";
import ConfirmDelete from "../../ui-blocks/ConfirmDelete";

import { formatCurrency } from "../../utils/utilsFunctions";
import { formatDistanceFromNow } from "../../utils/utilsFunctions";
import { useBookingDeleting } from "./useBookingDeleting";
import useCheckout from "../check-in-and-out/useCheckout";

const Apartment = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingsRow({
  booking,
  /*booking: {
    id: bookingId,
    // created_at,
    startDay,
    endDay,
    quantityNights,
    // quantityGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    apartments: { name: apartmentName },
  },*/
}) {
  BookingsRow.propTypes = {
    booking: PropTypes.object,
  };

  const {
    id: bookingId,
    startDay,
    endDay,
    quantityNights,
    status,
    totalPrice,
    guests: { fullName: guestName, email },
    apartments: { name: apartmentName },
  } = booking;

  const navigate = useNavigate();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useBookingDeleting();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Table.Row>
      <Apartment>{apartmentName}</Apartment>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDay))
            ? "Today"
            : formatDistanceFromNow(startDay)}{" "}
          &rarr; {quantityNights} night stay
        </span>
        <span>
          {format(new Date(startDay), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDay), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>

      <Modal>
        <MenuRow.Menu>
          <MenuRow.Toggle id={bookingId} />
          <MenuRow.List id={bookingId}>
            <MenuRow.Button
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              Details
            </MenuRow.Button>

            {status === "unconfirmed" && (
              <MenuRow.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check in
              </MenuRow.Button>
            )}

            {status === "checked-in" && (
              <MenuRow.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(bookingId)}
                disabled={isCheckingOut}
              >
                Check out
              </MenuRow.Button>
            )}

            <Modal.Open opens="delete">
              <MenuRow.Button icon={<HiTrash />}>Delete</MenuRow.Button>
            </Modal.Open>
          </MenuRow.List>
        </MenuRow.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName={apartmentName}
            onConfirm={() => deleteBooking(bookingId)}
            disabled={isDeleting}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookingsRow;
