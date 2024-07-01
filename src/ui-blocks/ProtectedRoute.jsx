import styled from "styled-components";
import PropTypes from "prop-types";

import Spinner from "./Spinner";

import { useGetUser } from "../base-blocks/authentication/useGetUser";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-emerald-50);
`;

function ProtectedRoute({ children }) {
  ProtectedRoute.propTypes = {
    children: PropTypes.node,
  };

  // --> load the authenticated user
  const { user, isLoading } = useGetUser();

  // --> Dispaly spinner while loading
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // --> if not authenticated, redirect to login page

  // --> if authenticated, render app's children
  console.log(user);

  return children;
}

export default ProtectedRoute;
