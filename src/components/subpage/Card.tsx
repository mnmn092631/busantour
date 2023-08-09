import React from "react";
import { CardImg, CardItem, CardLikeBtn, CardTitle } from "styles/components/subpage/card";
import { DataCate } from "styles/utils";
import { CardProps } from "types/subpage";
import { PiHeartLight, PiHeartFill } from "react-icons/pi";

const Card = ({ item, onClick }: CardProps) => {
  return (
    <CardItem onClick={() => onClick()}>
      <CardImg src={item.main_img_n} alt={item.name} />
      <CardLikeBtn>
        <PiHeartLight />
        {/* <PiHeartFill /> */}
      </CardLikeBtn>
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
