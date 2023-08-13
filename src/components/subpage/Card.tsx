import React from "react";
import { CardImg, CardItem, CardTitle } from "styles/components/subpage/card";
import { DataCate } from "styles/utils";
import { CardProps } from "types/subpage";

const Card = ({ item, onClick }: CardProps) => {
  return (
    <CardItem onClick={() => onClick()}>
      <CardImg src={item.main_img_n} alt={item.name} />
      <CardTitle>
        {"category" in item && "categoryColor" in item && (
          <DataCate $category={item.categoryColor}>{item.category}</DataCate>
        )}
        {item.name}
      </CardTitle>
    </CardItem>
  );
};

export default Card;
