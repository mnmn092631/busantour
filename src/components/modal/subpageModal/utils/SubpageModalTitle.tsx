import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { ModalAddr, ModalCategory, ModalHompageUrl, ModalViewTitle } from "styles/components/modal";

interface SubpageModalTitleProps {
  url?: string;
  categoryColor?: string;
  category?: string;
  name: string;
  addr?: string;
  title?: string;
}

const SubpageModalTitle = ({ url, categoryColor, category, name, addr }: SubpageModalTitleProps) => {
  return (
    <>
      {url && (
        <ModalHompageUrl to={url} target="_blank">
          <IoHomeSharp />
          홈페이지
        </ModalHompageUrl>
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
