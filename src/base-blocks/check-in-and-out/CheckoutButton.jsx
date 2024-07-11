import PropTypes from "prop-types";

import Button from "../../ui-blocks/Button";

import useCheckout from "./useCheckout";

function CheckoutButton({ bookingId }) {
  CheckoutButton.propTypes = {
    bookingId: PropTypes.number,
  };

  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
