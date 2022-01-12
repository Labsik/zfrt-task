import React from "react";
import { useDispatch } from "react-redux";

import { setCurrentPage } from "../../store/actions";

interface Props {
  pages: Array<number>;
  currentPage: number;
}

const Pagination = ({ pages, currentPage }: Props) => {
  const dispatch = useDispatch();

  console.log(pages);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {pages?.map((page: number, index: number) => (
          <li
            key={index}
            className={`page-item  ${(currentPage as number) === page && "active"}`}
            onClick={() => {
              dispatch(setCurrentPage(page));
              window.scrollTo(0, 0);
            }}
          >
            <a className="page-link" href="#!">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
