import { createContext, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledTable = styled.div`
  border: 1px solid var(--color-emerald-200);

  font-size: 1.4rem;
  background-color: var(--color-emerald-0);
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  background-color: var(--color-emerald-100);
  border-bottom: 1px solid var(--color-emerald-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-emerald-600);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-emerald-100);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-emerald-100);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext();

function Table({ children, columns }) {
  Table.propTypes = {
    children: PropTypes.node,
    columns: PropTypes.string,
  };

  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  Header.propTypes = {
    children: PropTypes.node,
  };
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader as="header" role="row" columns={columns}>
      {children}
    </StyledHeader>
  );
}
function Row({ children }) {
  Row.propTypes = {
    children: PropTypes.node,
  };

  const { columns } = useContext(TableContext);

  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}
function Body({ data, render }) {
  Body.propTypes = {
    data: PropTypes.array,
    render: PropTypes.func,
  };
  if (!data.length) return <Empty>No data to display now</Empty>;

  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
