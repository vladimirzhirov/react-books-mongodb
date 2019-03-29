import React from "react";
import TableRow from "../tableRow/tableRow";
import Paging from "../pagination/pagination";
import WithErrorMessage from "../error/withErrorMessage";

const BooksList = props => {
  const renderRow = () => {
    return props.books.map(function(object, i) {
      return (
        <TableRow
          id={object._id}
          key={object._id}
          image={object.image}
          isbn={object.isbn}
          name={object.name}
          description={object.description}
          removeRow={props.removeRow}
        />
      );
    });
  };

  console.log("render books", props);

  return (
    <WithErrorMessage error={props.error}>
      <div className="my-30">
        <h3 align="center">Books</h3>
        <Paging
          page={props.page}
          pages={props.pages}
          {...props}
          onPageClick={props.onPageClick}
        />
        <table className="table table-striped  mt-3" width="800px">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>ISBN</th>
              <th>Description</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>{renderRow()}</tbody>
        </table>
      </div>
    </WithErrorMessage>
  );
};

export default BooksList;
