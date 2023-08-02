import React from "react";
import { PaginationContainer, PageBtn } from "src/styles/pages/subpage/utils";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  numPage: number | undefined;
}

const Pagination = ({ setPage, page, numPage }: Props) => {
  return (
    <PaginationContainer>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;prev
      </button>
      {Array(numPage)
        .fill(null)
        .map((_, i) => (
          <PageBtn key={i} onClick={() => setPage(i + 1)} $active={i + 1 === page}>
            {i + 1}
          </PageBtn>
        ))}
      <button onClick={() => setPage(page + 1)} disabled={page === numPage}>
        next&gt;
      </button>
    </PaginationContainer>
  );
};

export default Pagination;
