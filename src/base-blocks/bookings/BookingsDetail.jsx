import { useNavigate } from "react-router-dom";
import { HiArrowUpOnSquare } from "react-icons/hi2";
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
import Modal from "../../ui-blocks/Modal";
import ConfirmDelete from "../../ui-blocks/ConfirmDelete";

import useBookingSingle from "./useBookingSingle";
import useCheckout from "../check-in-and-out/useCheckout";
import { useGoBack } from "../../hooks/useGoBack";
import { useBookingDeleting } from "./useBookingDeleting";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingsDetail() {
  const { booking, isLoading } = useBookingSingle();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useBookingDeleting();
  const goBack = useGoBack();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  if (!booking) return <Empty resourceName={"booking"} />;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

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

        {status === "checked-in" && (
          <Button
            icon={<HiArrowUpOnSquare />}
            onClick={() => checkout(bookingId)}
            disabled={isCheckingOut}
          >
            Check out
          </Button>
        )}

        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger">Delete booking</Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="booking"
              onConfirm={() =>
                deleteBooking(bookingId, {
                  onSettled: () => navigate(-1),
                })
              }
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={goBack}>
          Back
        </Button>
      </ButtonBlock>
    </>
  );
}

export default BookingsDetail;
