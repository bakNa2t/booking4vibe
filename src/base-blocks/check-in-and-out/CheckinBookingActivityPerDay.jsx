import { format } from "date-fns";
import styled from "styled-components";

import Heading from "../../ui-blocks/Heading";
import Row from "../../ui-blocks/Row";
import Spinner from "../../ui-blocks/Spinner";

import { useActivityPerDay } from "./useActivityPerDay";
import { getToday } from "../../utils/utilsFunctions";
import ActivityPerDayItem from "./ActivityPerDayItem";

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
  ${(props) => props.daysActivity?.length > 0 && "gap: 12rem"}
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 500;
`;

function CheckinBookingActivityPerDay() {
  const { daysActivity, isLoading } = useActivityPerDay();

  return (
    <StyledActivityPerDay>
      <Row type="horizontal">
        <Heading as="h2">
          Today&apos;s activity from {format(getToday(), "dd MMM yyyy")}{" "}
        </Heading>
      </Row>
      {!isLoading ? (
        daysActivity?.length > 0 ? (
          <ActivityPerDayList>
            {daysActivity.map((activity) => (
              <ActivityPerDayItem activity={activity} key={activity.id} />
            ))}
          </ActivityPerDayList>
        ) : (
          <NoActivity>No activity for today</NoActivity>
        )
      ) : (
        <Spinner />
      )}
    </StyledActivityPerDay>
  );
}

export default CheckinBookingActivityPerDay;
