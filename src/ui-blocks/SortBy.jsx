import PropTypes from "prop-types";
import Select from "./Select";

function SortBy({ options }) {
  SortBy.propTypes = {
    options: PropTypes.array,
  };

  return <Select options={options} />;
}

export default SortBy;
