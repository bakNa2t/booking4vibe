import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 24rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-emerald-50);
  padding: 5rem 8rem;
  overflow-y: scroll;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 110rem;
  margin: 0 auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
