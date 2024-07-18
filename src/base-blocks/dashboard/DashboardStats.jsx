import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { HiOutlineBriefcase } from "react-icons/hi";
import PropTypes from "prop-types";

import DashboardStat from "./DashboardStat";

import { formatCurrency } from "../../utils/utilsFunctions";

function DashboardStats({
  bookings,
  confirmedStays,
  amountDays,
  apartmentsCount,
}) {
  DashboardStats.propTypes = {
    bookings: PropTypes.array,
    confirmedStays: PropTypes.array,
    amountDays: PropTypes.number,
    apartmentsCount: PropTypes.number,
  };

  // Amount of bookings to display
  const amountBookings = bookings.length;

  // Total sum of bookings sales
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  //   Amount of confirmed stays
  const checkins = confirmedStays.length;

  // Calculate occupancy rate
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.quantityNights, 0) /
    (amountDays * apartmentsCount);

  return (
    <>
      <DashboardStat
        icon={<HiOutlineBriefcase />}
        title={"Bookings"}
        color="blue"
        value={amountBookings}
      />
      <DashboardStat
        icon={<HiOutlineBanknotes />}
        title={"Sales"}
        color="green"
        value={formatCurrency(sales)}
      />
      <DashboardStat
        icon={<HiOutlineCalendarDays />}
        title={"Check ins"}
        color="indigo"
        value={checkins}
      />
      <DashboardStat
        icon={<HiOutlineBriefcase />}
        title={"Occupancy rate"}
        color="red"
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default DashboardStats;
