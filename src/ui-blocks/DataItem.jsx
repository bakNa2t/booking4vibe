import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 3rem;
    height: 3rem;
    color: var(--color-brand-600);
  }
`;

function DataItem({ icon, label, children }) {
  DataItem.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
    children: PropTypes.node,
  };

  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

export default DataItem;
