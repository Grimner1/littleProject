import React from "react";
import moment from "moment";

const TableElement = ({ elem }) => {
  return (
    <tr>
      <td className="bs-checkbox ">
        <input data-index={elem.id} name="btSelectItem" type="checkbox" />
      </td>
      <td>{elem.FirstName}</td>
      <td>{moment(elem.Date).format("YYYY MM DD")}</td>
      <td>{elem.Examination}</td>
      <td>{elem.Note}</td>
    </tr>
  );
};

export default TableElement;
