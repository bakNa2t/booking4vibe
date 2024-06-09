import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <h2>AppLayout</h2>
      <Outlet />
    </div>
  );
}

export default AppLayout;
