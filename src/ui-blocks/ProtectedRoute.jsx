import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  // --> load the authenticated user
  const { isAuthenticated, isLoading } = useGetUser();

  // --> if not authenticated, redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) return navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // --> Dispaly spinner while loading
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // --> if authenticated, render app's children
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
