import React from "react";
import {
  CardContainer,
  FoodCard,
  FoodContainer,
  FoodContent,
  FoodImg,
  FoodTitle,
} from "src/styles/pages/home/foodStyle";

const FoodSection = () => {
  const foods = [
    { name: "만드리곤드레밥", img: "https://www.visitbusan.net/uploadImgs/files/cntnts/20191209162810545_ttiel" },
    { name: "금수복국 본점", img: "https://www.visitbusan.net/uploadImgs/files/cntnts/20200819172845727_ttiel" },
    { name: "민물가든", img: "https://www.visitbusan.net/uploadImgs/files/cntnts/20191217101816206_ttiel" },
    { name: "부흥식당", img: "https://www.visitbusan.net/uploadImgs/files/cntnts/20191217113924538_ttiel" },
    { name: "가야할매밀면", img: "https://www.visitbusan.net/uploadImgs/files/cntnts/20191217201857896_ttiel" },
    { name: "다온", img: "https://www.visitbusan.net/uploadImgs/files/cntnts/20191219100305084_ttiel" },
    { name: "동백섬횟집", img: "https://www.visitbusan.net/uploadImgs/files/cntnts/20200818125906889_ttiel" },
    { name: "르꽁비브", img: "https://www.visitbusan.net/uploadImgs/files/cntnts/20191219101750249_ttiel" },
  ];
  return (
    <FoodContainer>
      <FoodTitle>부산맛집</FoodTitle>
      <CardContainer>
        {foods.map((food, idx) => (
          <FoodCard key={idx}>
            <FoodImg src={food.img} alt={food.name} />
            <FoodContent>
              <h2>{food.name}</h2>
              <div>
                <span>영업시간 9시부터 6시</span>
                <span>부산광역시 북구 어쩌구</span>
              </div>
            </FoodContent>
          </FoodCard>
        ))}
      </CardContainer>
    </FoodContainer>
  );
};

export default FoodSection;
