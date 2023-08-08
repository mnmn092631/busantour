import React from "react";
import { PaginationContainer, PageBtn } from "styles/subpage/utils";
import { PaginationProps } from "types/components";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Pagination = ({ cate, page, setSearchParams, numPage }: PaginationProps) => {
  if (!numPage || numPage < 2) return null;

  return (
    <PaginationContainer>
      <PageBtn onClick={() => setSearchParams({ cate, page: (page - 1).toString() })} disabled={page === 1}>
        <GrFormPrevious />
        이전
      </PageBtn>
      {Array(numPage)
        .fill(null)
        .map((_, i) => (
          <PageBtn key={i} onClick={() => setSearchParams({ cate, page: (i + 1).toString() })} $active={i + 1 === page}>
            {i + 1}
          </PageBtn>
        ))}
      <PageBtn onClick={() => setSearchParams({ cate, page: (page + 1).toString() })} disabled={page === numPage}>
        다음
        <GrFormNext />
      </PageBtn>
    </PaginationContainer>
  );
};

export default Pagination;
