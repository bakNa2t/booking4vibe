import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

import Select from "./Select";

function SortBy({ options }) {
  SortBy.propTypes = {
    options: PropTypes.array,
  };

  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  const sortBy = searchParams.get("sortBy") || "";

  return (
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
