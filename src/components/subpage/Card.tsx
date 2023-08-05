import React from "react";
import { CardCategory, CardContent, CardElement, CardImg, CardTitle } from "styles/components/subpage/card";
import { CardProps } from "types/subpage";

const Card = ({ item, subCategories, onClick }: CardProps) => {
  return (
    <CardElement onClick={() => onClick()}>
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
