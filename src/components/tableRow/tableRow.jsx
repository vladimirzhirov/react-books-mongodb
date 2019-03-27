import React from "react";
import { Link } from "react-router-dom";
import "./tableRow.less";

const TableRow = ({ id, isbn, image, name, description, removeRow }) => {
  const handleRemoveRow = () => {
    removeRow(id);
  };

  return (
    <tr className="tr-book">
      <td className="text-left">
        <img src={image.url} alt="" width="130px" height="150px" />{" "}
      </td>
      <td className="td-name">{name}</td>
      <td>{isbn}</td>
      <td>{description}</td>
      <td className="align-middle">
        <Link to={"/books/edit/" + id} className="btn btn-primary">
          Edit
        </Link>
      </td>
      <td className="align-middle">
        <button className="btn btn-danger" onClick={handleRemoveRow}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
