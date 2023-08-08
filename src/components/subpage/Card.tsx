import React from "react";
import { CardCategory, CardImg, CardItem, CardTitle } from "styles/components/subpage/card";
import { CardProps } from "types/subpage";

const Card = ({ item, subCategories, onClick }: CardProps) => {
  return (
    <CardItem onClick={() => onClick()}>
      <CardImg src={item.main_img_n} alt={item.name} />
      <CardTitle>
        {subCategories && <CardCategory $category={subCategories[item.category]}>{item.category}</CardCategory>}
        {item.name}
      </CardTitle>
    </CardItem>
  );
};

export default Card;
