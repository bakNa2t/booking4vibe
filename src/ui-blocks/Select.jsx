import styled from "styled-components";
import PropTypes from "prop-types";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-emerald-100)"
        : "var(--color-emerald-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-emerald-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

function Select({ options, value, onChange, ...props }) {
  Select.propTypes = {
    options: PropTypes.array,
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  return (
    <StyledSelect value={value} {...props} onChange={onChange}>
      {options.map((elem) => (
        <option value={elem.value} key={elem.value}>
          {elem.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
