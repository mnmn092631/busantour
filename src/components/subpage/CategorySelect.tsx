import React from "react";
import { SelectContainer, SelectItem } from "styles/components/subpage/categorySelect";
import { CategorySelectProps } from "types/subpage";

const CategorySelect = ({ categories, cate, setSearchParams }: CategorySelectProps) => {
  return (
    <SelectContainer>
      {categories.map((category, idx) => (
        <SelectItem key={idx} onClick={() => setSearchParams({ cate: category })} $active={cate === category}>
          {category}
        </SelectItem>
      ))}
    </SelectContainer>
  );
};

export default CategorySelect;
