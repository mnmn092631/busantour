import React from "react";
import { SelectContainer, SelectItem } from "styles/components/subpage/categorySelect";
import { CategorySelectProps } from "types/subpage";

const CategorySelect = ({ categories, state, setState }: CategorySelectProps) => {
  return (
    <SelectContainer>
      {categories.map((category, idx) => (
        <SelectItem key={idx} onClick={() => setState(category)} $active={state === category}>
          {category}
        </SelectItem>
      ))}
    </SelectContainer>
  );
};

export default CategorySelect;
