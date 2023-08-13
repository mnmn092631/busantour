import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { PiHeartLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ModalAddr, ModalCategory, ModalLikeBtn, ModalViewTitle } from "styles/components/modal";

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
      <div>
        {url && (
          <Link to={url} target="_blank">
            <IoHomeSharp />
            홈페이지
          </Link>
        )}
      </div>
      <ModalViewTitle>
        {category && categoryColor && <ModalCategory $category={categoryColor}>{category}</ModalCategory>}
        {name}
      </ModalViewTitle>
      {addr && <ModalAddr>{addr}</ModalAddr>}
    </>
  );
};

export default SubpageModalTitle;
