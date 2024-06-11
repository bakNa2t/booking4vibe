import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineBuildingOffice,
  HiOutlineCalendarDays,
  HiOutlineCog8Tooth,
  HiOutlineHomeModern,
  HiOutlineUser,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-emerald-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-emerald-800);
    background-color: var(--color-emerald-100);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-emerald-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledLink to="dashboard">
            <HiOutlineHomeModern />
            <span>Home</span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="apartments">
            <HiOutlineBuildingOffice />
            <span>Apartments</span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="user">
            <HiOutlineUser />
            <span>User</span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="settings">
            <HiOutlineCog8Tooth />
            <span>Settings</span>
          </StyledLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
