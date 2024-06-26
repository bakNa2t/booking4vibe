import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-emerald-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const StyledSpan = styled.span`
  color: var(--color-brand-800);
  font-size: inherit;
  font-weight: 600;
  font-family: "Sono";
  text-shadow: 1px 1px 2px var(--color-brand-600);
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  ConfirmDelete.propTypes = {
    resourceName: PropTypes.string.isRequired,
    onConfirm: PropTypes.func,
    onCloseModal: PropTypes.func,
    disabled: PropTypes.bool.isRequired,
  };

  return (
    <StyledConfirmDelete>
      <Heading as="h3">
        Delete <StyledSpan>{resourceName}</StyledSpan>
      </Heading>
      <p>
        Are you sure you want to delete this{" "}
        <StyledSpan>{resourceName}</StyledSpan> permanently? This action cannot
        be undone.
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
