import Row from "../ui-blocks/Row";
import Heading from "../ui-blocks/Heading";
import DashboardLayout from "../base-blocks/dashboard/DashboardLayout";
import DashboardFilter from "../base-blocks/dashboard/DashboardFilter";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
