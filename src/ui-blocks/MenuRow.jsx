// import styled from "styled-components";
import PropTypes from "prop-types";

// const StyledMenu = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

// const StyledToggle = styled.button`
//   background: none;
//   border: none;
//   padding: 0.4rem;
//   border-radius: var(--border-radius-sm);
//   transform: translateX(0.8rem);
//   transition: all 0.2s;

//   &:hover {
//     background-color: var(--color-emerald-100);
//   }

//   & svg {
//     width: 2.4rem;
//     height: 2.4rem;
//     color: var(--color-emerald-700);
//   }
// `;

// const StyledList = styled.ul`
//   position: fixed;

//   background-color: var(--color-emerald-0);
//   box-shadow: var(--shadow-md);
//   border-radius: var(--border-radius-md);

//   right: ${(props) => props.position.x}px;
//   top: ${(props) => props.position.y}px;
// `;

// const StyledButton = styled.button`
//   width: 100%;
//   text-align: left;
//   background: none;
//   border: none;
//   padding: 1.2rem 2.4rem;
//   font-size: 1.4rem;
//   transition: all 0.2s;

//   display: flex;
//   align-items: center;
//   gap: 1.6rem;

//   &:hover {
//     background-color: var(--color-emerald-50);
//   }

//   & svg {
//     width: 1.6rem;
//     height: 1.6rem;
//     color: var(--color-emerald-400);
//     transition: all 0.3s;
//   }
// `;

function MenuRow({ children }) {
  MenuRow.propTypes = {
    children: PropTypes.node,
  };
  return <div>{children}</div>;
}

export default MenuRow;
