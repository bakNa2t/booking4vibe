import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import Tag from "../../ui-blocks/Tag";
import Flag from "../../ui-blocks/Flag";
import Button from "../../ui-blocks/Button";
import CheckoutButton from "./CheckoutButton";

const StyledActivityPerDayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-emerald-100);

  &:first-child {
    border-top: 1px solid var(--color-emerald-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

function ActivityPerDayItem({ activity }) {
  ActivityPerDayItem.propTypes = {
    activity: PropTypes.object,
  };

  const { id, status, guests, quantityNights } = activity;

  return (
    <StyledActivityPerDayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}}`} />
      <Guest>{guests.fullName}</Guest>
      <div>{quantityNights} nights</div>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}

      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </StyledActivityPerDayItem>
  );
}

export default ActivityPerDayItem;
