import PropTypes from "prop-types";

function Empty({ resourceName }) {
  Empty.propTypes = {
    resourceName: PropTypes.string,
  };

  return <p>No {resourceName} could be found.</p>;
}

export default Empty;
