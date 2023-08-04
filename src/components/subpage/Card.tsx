import React from "react";
import { CardCategory, CardContent, CardElement, CardImg, CardTitle, CloseBtn } from "styles/components/subpage/card";
import { CardProps } from "types/subpage";

const Card = ({ item, selectedStateId, setSelectedStateId, subCategories }: CardProps) => {
  return (
    <CardElement
      key={item.id}
      // 전체일 때 1, 자신이 선택된 경우 2, 그 외 3
      $active={selectedStateId === 0 ? 1 : item.id === selectedStateId ? 2 : 3}
      onClick={() => setSelectedStateId(item.id)}
    >
      <CloseBtn
        onClick={e => {
          e.stopPropagation();
          setSelectedStateId(0);
        }}
      />
      <CardImg src={item.main_img_n} alt={item.name} />
      <div>
        <CardTitle>
          {subCategories && <CardCategory $category={subCategories[item.category]}>{item.category}</CardCategory>}
          {item.name}
        </CardTitle>
        <CardContent>{item.addr}</CardContent>
      </div>
    </CardElement>
  );
};

export default Card;
