import React from "react";
import classNames from "classnames";

const Pagination = props => {
  const handleClick = np => {
    props.onPageClick(np, props.bookPerPage);
  };

  const renderPageLink = (pageNum, text) => {
    const linkClass = classNames({
      "page-item": true,
      active: props.page === pageNum
    });
    return (
      <li className={linkClass} key={pageNum.toString()}>
        <a
          className="page-link"
          href="#"
          onClick={e => {
            e.preventDefault();
            handleClick(pageNum);
          }}
        >
          {text}
        </a>
      </li>
    );
  };

  const getPageNumbers = n => [...Array(n)].map((_, index) => index + 1);

  const isPrevLink = props.page > 1;
  const isNextLink = props.page > 1 && props.page < props.pages;

  return (
    <ul className="pagination w-100">
      {isPrevLink ? renderPageLink(props.page - 1, "Previous") : null}
      {getPageNumbers(props.pages).map(pageNum => {
        return renderPageLink(pageNum, pageNum.toString());
      })}
      {isNextLink ? renderPageLink(props.pages, "Next") : null}
    </ul>
  );
};

export default Pagination;
