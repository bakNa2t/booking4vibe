import { createContext, useContext, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { HiEllipsisVertical } from "react-icons/hi2";
import { createPortal } from "react-dom";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-emerald-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-emerald-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-emerald-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-emerald-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-emerald-400);
    transition: all 0.3s;
  }
`;

const MenuRowContext = createContext();

function MenuRow({ children }) {
  MenuRow.propTypes = {
    children: PropTypes.node,
  };
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenuRowContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenuRowContext.Provider>
  );
}

function Toggle({ id }) {
  Toggle.propTypes = {
    id: PropTypes.number,
  };

  const { openId, open, close, setPosition } = useContext(MenuRowContext);

  function handleClick(e) {
    const rect = e.target.closest("button").getBoundingClientRect();
    // console.log(rect.x, rect.y);
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

function List({ id, children }) {
  List.propTypes = {
    id: PropTypes.number,
    children: PropTypes.node,
    position: PropTypes.object,
  };
  const { openId, position } = useContext(MenuRowContext);

  if (openId !== id) return null;

  return createPortal(
    <StyledList position={position}>{children}</StyledList>,
    document.body
  );
}

function Button({ children, icon, onClick }) {
  Button.propTypes = {
    icon: PropTypes.node,
    onClick: PropTypes.func,
    children: PropTypes.node,
  };

  const { close } = useContext(MenuRowContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

MenuRow.Menu = Menu;
MenuRow.Toggle = Toggle;
MenuRow.List = List;
MenuRow.Button = Button;

export default MenuRow;
