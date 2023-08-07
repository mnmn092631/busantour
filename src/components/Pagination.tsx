import React from "react";
import { PaginationContainer, PageBtn } from "styles/subpage/utils";
import { PaginationProps } from "types/components";

const Pagination = ({ cate, page, setSearchParams, numPage }: PaginationProps) => {
  if (numPage === 0) return null;

  return (
    <PaginationContainer>
      <button onClick={() => setSearchParams({ cate, page: (page - 1).toString() })} disabled={page === 1}>
        &lt;prev
      </button>
      {Array(numPage)
        .fill(null)
        .map((_, i) => (
          <PageBtn key={i} onClick={() => setSearchParams({ cate, page: (i + 1).toString() })} $active={i + 1 === page}>
            {i + 1}
          </PageBtn>
        ))}
      <button onClick={() => setSearchParams({ cate, page: (page + 1).toString() })} disabled={page === numPage}>
        next&gt;
      </button>
    </PaginationContainer>
  );
};

export default Pagination;
