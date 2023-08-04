import React from "react";
import { PaginationContainer, PageBtn } from "styles/subpage/utils";
import { PaginationProps } from "types/components";

const Pagination = ({ setPage, page, numPage }: PaginationProps) => {
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
