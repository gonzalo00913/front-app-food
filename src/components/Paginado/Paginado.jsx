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
      <div>{pageButtons}</div>
    </div>
  );
};

export default Paginado;
