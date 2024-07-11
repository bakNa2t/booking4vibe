import styled from "styled-components";

import Heading from "../../ui-blocks/Heading";
import Row from "../../ui-blocks/Row";

const StyledActivityPerDay = styled.div`
  /* Box */
  background-color: var(--color-emerald-0);
  border: 1px solid var(--color-emerald-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  grid-column: 1 / span 2;
  padding-top: 2.4rem;
`;

const ActivityPerDayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function CheckinBookingActivityPerDay() {
  return (
    <StyledActivityPerDay>
      <Row type="horizontal">
        <Heading as="h2">Activity per day</Heading>
      </Row>
      <ActivityPerDayList />
      <NoActivity>No activity</NoActivity>
    </StyledActivityPerDay>
  );
}

export default CheckinBookingActivityPerDay;
