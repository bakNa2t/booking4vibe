import PropTypes from "prop-types";
import DashboardStat from "./DashBoardStat";
import { HiOutlineBriefcase } from "react-icons/hi";

function DashboardStats({ bookings, confirmedStays }) {
  DashboardStats.propTypes = {
    bookings: PropTypes.array,
    confirmedStays: PropTypes.array,
  };

  const amountBookimgs = bookings.length;

  console.log(bookings, confirmedStays);
  return (
    <>
      <DashboardStat
        icon={<HiOutlineBriefcase />}
        title={"Bookings"}
        color="blue"
        value={amountBookimgs}
      />
    </>
  );
}

export default DashboardStats;
