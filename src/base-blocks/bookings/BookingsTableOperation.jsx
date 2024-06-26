import SortBy from "../../ui-blocks/SortBy";
import Filter from "../../ui-blocks/Filter";
import TableOperations from "../../ui-blocks/TableOperations";

function BookingsTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDay-asc", label: "Sort by date (earlier first)" },
          { value: "startDay-desc", label: "Sort by date (recent first)" },
          { value: "totalPrice-asc", label: "Sort by amount (low first)" },
          {
            value: "totalPrice-desc",
            label: "Sort by amount (high first)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default BookingsTableOperations;
