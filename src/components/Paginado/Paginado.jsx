import React from "react";
import Style from "../Paginado/paginado.module.css";

const Paginado = ({ currentPage, totalPages, onPageChange }) => {
  const pageButtons = [];

  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    const isActive = currentPage === pageNumber;

    const handleClick = () => {
      onPageChange(pageNumber);
    };

    let button;
    if (isActive) {
      button = (
        <button
          key={pageNumber}
          className={Style.PaginadoBtnClic}
          onClick={handleClick}
        >
          {pageNumber}
        </button>
      );
    } else {
      button = (
        <button
          className={Style.PaginadoBtn}
          key={pageNumber}
          onClick={handleClick}
        >
          {pageNumber}
        </button>
      );
    }

    pageButtons.push(button);
  }

  return (
    <div className={Style.pagination}>
      <button
        className={Style.PaginadoBtn}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        &lt;&lt;
      </button>
      <button
        className={Style.PaginadoBtn}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <div className={Style.pageButtonsContainer}>{pageButtons}</div>
      <button
        className={Style.PaginadoBtn}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
      <button
        className={Style.PaginadoBtn}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Paginado;

