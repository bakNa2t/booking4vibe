import styled from "styled-components";

import Spinner from "../../ui-blocks/Spinner";
import DashboardStats from "./DashboardStats";

import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import { useApartments } from "../apartments/useApartments";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: isLoadingBookings, bookings } = useRecentBookings();
  const {
    isLoading: isLoadingStays,
    // stays,
    confirmedStays,
    amountDays,
  } = useRecentStays();

  const { apartments, isLoading: isLoadingApartments } = useApartments();

  if (isLoadingBookings || isLoadingStays || isLoadingApartments)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <DashboardStats
        bookings={bookings}
        confirmedStays={confirmedStays}
        amountDays={amountDays}
        apartmentsCount={apartments.length}
      />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
