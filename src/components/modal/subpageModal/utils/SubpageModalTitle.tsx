import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ModalAddr, ModalCategory, ModalViewTitle } from "styles/components/modal";

interface SubpageModalTitleProps {
  url?: string;
  categoryColor?: string;
  category?: string;
  name: string;
  addr?: string;
}

const SubpageModalTitle = ({ url, categoryColor, category, name, addr }: SubpageModalTitleProps) => {
  return (
    <>
      {url && (
        <Link to={url} target="_blank">
          <IoHomeSharp />
          홈페이지
        </Link>
      )}
      <ModalViewTitle>
        {category && categoryColor && <ModalCategory $category={categoryColor}>{category}</ModalCategory>}
        {name}
      </ModalViewTitle>
      {addr && <ModalAddr>{addr}</ModalAddr>}
    </>
  );
};

export default SubpageModalTitle;
