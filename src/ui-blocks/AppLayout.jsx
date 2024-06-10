import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import styled from "styled-components";

const Main = styled.main`
  background-color: var(--color-emerald-100);
  padding: 5rem 8rem;
`;

function AppLayout() {
  return (
    <div>
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
